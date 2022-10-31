import { useState } from "react";
import { connect } from "react-redux";
import { fakeAPI } from "../../mocks/fakeAPI";
import logo from "./images/logo.png";
import { loginUser as loginUserAction } from "../../redux/actions/userAction";
import "./styles/Login.css";
import validate from "../../helpers/validateDataJOI";
import { createLoginUser, loginUser } from "../../helpers/managerLogin";

function Login({ dispatch }) {
  // const nav = useNavigate();

  const [create, setCreate] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [errorData, setErrorData] = useState([]);

  const [userData, setUserData] = useState({
    nick: "",
    password: "",
    email: "",
    user: "",
  });

  const login = () => {
    const { nick, password } = userData;
    const { message, login } = loginUser(nick, password);
    if (message) return setInvalidLogin(message);
    dispatch(loginUserAction(login));
  };

  const createLogin = () => {
    createLoginUser(userData);
    dispatch(loginUserAction(userData.nick));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setErrorData("");
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const enterDown = ({ key }) => {
    if (key === "Enter" && verifyDataCreate()) {
      if (create) createLogin();
      if (!create) login();
    }
  };

  const verifyDataLogin = () =>
    userData.nick.length >= 3 && userData.password.length >= 6;

  const verifyDataCreate = () => {
    const isValid = validate(userData, { nick: "", email: "" });
    const { error } = isValid;
    if (error) {
      if (!errorData) {
        setErrorData(error);
      }
      return false;
    }
    return true;
  };

  const alternateMode = () => {
    setCreate(!create);
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
          {create && (
            <>
              <input
                type="text"
                name="user"
                id="user"
                value={userData.user}
                onChange={handleChange}
                placeholder="Name"
                onKeyDown={enterDown}
              />
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                onKeyDown={enterDown}
              />
            </>
          )}
          <input
            type="text"
            name="nick"
            id="nick"
            value={userData.nick}
            onChange={handleChange}
            placeholder={create ? "Nick" : "Nick or email"}
            onKeyDown={enterDown}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            onKeyDown={enterDown}
          />
          {!create && (
            <span className="_login_alternate_mode">
              Don't have an account?
              <span onClick={alternateMode}>Sign up!</span>
            </span>
          )}
          {create && (
            <span className="_login_alternate_mode" onClick={alternateMode}>
              You have an account?
              <span onClick={alternateMode}>Sign in!</span>
            </span>
          )}
        </form>
        <button
          disabled={create ? !verifyDataCreate() : !verifyDataLogin()}
          onClick={create ? createLogin : login}
          className="_login_button"
        >
          Enter
        </button>
        {!create && invalidLogin && (
          <span className="_invalid_message">{invalidLogin}</span>
        )}
        {create && errorData.length > 0 && (
          <span className="_invalid_message">
            {errorData.map((error) => (
              <span className="_error_feedback">{error.error}</span>
            ))}
          </span>
        )}
      </article>
    </main>
  );
}

export default connect()(Login);
