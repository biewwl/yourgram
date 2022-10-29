import { getCommentsForLogged } from "./fakeComments";
import { getLikesForLogged } from "./fakeLikes";
import { getFollowsForLogged } from "./fakeFollows";

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
