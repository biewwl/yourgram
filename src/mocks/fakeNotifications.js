import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

const fakeNotifications = [
  {
    type: "like",
    sender: {
      ...getUser("johnnn"),
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "",
    },
  },
  {
    type: "comment",
    sender: {
      ...getUser("lifebella"),
    },
    elapsedMinutes: 21,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "OHHHH NOOO OMGG I'TS NOT REAL BRO!",
    },
  },
  {
    type: "follow",
    sender: {
      ...getUser("realblack"),
    },
    elapsedMinutes: 30,
    payload: {
      post: "",
      comment: "",
    },
  },
  {
    type: "like",
    sender: {
      ...getUser("cat.life"),
    },
    elapsedMinutes: 65,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "",
    },
  },
  {
    type: "like",
    sender: {
      ...getUser("astravlog"),
    },
    elapsedMinutes: 65,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "",
    },
  },
  {
    type: "follow",
    sender: {
      ...getUser("astravlog"),
    },
    elapsedMinutes: 1500,
    payload: {
      post: "",
      comment: "",
    },
  },
  {
    type: "follow",
    sender: {
      ...getUser("johnnn"),
    },
    elapsedMinutes: 1500,
    payload: {
      post: "",
      comment: "",
    },
  },
  {
    type: "comment",
    sender: {
      ...getUser("studious.cat"),
    },
    elapsedMinutes: 21,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment: "OHHHH NOOO OMGG I'TS NOT REAL BRO!",
    },
  },
  {
    type: "like",
    sender: {
      ...getUser("studious.cat"),
    },
    elapsedMinutes: 21,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment: "",
    },
  },
];

export default fakeNotifications;
