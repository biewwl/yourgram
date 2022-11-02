import { getCommentsForNick } from "./fakeComments";
import { getLikesForNick } from "./fakeLikes";
import { getFollowsByNick } from "./fakeFollows";
import { sortByTimer } from "../helpers";

export const getNotificationsByNick = (nick) => {
  const comments = [...getCommentsForNick(nick)];
  const likes = [...getLikesForNick(nick)];
  const follows = [...getFollowsByNick(nick)];
  const notifications = [...comments, ...likes, ...follows];
  return notifications
    .filter((n) => n.recipient.nick === nick)
    .filter((like) => like.sender.nick !== like.recipient.nick)
    .sort(sortByTimer);
};
