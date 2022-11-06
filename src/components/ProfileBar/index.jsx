import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  alreadyFollow,
  followedCount,
  followingCount,
  managerFollow,
} from "../../helpers/managerFollows";
import "./styles/ProfileBar.css";
import "./styles/ProfileBar-mobile.css";

function ProfileBar({ nick, posts, nickLogged, edit, status }) {
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
        </section>
      )}
      {!edit && (
        <section className="_profile_stats">
          <Link
            to={`/${nick}/followers`}
            className="_profile_stats_bar_icon _followers"
          >
            {followedCount(nick)}
            <div>
              <Icon icon="lucide:users" />
              <span>Followers</span>
            </div>
          </Link>
          <Link
            to={`/${nick}/following`}
            className="_profile_stats_bar_icon _following"
          >
            {followingCount(nick)}
            <div>
              <Icon icon="mingcute:user-follow-line" />
              <span>Following</span>
            </div>
          </Link>
          <span className="_profile_stats_bar_icon _posts">
            {posts}
            <div>
              <Icon icon="gridicons:posts" />
              <span>Posts</span>
            </div>
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
