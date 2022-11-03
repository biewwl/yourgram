import { useEffect, useState } from "react";
import Notification from "../Notification";
import { getNotificationsByNick } from "../../mocks/fakeNotifications";
import { connect } from "react-redux";
import "./styles/Notifications.css";
import "./styles/Notifications-mobile.css";

function Notifications({ nick }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const setNotify = () => {
      const notify = getNotificationsByNick(nick) ?? [];
      setNotifications(notify);
    };
    setNotify();
  }, [nick]);

  return (
    <aside className="_notifications">
      {notifications.map((notification, i) => (
        <Notification notification={notification} key={i} />
      ))}
    </aside>
  );
}

const mapStateToProps = (state) => ({
  nick: state.user.nick,
});

export default connect(mapStateToProps)(Notifications);
