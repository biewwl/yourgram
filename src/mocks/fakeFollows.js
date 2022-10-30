import lS from "manager-local-storage";
import { getElapsedMinutes } from "../helpers";
import { getUser } from "./fakeUsers";

export const fakeFollowsFullData = (follows) =>
  follows.map((post) => {
    const { sender, recipient, date } = post;
    return {
      type: "follow",
      sender: {
        ...getUser(sender),
      },
      recipient: {
        ...getUser(recipient),
      },
      elapsedMinutes: getElapsedMinutes(date),
      payload: {
        post: "",
        comment: "",
      },
    };
  });

export const getFollowsForLogged = (logged) => {
  const fakeFollows = lS.get("biewwl-follows") ?? [];
  return fakeFollowsFullData(fakeFollows).filter((follow) => {
    const { recipient } = follow;
    return recipient.nick === logged;
  });
};

export const getFollowingForLogged = (logged) => {
  const fakeFollows = lS.get("biewwl-follows") ?? [];
  return fakeFollowsFullData(fakeFollows).filter((follow) => {
    const { sender } = follow;
    return sender.nick === logged;
  });
};
