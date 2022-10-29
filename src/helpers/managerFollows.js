import lS from "manager-local-storage";

export const followUser = (sender, recipient) => {
  const currentFollows = lS.get("biewwl-follows") ?? [];
  const dataFollow = {
    sender,
    recipient,
    date: new Date(),
  };
  if (!currentFollows) return lS.set("biewwl-follows", [dataFollow]);
  lS.set("biewwl-follows", [...currentFollows, dataFollow]);
};

export const unfollowUser = (sender, recipient) => {
  const currentFollows = lS.get("biewwl-follows") ?? [];
  if (currentFollows) {
    const updatedFollows = currentFollows.filter(
      (follow) => !(follow.sender === sender && follow.recipient === recipient)
    );
    return lS.set("biewwl-follows", updatedFollows);
  }
};

export const alreadyFollow = (sender, recipient) => {
  const lSFollows = lS.get("biewwl-follows") ?? [];
  return lSFollows.some(
    (follow) => follow.sender === sender && follow.recipient === recipient
  );
};

export const managerFollow = (sender, recipient) => {
  const liked = alreadyFollow(sender, recipient);
  if (!liked) return followUser(sender, recipient);
  unfollowUser(sender, recipient);
};

export const followingCount = (nick) => {
  const lSFollows = lS.get("biewwl-follows") ?? [];
  return lSFollows.filter((follow) => follow.sender === nick).length;
};

export const followedCount = (nick) => {
  const lSFollows = lS.get("biewwl-follows") ?? [];
  return lSFollows.filter((follow) => follow.recipient === nick).length;
};
