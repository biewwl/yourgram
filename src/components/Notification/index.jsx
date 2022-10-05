import { formatTimer } from "../../helpers";
import "./styles/Notification.css";

function Notification({ notification }) {
  const { elapsedMinutes, payload, sender, type } = notification;

  const timer = () => {
    const time = formatTimer(elapsedMinutes);
    const { timer, format } = time;
    if (format === 'minutes') {
      if (timer > 1) return `${timer} minutes ago`;
      return `${timer} minute ago`;
    }
    if (format === 'hour') {
      if (timer > 1) return `${timer} hours ago`;
      return `${timer} hour ago`;
    }
    if (format === 'day') {
      if (timer > 1) return `${timer} days ago`;
      return `${timer} day ago`;
    }
  }

  return (
    <section className="_notification">
      <img src={sender.avatar} alt="" className="_notify_avatar_sender" />
      <p>
        <span className="_notify_sender_nick">{sender.nick}</span>
        <span className="_notify_feedback">
          {type === "like" && 'liked your post'}
          {type === "comment" && `comment: ${payload.comment}`}
          {type === "follow" && 'follow you'}
        </span>
        <span className="_notify_elapsed_minutes">{timer()}</span>
        {type !== "follow" && <img
          src={payload.post.thumbnail}
          alt=""
          className="_notify_thumbnail"
        />}
      </p>
    </section>
  );
}

export default Notification;
