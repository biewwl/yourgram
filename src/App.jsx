import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Direct from "./pages/Direct";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import EditProfile from "./pages/EditProfile";
import Post from "./pages/Post";
import { getLogins } from "./helpers/localStorage";
import { connect } from "react-redux";
import "./App.css";
import "./colors/colors.css";

function App({ status }) {

  getLogins();

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={status ? <Home /> : <Login />} />
        {/* <Route exact path="/feed" element={<Home /} /> */}
        <Route exact path="/direct" element={status ? <Direct /> : <Login />} />
        <Route
          exact
          path="/direct/:nick"
          element={status ? <Direct /> : <Login />}
        />
        <Route exact path="/:nick" element={<Profile />} />
        <Route
          exact
          path="/:nick/:post"
          element={<Post />}
        />
        <Route
          exact
          path="/profile/edit"
          element={status ? <EditProfile /> : <Login />}
        />
        <Route
          exact
          path="/notifications"
          element={status ? <Notifications /> : <Login />}
        />
        <Route path="*" element={<h1>ok</h1>} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.user.status,
});

export default connect(mapStateToProps)(App);
