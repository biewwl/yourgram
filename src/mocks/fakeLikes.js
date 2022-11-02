import lS from "manager-local-storage";
import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";
import { getElapsedMinutes } from "../helpers";

export const fakeLikesFullData = () => {
  const fakeLikes = lS.get("biewwl-like-posts") ?? [];
  return fakeLikes.map((post) => {
    const { sender, postId, recipient, date } = post;
    return {
      type: "like",
      sender: {
        ...getUser(sender),
      },
      recipient: {
        ...getUser(recipient),
      },
      elapsedMinutes: getElapsedMinutes(date),
      payload: {
        post: {
          ...getPost(recipient, postId),
        },
        comment: "",
      },
    };
  });
};

export const getLikesForNick = (nick) => {
  return fakeLikesFullData().filter((like) => {
    const { recipient } = like;
    return recipient.nick === nick;
  });
}; // returns who like post the user

export const getLikesByNick = (nick) => {
  return fakeLikesFullData().filter((like) => {
    const { sender } = like;
    return sender.nick === nick;
  });
}; // returns what posts user like

export const getLikesByPost = (nick, postId) => {
  return getLikesForNick(nick).filter((like) => {
    const { payload } = like;
    return payload.post.id === postId;
  });
}; // returns who like the user post
