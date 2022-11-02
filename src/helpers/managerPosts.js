import lS from "manager-local-storage";

const compare = (post, sender, postId, recipient, same) => {
  const samePost =
    post.sender === sender &&
    post.postId === postId &&
    post.recipient === recipient;
  const differentPost = !samePost;
  return same ? samePost : differentPost;
};

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
    const updatedLikes = currentLikes.filter((post) =>
      compare(post, sender, postId, recipient, false)
    );
    return lS.set("biewwl-like-posts", updatedLikes);
  }
};

export const isLiked = (sender, postId, recipient) => {
  const lSLikes = lS.get("biewwl-like-posts") ?? [];
  return lSLikes.some((like) =>
    compare(like, sender, postId, recipient, true)
  );
};

export const managerLike = (sender, postId, recipient) => {
  const liked = isLiked(sender, postId, recipient);
  if (!liked) return likePost(sender, postId, recipient);
  unlikePost(sender, postId, recipient);
};

export const commentPost = (sender, postId, recipient, comment) => {
  const currentComments = lS.get("biewwl-comment-posts") ?? [];
  const qtyCommentsByPost = currentComments.filter((post) =>
    compare(post, sender, postId, recipient, true)
  ).length;
  const dataComment = {
    sender,
    recipient,
    postId,
    date: new Date(),
    comment,
    id: qtyCommentsByPost,
  };
  if (!currentComments) return lS.set("biewwl-comment-posts", [dataComment]);
  lS.set("biewwl-comment-posts", [...currentComments, dataComment]);
};

export const uncommentPost = (id, postId, recipient) => {
  const currentComments = lS.get("biewwl-comment-posts") ?? [];
  if (currentComments) {
    const updatedLikes = currentComments.filter(
      (like) =>
        !(
          like.id === id &&
          like.postId === postId &&
          like.recipient === recipient
        )
    );
    return lS.set("biewwl-comment-posts", updatedLikes);
  }
};
