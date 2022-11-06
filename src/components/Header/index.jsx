import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNotificationsByNick } from "../../mocks/fakeNotifications";
import SearchResults from "../SearchResults";
import { getSearchUsers } from "../../helpers";
import Notifications from "../Notifications";
import HamburgerHeader from "../HamburgerHeader";
import "./styles/Header.css";
import "./styles/Header-mobile.css";

function Header({ nick, page, avatar, status }) {
  const [querySearch, setQuerySearch] = useState("");
  const [results, setResults] = useState([]);
  const [menuNotify, setMenuNotify] = useState(false);
  const [menuHamburger, setMenuHamburger] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuerySearch(value);
    setResults(getSearchUsers(value));
    setMenuNotify(false);
    setMenuHamburger(false);
  };

  const openCloseNotify = () => {
    setMenuNotify(!menuNotify);
    setMenuHamburger(false);
  };

  const openCloseHamburger = () => {
    setMenuHamburger(!menuHamburger);
    setMenuNotify(false);
  };

  const haveNotify = getNotificationsByNick(nick).length > 0;

  return (
    <header className="_header_bar">
      <div className="_header_menu_logo">
        {status && (
          <span onClick={openCloseHamburger} className="_menu">
            <Icon icon="bx:menu" />
            {menuHamburger && <HamburgerHeader />}
          </span>
        )}
        <Link to="/" className={`_title_header_bar${status ? ' logged' : ''}`}>
          Yourgram®
        </Link>
      </div>
      <div className="_search_area">
        <input
          className="_header_search_bar"
          type="search"
          value={querySearch}
          onChange={handleChange}
          placeholder="Search"
        />
        {querySearch && !menuHamburger && !menuNotify && (
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
              {page === "new" && <Icon icon="bxs:add-to-queue" />}
              {page !== "new" && <Icon icon="bx:add-to-queue" />}
            </Link>
            <span onClick={openCloseNotify} className="_notifications_area">
              {menuNotify && <Icon icon="bxs:bell" />}
              {!menuNotify && <Icon icon="bx:bell" />}
              {menuNotify && <Notifications />}
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
