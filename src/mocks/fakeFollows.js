import { getUser } from "./fakeUsers";

const fakeFollows = [
  {
    type: "follow",
    sender: "realblack",
    recipient: "gabriel",
    elapsedMinutes: 30,
  },
];


export const fakeFollowsFullData = fakeFollows.map((post) => {
  const { sender, recipient, elapsedMinutes } = post;
  return {
    type: "follow",
    sender: {
      ...getUser(sender),
    },
    recipient: {
      ...getUser(recipient),
    },
    elapsedMinutes,
    payload: {
      post: "",
      comment: "",
    },
  };
});

export const getFollowsForLogged = (logged) => {
  return fakeFollowsFullData
    .filter((follow) => {
      const { recipient } = follow;
      return recipient.nick === logged;
    });
};

export default fakeFollows;
