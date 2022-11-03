import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { alreadyFollow, followUser, unfollowUser } from "../../helpers/managerFollows";
import FollowButtons from "../FollowButtons";
import "./styles/Follow.css";

function Follow({ followData, reloadFollows, type }) {
  const { recipient, sender } = followData;

  const user = type === "following" ? recipient : sender;

  return (
    <section className="_follow">
      <Link to={`/${user.nick}`}>
        <img src={user.avatar} alt="" className="_follow_avatar" />
      </Link>
      <p>
        <Link to={`/${user.nick}`} className="_follow_data">
          <span className="_follow_nick">
            {user.nick}
            {user.verified && (
              <Icon
                icon="codicon:verified-filled"
                className="_verified_user_notify"
              />
            )}
          </span>
          <span>{user.user}</span>
        </Link>
      </p>
      <FollowButtons followData={followData} type={type} reloadFollows={reloadFollows} />
    </section>
  );
}

const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(Follow);
