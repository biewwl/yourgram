import lS from "manager-local-storage";

export const likePost = (sender, postId, recipient) => {
  const currentLikes = lS.get("biewwl-like-posts");
  const dataLike = {
    sender,
    recipient,
    postId,
    date: new Date(),
  };
  if (!currentLikes) return lS.set("biewwl-like-posts", [dataLike]);
  lS.set("biewwl-like-posts", [...currentLikes, dataLike]);
};

export const unlikePost = (sender, postId, recipient) => {
  const currentLikes = lS.get("biewwl-like-posts");
  if (currentLikes) {
    const updatedLikes = currentLikes.filter(
      (like) =>
        !(
          like.sender === sender &&
          like.postId === postId &&
          like.recipient === recipient
        )
    );
    return lS.set("biewwl-like-posts", updatedLikes);
  }
};

export const isLiked = (sender, postId, recipient) => {
  const lSLikes = lS.get("biewwl-like-posts") ?? [];
  return lSLikes.some(
    (like) =>
      like.sender === sender &&
      like.postId === postId &&
      like.recipient === recipient
  );
};

export const managerLike = (sender, postId, recipient) => {
  const liked = isLiked(sender, postId, recipient);
  if (!liked) return likePost(sender, postId, recipient);
  unlikePost(sender, postId, recipient);
};

export const commentPost = (sender, postId, recipient, comment) => {
  const currentComments = lS.get("biewwl-comment-posts");
  const dataComment = {
    sender,
    recipient,
    postId,
    date: new Date(),
    comment,
  };
  if (!currentComments) return lS.set("biewwl-comment-posts", [dataComment]);
  lS.set("biewwl-comment-posts", [...currentComments, dataComment]);
};

export const uncommentPost = (sender, postId, recipient) => {
  const currentLikes = lS.get("biewwl-like-posts");
  if (currentLikes) {
    const updatedLikes = currentLikes.filter(
      (like) =>
        !(
          like.sender === sender &&
          like.postId === postId &&
          like.recipient === recipient
        )
    );
    return lS.set("biewwl-like-posts", updatedLikes);
  }
};
