import { getAllUsers } from "../mocks/fakeUsers";

export const formatTimer = (minutes) => {
  let timer = Math.floor(minutes);
  let format = "minute";
  if (minutes > 59) {
    timer = Math.floor(minutes / 60);
    format = "hour";
  }
  if (format === "hour" && timer >= 24) {
    timer = Math.floor(timer / 24);
    format = "day";
  }
  if (format === "day" && timer >= 30) {
    timer = Math.floor(timer / 30);
    format = "month";
  }
  if (format === "month" && timer >= 12) {
    timer = Math.floor(timer / 12);
    format = "year";
  }
  return {
    timer,
    format,
  };
};

export const sortByTimer = (a, b) => {
  return a.elapsedMinutes - b.elapsedMinutes;
};

export const validateEmail = (email) => {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) {
    return true;
  }
  return false;
};

export const getElapsedMinutes = (startDate) => {
  const start = new Date(startDate);
  const endDate = new Date();
  let diff = (start.getTime() - endDate.getTime()) / 1000;
  diff /= 60;
  return Math.abs(diff);
};

export const sortFollows = (follows, nick) => {
  const isFollow = follows.some((follow) => follow.recipient.nick === nick);
  const isFollowing = follows.some((follow) => follow.sender.nick === nick);
  if (isFollow || isFollowing)
    return follows.sort((follow) => {
      if (follow.recipient.nick === nick || follow.sender.nick === nick)
        return -1;
      return 0;
    });
  return follows;
};

export const getSearchUsers = (query) => {
  const lCQuery = query.toLowerCase();
  const users = getAllUsers();
  return users
    .filter((user) => {
      return (
        user.nick.includes(lCQuery) || user.user.toLowerCase().includes(lCQuery)
      );
    })
    .sort((a, b) => {
      if (a.nick[0] === lCQuery[0] && b.nick[0] !== lCQuery[0]) return -1;
      if (a.user[0] === lCQuery[0] && b.user[0] !== lCQuery[0]) return -1;
      return 0;
    });
};
