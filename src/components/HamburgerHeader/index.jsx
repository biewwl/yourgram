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
      <button onClick={editProfile}>Edit Profile</button>
      <button onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default connect()(HamburgerHeader);
