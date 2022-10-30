import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { commentPost, isLiked, managerLike } from "../../helpers/managerPosts";
import { getCommentsById } from "../../mocks/fakeComments";
import "./styles/PostActions.css";
import "./styles/PostActions-mobile.css";

function PostActions({ postData, reloadComments, status, nickLogged, isView }) {
  const {
    user, // user name (owner of the post)
    id, // post id
    subtitle,
    postDate,
    nick: nickPost // owner of the post
  } = postData;

  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const setIsLiked = () => {
      setLiked(isLiked(nickLogged, id, nickPost));
    };
    setIsLiked();
  }, [nickLogged, id, nickPost]);

  const handleLike = () => {
    managerLike(nickLogged, id, nickPost);
    setLiked(isLiked(nickLogged, id, nickPost));
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setComment(value);
  };

  const checkSend = () => {
    return comment.length <= 0;
  };

  const handleComment = () => {
    commentPost(nickLogged, id, nickPost, comment);
    setComment("");
    reloadComments();
  };

  const countPost = getCommentsById(nickPost, id).length;

  return (
    <>
      {status && (
        <section className={`_post_bar${isView ? " _post_view_post_bar" : ""}`}>
          <div>
            <span onClick={handleLike} className={liked ? "_liked_post" : ""}>
              {!liked && <Icon icon="mdi:cards-heart-outline" />}
              {liked && <Icon icon="mdi:cards-heart" />}
            </span>
            {
              <label htmlFor={`_comment_${id}_${nickPost}`}>
                <Icon icon="mdi:comment-outline" />
              </label>
            }
            <span>
              <Icon icon="eva:paper-plane-fill" />
            </span>
          </div>
          <Icon icon="mdi:bookmark-outline" />
        </section>
      )}
      {!isView && (
        <section className="_post_data">
          <span className="_post_data_user_subtitle">
            <Link to={`/${nickPost}`} className="_post_data_user">
              {user}
            </Link>
            <span className="_post_subtitle">{subtitle}</span>
          </span>
        </section>
      )}
      {!isView && (
        <section className="_post_date">
          <span className="_date">{postDate}</span>
        </section>
      )}
      <section className="_post_comments">
        {!isView && (
          <Link to={`/${nickPost}/${id}`} className="_comments_link">
            {countPost === 0 && `See post`}
            {countPost === 1 && `See post and ${countPost} comment`}
            {countPost > 1 && `See post and all ${countPost} comments`}
          </Link>
        )}
        {status && (
          <section className="_comment">
            <Icon icon="ic:outline-emoji-emotions" />
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={handleChange}
              id={`_comment_${id}_${nickPost}`}
            />
            <button disabled={checkSend()} onClick={handleComment}>
              <Icon icon="charm:paper-plane" />
            </button>
          </section>
        )}
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
  status: state.user.status,
});

export default connect(mapStateToProps)(PostActions);
