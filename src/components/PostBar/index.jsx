import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { commentPost, isLiked, managerLike } from "../../helpers/managerPosts";
import { getCommentsById } from "../../mocks/fakeComments";
import "./styles/PostBar.css";

function PostBar({ className, postData, reloadComments }) {
  const isView = className ? ` ${className}` : "";
  const [liked, setLiked] = useState(false);

  const { user, id, subtitle, postDate, nick, sender } = postData;

  useEffect(() => {
    const setIsLiked = () => {
      setLiked(isLiked(sender, id, nick));
    };
    setIsLiked();
  }, [sender, id, nick]);

  const handleLike = () => {
    managerLike(sender, id, nick);
    setLiked(isLiked(sender, id, nick));
  };

  const [comment, setComment] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setComment(value);
  };

  const checkSend = () => {
    return comment.length <= 0;
  };

  const handleComment = () => {
    commentPost(sender, id, nick, comment);
    setComment("");
    reloadComments();
  };

  const countPost = getCommentsById(nick, id).length;

  return (
    // <PostBar postId={id} nick={nick} />
    <>
      <section className={`_post_bar${isView}`}>
        <div>
          <span onClick={handleLike} className={liked ? "_liked_post" : ""}>
            {!liked && <Icon icon="mdi:cards-heart-outline" />}
            {liked && <Icon icon="mdi:cards-heart" />}
          </span>
          {
            <label htmlFor={`_comment_${id}_${nick}`}>
              <Icon icon="mdi:comment-outline" />
            </label>
          }
          <span>
            <Icon icon="eva:paper-plane-fill" />
          </span>
        </div>
        <Icon icon="mdi:bookmark-outline" />
      </section>
      {!isView && (
        <section className="_post_data">
          <span className="_post_data_user_subtitle">
            <Link to={`/${nick}`} className="_post_data_user">
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
          <Link to={`/${nick}/${id}`} className="_comments_link">
            {countPost === 0 && `See post`}
            {countPost === 1 && `See post and ${countPost} comment`}
            {countPost > 1 && `See post and all ${countPost} comments`}
          </Link>
        )}
        <section className="_comment">
          <Icon icon="ic:outline-emoji-emotions" />
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleChange}
            id={`_comment_${id}_${nick}`}
          />
          <button disabled={checkSend()} onClick={handleComment}>
            Send
          </button>
        </section>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  nick: state.user.nick,
});

export default connect(mapStateToProps)(PostBar);
