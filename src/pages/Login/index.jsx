import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import "./styles/Login.css";

export default function Login() {
  const nav = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const verifyData = () => {
    const { password, username } = userData;
    return username.length > 2 && password.length > 7;
  };

  const login = () => {
    nav("/feed");
  };

  return (
    <main className="_login_main">
      <article className="_content_login">
        <section className="_intro">
          <img src={logo} alt="logo" className="_logo" />
          <h1>Yourgram®</h1>
          <span className="_text_intro">Share moments!</span>
        </section>
        <form className="_login_form">
          <input
            type="text"
            name="username"
            id="username"
            value={userData.username}
            onChange={handleChange}
            placeholder="User"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </form>
        <button
          disabled={!verifyData()}
          onClick={login}
          className="_login_button"
        >
          Enter
        </button>
      </article>
    </main>
  );
}
