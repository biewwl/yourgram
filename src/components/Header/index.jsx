import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/Header.css";
import "./styles/Header-mobile.css";
import { getNotificationsByNick } from "../../mocks/fakeNotifications";
import SearchResults from "../SearchResults";
import { getSearchUsers } from "../../helpers";
import Notifications from "../Notifications";

function Header({ nick, page, avatar, status }) {
  const [querySearch, setQuerySearch] = useState("");
  const [results, setResults] = useState([]);
  const [menuNotify, setMenuNotify] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuerySearch(value);
    setResults(getSearchUsers(value));
    setMenuNotify(false);
  };

  const openCloseNotify = () => {
    setMenuNotify(!menuNotify);
  };

  const haveNotify = getNotificationsByNick(nick).length > 0;

  return (
    <header className="_header_bar">
      <Link to="/" className="_title_header_bar">
        Yourgram®
      </Link>
      <div className="_search_area">
        <input
          className="_header_search_bar"
          type="search"
          value={querySearch}
          onChange={handleChange}
          placeholder="Search"
        />
        {querySearch && !menuNotify && (
          <SearchResults results={results} setQuerySearch={setQuerySearch} />
        )}
      </div>
      <nav className="_nav_header_bar">
        {status && (
          <>
            <Link to="/">
              {page === "home" && <Icon icon="majesticons:home-simple" />}
              {page !== "home" && <Icon icon="majesticons:home-simple-line" />}
            </Link>
            <Link to="/direct">
              {page === "direct" && <Icon icon="bxs:paper-plane" />}
              {page !== "direct" && <Icon icon="bx:paper-plane" />}
              <span className="_notify"></span>
            </Link>
            <Link to="/new">
              <Icon icon="bx:add-to-queue" />
            </Link>
            <span onClick={openCloseNotify} className="_notifications_area">
              {menuNotify && <Icon icon="bxs:bell" />}
              {menuNotify && <Notifications />}
              {!menuNotify && <Icon icon="bx:bell" />}
              <div className="_notifications_area_notify">
                {haveNotify && <span className="_notify"></span>}
              </div>
            </span>
            <Link to={`/${nick}`}>
              <img src={avatar} alt="avatar" className="_avatar_header_bar" />
            </Link>
          </>
        )}
        {!status && (
          <Link to={"/"} className="_header_login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  nick: state.user.nick,
  avatar: state.user.avatar,
  status: state.user.status,
});

export default connect(mapStateToProps)(Header);
