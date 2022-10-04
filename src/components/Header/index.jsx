import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import "./styles/Header-mobile.css";
import { connect } from "react-redux";

function Header({ nick }) {
  const [querySearch, setQuerySearch] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuerySearch(value);
  };

  return (
    <header className="_header_bar">
      <h1 className="_title_header_bar">Yourgram®</h1>
      <input
        className="_header_search_bar"
        type="text"
        value={querySearch}
        onChange={handleChange}
        placeholder="Pesquisar"
      />
      <nav className="_nav_header_bar">
        <Link to="/feed">
          <Icon icon="fluent:home-20-filled" />
        </Link>
        <Link to="/direct">
          <Icon icon="eva:paper-plane-fill" />
          <span className="_notify"></span>
        </Link>
        <Link to="/new">
          <Icon icon="bx:add-to-queue" />
        </Link>
        <Icon icon="bx:bell" />
        <Link to={`/${nick}`}>
          <img
            src="https://assets.papodehomem.com.br/2015/05/30/05/42/43/431/photo.jpg"
            alt="avatar"
            className="_avatar_header_bar"
          />
        </Link>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  nick: state.user.nick,
});

export default connect(mapStateToProps)(Header);
