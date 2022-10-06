import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

const fakeLikes = [
  {
    type: "like",
    sender: {
      ...getUser("johnnn"),
    },
    recipient: {
      ...getUser("lolcat")
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "",
    },
  },
  // {
  //   type: "follow",
  //   sender: {
  //     ...getUser("realblack"),
  //   },
  //   recipient: {
  //     ...getUser("lolcat")
  //   },
  //   elapsedMinutes: 30,
  //   payload: {
  //     post: "",
  //     comment: "",
  //   },
  // },
  {
    type: "like",
    sender: {
      ...getUser("cat.life"),
    },
    recipient: {
      ...getUser("lolcat")
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
    recipient: {
      ...getUser("lolcat")
    },
    elapsedMinutes: 65,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "",
    },
  },
  // {
  //   type: "follow",
  //   sender: {
  //     ...getUser("astravlog"),
  //   },
  //   recipient: {
  //     ...getUser("lolcat")
  //   },
  //   elapsedMinutes: 1500,
  //   payload: {
  //     post: "",
  //     comment: "",
  //   },
  // },
  // {
  //   type: "follow",
  //   sender: {
  //     ...getUser("johnnn"),
  //   },
  //   recipient: {
  //     ...getUser("lolcat")
  //   },
  //   elapsedMinutes: 1500,
  //   payload: {
  //     post: "",
  //     comment: "",
  //   },
  // },
  {
    type: "like",
    sender: {
      ...getUser("studious.cat"),
    },
    recipient: {
      ...getUser("lolcat")
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

export const getLikesForLogged = (logged, id) => {
  return fakeLikes
    .filter((like) => {
      const { recipient, payload } = like;
      const getType = id
        ? recipient.nick === logged && id === payload.post.id
        : recipient.nick === logged;
      return getType;
    })
    .map((like) => ({ ...like, type: "like" }));
};

export default fakeLikes;
