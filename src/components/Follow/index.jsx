import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { unfollowUser } from "../../helpers/managerFollows";
import "./styles/Follow.css";

function Follow({ follow, nickLogged, reloadFollows, type }) {
  const { recipient, sender } = follow;

  const unfollow = () => {
    if (type === "following") unfollowUser(nickLogged, recipient.nick);
    if (type === "followers") {
      unfollowUser(sender.nick, nickLogged);
    }
    reloadFollows();
  };

  const user = type === "following" ? recipient : sender;

  const validDelete =
    type === "following"
      ? sender.nick === nickLogged || recipient.nick === nickLogged
      : recipient.nick === nickLogged || sender.nick === nickLogged;

  return (
    <section className="_follow">
      <Link to={`/${user.nick}`}>
        <img src={user.avatar} alt="" className="_follow_avatar" />
      </Link>
      <p>
        <span>
          <Link to={`/${user.nick}`} className="_follow_nick">
            {user.nick}
            {recipient.verified && (
              <Icon
                icon="codicon:verified-filled"
                className="_verified_user_notify"
              />
            )}
          </Link>
        </span>
      </p>
      {type === "following" && validDelete && (
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
    </section>
  );
}
const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(Follow);
