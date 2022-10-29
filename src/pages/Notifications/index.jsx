import Header from "../../components/Header";
import Notification from "../../components/Notification";
import { getNotificationsByNick } from "../../mocks/fakeNotifications";
import { connect } from "react-redux";
import "./styles/Notifications.css";
import "./styles/Notifications-mobile.css";
import { useEffect, useState } from "react";

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
    <div className="_notifications_page">
      <Header page="notifications" />
      <main className="_notifications">
        {notifications.map((notification, i) => (
          <Notification notification={notification} key={i} />
        ))}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  nick: state.user.nick,
});

export default connect(mapStateToProps)(Notifications);
