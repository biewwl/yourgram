import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatTimer } from "../../helpers";
import "./styles/Notification.css";

function Notification({ notification, nick }) {
  const { elapsedMinutes, payload, sender, type } = notification;

  const timer = () => {
    const time = formatTimer(elapsedMinutes);
    const { timer, format } = time;
    if (timer > 1) return `${timer} ${format}s ago`;
    return `${timer} ${format} ago`;
  };

  return (
    <section className="_notification">
      <Link to={`/${sender.nick}`}>
        <img src={sender.avatar} alt="" className="_notify_avatar_sender" />
      </Link>
      <p>
        <span>
          {type === "like" && (
            <Icon icon="mdi:cards-heart" className="_notify_icon like" />
          )}
          {type === "comment" && (
            <Icon icon="mdi:comment" className="_notify_icon comment" />
          )}
          {type === "follow" && (
            <Icon
              icon="mingcute:user-follow-fill"
              className="_notify_icon follow"
            />
          )}
          <Link to={`/${sender.nick}`} className="_notify_sender_nick">
            {sender.nick}
            {sender.verified && (
              <Icon
                icon="codicon:verified-filled"
                className="_verified_user_notify"
              />
            )}
          </Link>
          <span className="_notify_feedback">
            {type === "like" && "liked your post."}
            {type === "comment" && `commented your post.`}
            {type === "follow" && "followed you."}
          </span>
        </span>
        <span className="_notify_elapsed_minutes">{timer()}</span>
      </p>
      {type !== "follow" && (
        <Link to={`/${nick}/${payload.post.id}`}>
          <img
            src={payload.post.thumbnail}
            alt=""
            className="_notify_thumbnail"
          />
        </Link>
      )}
    </section>
  );
}
const mapStateToProps = (state) => ({
  nick: state.user.nick,
});

export default connect(mapStateToProps)(Notification);
