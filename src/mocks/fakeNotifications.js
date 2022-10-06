import { getCommentsForLogged } from "./fakeComments";
import { getLikesForLogged } from "./fakeLikes";
import { getFollowsForLogged } from "./fakeFollows";
// import { getPost } from "./fakePosts";
// import { getUser } from "./fakeUsers";

// const fakeNotifications = [
//   {
//     type: "like",
//     sender: {
//       ...getUser("johnnn"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 10,
//     payload: {
//       post: {
//         ...getPost("lolcat", 1),
//       },
//       comment: "",
//     },
//   },
//   {
//     type: "follow",
//     sender: {
//       ...getUser("realblack"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 30,
//     payload: {
//       post: "",
//       comment: "",
//     },
//   },
//   {
//     type: "like",
//     sender: {
//       ...getUser("cat.life"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 65,
//     payload: {
//       post: {
//         ...getPost("lolcat", 1),
//       },
//       comment: "",
//     },
//   },
//   {
//     type: "like",
//     sender: {
//       ...getUser("astravlog"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 65,
//     payload: {
//       post: {
//         ...getPost("lolcat", 1),
//       },
//       comment: "",
//     },
//   },
//   {
//     type: "follow",
//     sender: {
//       ...getUser("astravlog"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 1500,
//     payload: {
//       post: "",
//       comment: "",
//     },
//   },
//   {
//     type: "follow",
//     sender: {
//       ...getUser("johnnn"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 1500,
//     payload: {
//       post: "",
//       comment: "",
//     },
//   },
//   {
//     type: "like",
//     sender: {
//       ...getUser("studious.cat"),
//     },
//     recipient: {
//       ...getUser("lolcat"),
//     },
//     elapsedMinutes: 21,
//     payload: {
//       post: {
//         ...getPost("lolcat", 2),
//       },
//       comment: "",
//     },
//   },
//   ...getCommentsForLogged("lolcat"),
// ];

export const getNotificationsByNick = (nick) => {
  const comments = [...getCommentsForLogged(nick)];
  const likes = [...getLikesForLogged(nick)];
  const follows = [...getFollowsForLogged(nick)];
  const notifications = [
    ...comments,
    ...likes,
    ...follows,
  ]
  return notifications.filter((n) => n.recipient.nick === nick);
};

// export default fakeNotifications;
