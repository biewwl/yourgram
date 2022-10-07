import { Icon } from "@iconify/react";
import "./styles/ProfileBar.css";
import "./styles/ProfileBar-mobile.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userAction";

function ProfileBar({ nick, posts, nickLogged, edit, dispatch }) {
  const nav = useNavigate();

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

  const isLogged = nick === nickLogged;

  return (
    <section className="_profile_stats_bar">
      <section className="_profile_actions">
        {!isLogged && (
          <>
            <button>+ Follow</button>
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
      {!edit && (
        <section className="_profile_stats">
          <span className="_profile_stats_bar_icon _followers">
            <div>
              <Icon icon="lucide:users" />
              <span>Followers</span>
            </div>
            27M
          </span>
          <span className="_profile_stats_bar_icon _following">
            <div>
              <Icon icon="mingcute:user-follow-line" />
              <span>Following</span>
            </div>
            99
          </span>
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

export default connect()(ProfileBar);
