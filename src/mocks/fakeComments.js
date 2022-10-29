import lS from "manager-local-storage";
import { getElapsedMinutes } from "../helpers";
import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

export const fakeCommentsFullData = (comments) =>
  comments.map((post) => {
    const { sender, postId, recipient, comment, date } = post;
    return {
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

export const getCommentsForLogged = (logged, id) => {
  const fakeComments = lS.get("biewwl-comment-posts") ?? [];
  return fakeCommentsFullData(fakeComments).filter((comment) => {
    const { recipient, payload } = comment;
    const getType = id
      ? recipient.nick === logged && id === payload.post.id
      : recipient.nick === logged;
    return getType;
  });
};

export const getCommentsById = (nick, id) => {
  const fakeLikes = lS.get("biewwl-comment-posts") ?? [];
  return fakeCommentsFullData(fakeLikes).filter(
    (comment) =>
      comment.payload.post.id === id && comment.payload.post.nick === nick
  );
};
