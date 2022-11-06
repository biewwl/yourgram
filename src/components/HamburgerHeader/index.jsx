import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/actions/userAction";
import "./styles/HamburgerHeader.css";

function HamburgerHeader({ dispatch }) {
  const nav = useNavigate();

  const editProfile = () => {
    nav(`/profile/edit`);
  };

  const logout = () => {
    dispatch(logoutUser());
    nav("/");
  };

  return (
    <aside className="_menu_hamburger_header">
      <button onClick={editProfile}>
        <Icon icon="bi:gear-wide-connected" />
        <span>Edit Profile</span>
      </button>
      <button onClick={logout} className="_logout_button">
        <Icon icon="heroicons-outline:logout" />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default connect()(HamburgerHeader);
