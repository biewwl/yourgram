import { Icon } from "@iconify/react";
import { useState } from "react";
import PostBar from "../PostBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/Post.css";
import "./styles/Post-mobile.css";

function Post({
  thumbnail,
  user,
  capture,
  verified,
  avatar,
  postDate,
  nick,
  nickUser,
  avatarImage
}) {
  const [comment, setComment] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setComment(value);
  };

  const checkSend = () => {
    return comment.length <= 0;
  };

  const image = nick === nickUser ? avatarImage : avatar;

  return (
    <section className="_post">
      <section className="_post_top_content">
        <Link to={`/${nick}`} className="_post_user">
          <img src={image} alt="avatar" className="_post_user_avatar" />
          <span>{user}</span>
          {verified && (
            <Icon
              icon="codicon:verified-filled"
              className="_verified_user_post"
            />
          )}
        </Link>
        <img src={thumbnail} alt="trending_post" className="_post_thumbnail" />
        <PostBar />
        <section className="_post_data">
          <Link to={`/${nick}`} className="_post_data_user">{user}</Link>
          <span className="_post_capture">{capture}</span>
        </section>
        <section className="_post_date">
          <span className="_date">{postDate}</span>
        </section>
      </section>
      <section className="_post_comments">
        <span className="_comments_link">See all 500 comments</span>
        <section className="_comment">
          <Icon icon="ic:outline-emoji-emotions" />
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleChange}
          />
          <button disabled={checkSend()}>Send</button>
        </section>
      </section>
    </section>
  );
}

const mapStateToProps = (state) => ({
  nickUser: state.user.nick,
  avatarImage: state.user.avatar,
});

export default connect(mapStateToProps)(Post);
