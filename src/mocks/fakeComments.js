import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

const fakeComments = [
  {
    sender: {
      ...getUser("johnnn"),
    },
    recipient: {
      ...getUser("lolcat"),
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("lolcat", 1),
      },
      comment: "Oh Boy!",
    },
    id: 1,
  },
  {
    sender: {
      ...getUser("lifebella"),
    },
    recipient: {
      ...getUser("lolcat"),
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
    sender: {
      ...getUser("studious.cat"),
    },
    recipient: {
      ...getUser("lolcat"),
    },
    elapsedMinutes: 21,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment:
        "OHHHH NOOO OMGG I'TS NOT REAL BRO! OHHHH NOOO OMGG I'TS NOT REAL BRO! OHHHH NOOO OMGG I'TS NOT REAL BRO! OHHHH NOOO OMGG I'TS NOT REAL BRO!",
    },
  },
  {
    sender: {
      ...getUser("thecute"),
    },
    recipient: {
      ...getUser("lolcat"),
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment: "cool",
    },
  },
  {
    sender: {
      ...getUser("cat.life"),
    },
    recipient: {
      ...getUser("lolcat"),
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment: "you crazy man!",
    },
  },
  {
    sender: {
      ...getUser("astravlog"),
    },
    recipient: {
      ...getUser("lolcat"),
    },
    elapsedMinutes: 30,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment: "oww",
    },
  },
  {
    sender: {
      ...getUser("astravlog"),
    },
    recipient: {
      ...getUser("realblack"),
    },
    elapsedMinutes: 39,
    payload: {
      post: {
        ...getPost("realblack", 1),
      },
      comment: "The king! 👑",
    },
  },
  {
    sender: {
      ...getUser("johnnn"),
    },
    recipient: {
      ...getUser("realblack"),
    },
    elapsedMinutes: 70,
    payload: {
      post: {
        ...getPost("realblack", 1),
      },
      comment: "🆙🆙",
    },
  },
  {
    sender: {
      ...getUser("lifebella"),
    },
    recipient: {
      ...getUser("realblack"),
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("realblack", 1),
      },
      comment: "pretty ❤️",
    },
  },
  {
    sender: {
      ...getUser("meowzeiro"),
    },
    recipient: {
      ...getUser("realblack"),
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("realblack", 1),
      },
      comment: "meow meow",
    },
  },
  {
    sender: {
      ...getUser("thuglife"),
    },
    recipient: {
      ...getUser("realblack")
    },
    elapsedMinutes: 10,
    payload: {
      post: {
        ...getPost("realblack", 1),
      },
      comment: "like",
    },
  },
];

export const getCommentsForLogged = (logged, id) => {
  return fakeComments
    .filter((comment) => {
      const { recipient, payload } = comment;
      const getType = id
        ? recipient.nick === logged && id === payload.post.id
        : recipient.nick === logged;
      return getType;
    })
    .map((comment) => ({ ...comment, type: "comment" }));
};

export const getCommentsById = (nick, id) => {
  return fakeComments.filter(
    (comment) =>
      comment.payload.post.id === id && comment.payload.post.nick === nick
  );
};

export default fakeComments;
