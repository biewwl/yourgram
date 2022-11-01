import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFollowingForLogged,
  getFollowsForLogged,
} from "../../mocks/fakeFollows";
import { connect } from "react-redux";
import "./styles/Follows.css";
import "./styles/Follows-mobile.css";
import Follow from "../../components/Follow";
import Profile from "../Profile";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Header from "../../components/Header";
import { sortFollows } from "../../helpers";

function Follows({ type, nickLogged }) {
  const [follows, setFollows] = useState([]);

  const { nick } = useParams();

  useEffect(() => {
    const setCurrentFollows = () => {
      if (type === "following") {
        const currentFollows = getFollowingForLogged(nick) ?? [];
        setFollows(currentFollows);
      }
      if (type === "followers") {
        const currentFollows = getFollowsForLogged(nick) ?? [];
        setFollows(currentFollows);
      }
    };
    setCurrentFollows();
  }, [nick, type]);

  const reloadFollows = () => {
    if (type === "following") {
      const currentFollows = getFollowingForLogged(nick) ?? [];
      setFollows(currentFollows);
    }
    if (type === "followers") {
      const currentFollows = getFollowsForLogged(nick) ?? [];
      setFollows(currentFollows);
    }
  };

  return (
    <div className="_follows_page_content">
      <Profile />
      <div className="_follows_page">
        <main className="_follows">
          <section className="_header_follows">
            <h4>
              {type === "following" ? "Following" : "Followers"} ({" "}
              {follows.length} )
            </h4>
            <Link to={`/${nick}`} className="_quit_follows">
              <Icon icon="bi:x" />
            </Link>
          </section>
          {sortFollows(follows, nickLogged).map((followData, i) => (
            <Follow
              followData={followData}
              key={i}
              reloadFollows={reloadFollows}
              type={type}
            />
          ))}
        </main>
      </div>
      <Header />
    </div>
  );
}

const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(Follows);
