import lS from "manager-local-storage";
import { getElapsedMinutes } from "../helpers";
import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

export const fakeCommentsFullData = () => {
  const fakeComments = lS.get("biewwl-comment-posts") ?? [];
  return fakeComments.map((post) => {
    const { sender, postId, recipient, comment, date, id } = post;
    return {
      id,
      type: "comment",
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
        comment,
      },
    };
  });
};

export const getCommentsForNick = (nick) => {
  return fakeCommentsFullData().filter((comment) => {
    const { recipient } = comment;
    return recipient.nick === nick;
  });
}; // returns all comments for user

export const getCommentsById = (nick, id) => {
  return fakeCommentsFullData().filter(
    (comment) =>
      comment.payload.post.id === id && comment.payload.post.nick === nick
  );
}; // returns all comments for user post
