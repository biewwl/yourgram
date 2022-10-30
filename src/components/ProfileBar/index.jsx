import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userAction";
import {
  alreadyFollow,
  followedCount,
  followingCount,
  managerFollow,
} from "../../helpers/managerFollows";
import "./styles/ProfileBar.css";
import "./styles/ProfileBar-mobile.css";
import { Link } from "react-router-dom";

function ProfileBar({ nick, posts, nickLogged, edit, dispatch, status }) {
  const nav = useNavigate();

  const [statusFollow, setStatusFollow] = useState(false);

  useEffect(() => {
    const setFollow = () => {
      setStatusFollow(alreadyFollow(nickLogged, nick));
    };
    setFollow();
  }, [nickLogged, nick]);

  const sendMessage = () => {
    nav(`/direct/${nick}`);
  };

  const editProfile = () => {
    nav(`/profile/edit`);
  };

  const logout = () => {
    dispatch(logoutUser());
    nav("/");
  };

  const follow = () => {
    managerFollow(nickLogged, nick);
    setStatusFollow(alreadyFollow(nickLogged, nick));
  };

  const isLogged = nick === nickLogged;

  return (
    <section className="_profile_stats_bar">
      {status && (
        <section className="_profile_actions">
          {!isLogged && (
            <>
              <button
                onClick={follow}
                className={statusFollow ? "_button_unfollow" : "_button_follow"}
              >
                {statusFollow && "Unfollow"}
                {!statusFollow && "Follow"}
              </button>
              <button onClick={sendMessage}>Message</button>
            </>
          )}
          {isLogged && !edit && (
            <>
              <button onClick={editProfile}>Edit Profile</button>
              <button className="_logout_button" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </section>
      )}
      {!edit && (
        <section className="_profile_stats">
          <Link
            to={`/${nick}/followers`}
            className="_profile_stats_bar_icon _followers"
          >
            <div>
              <Icon icon="lucide:users" />
              <span>Followers</span>
            </div>
            {followedCount(nick)}
          </Link>
          <Link
            to={`/${nick}/following`}
            className="_profile_stats_bar_icon _following"
          >
            <div>
              <Icon icon="mingcute:user-follow-line" />
              <span>Following</span>
            </div>
            {followingCount(nick)}
          </Link>
          <span className="_profile_stats_bar_icon _posts">
            <div>
              <Icon icon="gridicons:posts" />
              <span>Posts</span>
            </div>
            {posts}
          </span>
        </section>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  status: state.user.status,
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(ProfileBar);
