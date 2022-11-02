import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { alreadyFollow, followUser, unfollowUser } from "../../helpers/managerFollows";
import FollowButtons from "../FollowButtons";
import "./styles/Follow.css";

function Follow({ followData, nickLogged, reloadFollows, type }) {
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
            {recipient.verified && (
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
      {/* {type === "following" && validDelete && (
        <button onClick={unfollow} className="_following _button_unfollow">
          {sender.nick === nickLogged ? (
            <Icon icon="ri:user-unfollow-line" />
          ) : (
            <Icon icon="ep:remove" />
          )}
        </button>
      )}
      {type === "followers" && validDelete && (
        <button onClick={unfollow} className="_following _button_unfollow">
          {recipient.nick === nickLogged ? (
            <Icon icon="ep:remove" />
          ) : (
            <Icon icon="ri:user-unfollow-line" />
          )}
        </button>
      )}
      {type === "following" && validDelete && (
        <button onClick={follow} className="_following _button_unfollow">
          f
          {sender.nick === nickLogged ? (
            <Icon icon="ri:user-unfollow-line" />
          ) : (
            <Icon icon="ep:remove" />
          )}
        </button>
      )}
      {type === "followers" && sender.nick !== nickLogged && !verifyFollow() && (
        <button onClick={follow} className="_following _button_unfollow">
          2
          {recipient.nick === nickLogged ? (
            <Icon icon="ep:remove" />
          ) : (
            <Icon icon="ri:user-unfollow-line" />
          )}
        </button>
      )} */}
    </section>
  );
}

const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(Follow);
