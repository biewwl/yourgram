import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Direct from "./pages/Direct";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import "./App.css";
import "./colors/colors.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/feed" element={<Home />} />
        <Route exact path="/direct" element={<Direct />} />
        <Route exact path="/:nick" element={<Profile />} />
        <Route exact path="notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
