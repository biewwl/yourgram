import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

const fakeNotifications = [
  {
    type: "like",
    sender: {
      ...getUser("johnnn"),
    },
    elapsedMinutes: 67,
    payload: {
      post: {
        ...getPost(1),
      },
      comment: "",
    },
  },
  {
    type: "comment",
    sender: {
      ...getUser("lifebella"),
    },
    elapsedMinutes: 45,
    payload: {
      post: {
        ...getPost(1),
      },
      comment: "OHHHH NOOO!",
    },
  },
  {
    type: "follow",
    sender: {
      ...getUser("realblack"),
    },
    elapsedMinutes: 1440,
    payload: {
      post: "",
      comment: "",
    },
  },
];

export default fakeNotifications;
