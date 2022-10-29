import {  useState } from "react";
import { connect } from "react-redux";
import { validateEmail } from "../../helpers";
import { fakeAPI } from "../../mocks/fakeAPI";
import { verifyExistUser } from "../../mocks/fakeUsers";
import logo from "./images/logo.png";
import { loginUser } from "../../redux/actions/userAction";
import { setLogin } from "../../helpers/localStorage";
import "./styles/Login.css";

function Login({ dispatch }) {
  // const nav = useNavigate();

  const [create, setCreate] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [invalidCreateUser, setInvalidCreateUser] = useState(false);
  const [createExistUser, setCreateExistUser] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });

  const login = () => {
    const { username, password } = userData;
    const { message, login } = fakeAPI.post.login(username, password);
    if (message) return setInvalidLogin(message);
    dispatch(loginUser(login));
    // nav("/feed");
  };

  const createLogin = () => {
    const { username, email, password, name } = userData;
    const { message, login } = fakeAPI.post.createUser(
      username,
      email,
      password,
      name
    );
    if (message) return setInvalidCreateUser(message);
    dispatch(loginUser(username));
    setLogin(login);
    // return nav("/feed");
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (invalidLogin) setInvalidLogin("");
    if (invalidCreateUser) setInvalidCreateUser("");
    setCreateExistUser(false);

    if (create && name === "username") {
      const { existNick } = verifyExistUser(value);
      if (existNick) {
        setInvalidCreateUser("Username not available!");
        setCreateExistUser(true);
      }
    } else if (create) {
      const { existNick } = verifyExistUser(userData.username);
      if (existNick) {
        setInvalidCreateUser("Username not available!");
        setCreateExistUser(true);
      }
    }

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const enterDown = ({ key }) => {
    if (key === 'Enter' && verifyData()) {
      if (create) createLogin();
      if (!create) login();
    }
  }

  const verifyData = () => {
    const { password, username, email } = userData;
    const verifyUser = username.length > 2;
    const verifyPass = password.length > 7;
    const verifyEmail = validateEmail(email);
    if (!create) {
      return verifyUser && verifyPass;
    }
    return !createExistUser && verifyUser && verifyPass && verifyEmail;
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
                name="name"
                id="name"
                value={userData.name}
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
            name="username"
            id="username"
            value={userData.username}
            onChange={handleChange}
            placeholder={create ? "Username" : "Username or email"}
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
          disabled={!verifyData()}
          onClick={create ? createLogin : login}
          className="_login_button"
        >
          Enter
        </button>
        {!create && invalidLogin && (
          <span className="_invalid_message">{invalidLogin}</span>
        )}
        {create && invalidCreateUser && (
          <span className="_invalid_message">{invalidCreateUser}</span>
        )}
      </article>
    </main>
  );
}

export default connect()(Login);
