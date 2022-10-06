import { getPost } from "./fakePosts";
import { getUser } from "./fakeUsers";

const fakeComments = [
  {
    sender: {
      ...getUser("johnnn"),
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
    elapsedMinutes: 30,
    payload: {
      post: {
        ...getPost("lolcat", 2),
      },
      comment: "oww",
    },
  },
];

export const getCommentsForLogged = (logged, id) => {
  return fakeComments
    .filter((comment) => {
      const { payload } = comment;
      const getType = id
        ? payload.post.nick === logged && id === payload.post.id
        : payload.post.nick === logged;
      return getType;
    })
    .map((comment) => ({ ...comment, type: "comment" }));
};

export const getCommentsById = (nick, id) => {
  return fakeComments.filter(
    (comment) => comment.payload.post.id === id && comment.payload.post.nick === nick
  );
};

export default fakeComments;
