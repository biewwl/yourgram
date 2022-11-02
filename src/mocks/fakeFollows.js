import lS from "manager-local-storage";
import { getElapsedMinutes } from "../helpers";
import { getUser } from "./fakeUsers";

export const fakeFollowsFullData = () => {
  const fakeFollows = lS.get("biewwl-follows") ?? [];
  return fakeFollows.map((post) => {
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
};

export const getFollowsByNick = (nick) => {
  return fakeFollowsFullData().filter((follow) => {
    const { recipient } = follow;
    return recipient.nick === nick;
  });
}; // returns who follow the user

export const getFollowingByNick = (nick) => {
  return fakeFollowsFullData().filter((follow) => {
    const { sender } = follow;
    return sender.nick === nick;
  });
}; // returns who's the user follow
