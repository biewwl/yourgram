import { getUser } from "./fakeUsers";

const fakeFollows = [
  {
    type: "follow",
    sender: {
      ...getUser("realblack"),
    },
    recipient: {
      ...getUser("lolcat")
    },
    elapsedMinutes: 30,
    payload: {
      post: "",
      comment: "",
    },
  },
  {
    sender: {
      ...getUser("astravlog"),
    },
    recipient: {
      ...getUser("lolcat")
    },
    elapsedMinutes: 1500,
    payload: {
      post: "",
      comment: "",
    },
  },
  {
    sender: {
      ...getUser("johnnn"),
    },
    recipient: {
      ...getUser("lolcat")
    },
    elapsedMinutes: 1500,
    payload: {
      post: "",
      comment: "",
    },
  },
  {
    sender: {
      ...getUser("johnnn"),
    },
    recipient: {
      ...getUser("gabriel")
    },
    elapsedMinutes: 1500,
    payload: {
      post: "",
      comment: "",
    },
  },
];

export const getFollowsForLogged = (logged) => {
  return fakeFollows
    .filter((follow) => {
      const { recipient } = follow;
      return recipient.nick === logged;
    })
    .map((follow) => ({ ...follow, type: "follow" }));
};

export default fakeFollows;
