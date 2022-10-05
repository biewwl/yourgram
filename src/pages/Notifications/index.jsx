import Header from "../../components/Header";
import Notification from "../../components/Notification";
import fakeNotifications from "../../mocks/fakeNotifications";
import "./styles/Notifications.css";
import "./styles/Notifications-mobile.css";

function Notifications() {
  return (
    <div className="_notifications_page">
      <Header page="notifications" />
      <main className="_notifications">
        {fakeNotifications.map((notification, i) => (
          <Notification notification={notification} key={i} />
        ))}
      </main>
    </div>
  );
}

export default Notifications;
