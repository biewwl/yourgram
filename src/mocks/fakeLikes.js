import lS from "manager-local-storage";
import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";
import { getElapsedMinutes } from "../helpers";

export const fakeLikesFullData = (likes) =>
  likes.map((post) => {
    const { sender, postId, recipient, date } = post;
    console.log(date);
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

export const getLikesForLogged = (logged, id) => {
  const fakeLikes = lS.get("biewwl-like-posts") ?? [];
  return fakeLikesFullData(fakeLikes)
    .filter((like) => {
      const { recipient, payload } = like;
      const getType = id
        ? recipient.nick === logged && id === payload.post.id
        : recipient.nick === logged;
      return getType;
    })
    .filter((like) => like.sender.nick !== like.recipient.nick);
};
