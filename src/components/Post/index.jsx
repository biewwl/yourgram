import { Icon } from "@iconify/react";
import { useState } from "react";
import PostBar from "../PostBar";
import "./styles/Post.css";
import "./styles/Post-mobile.css";
import { Link } from "react-router-dom";

export default function Post({
  thumbnail,
  user,
  capture,
  verified,
  avatar,
  postDate,
  nick
}) {
  const [comment, setComment] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setComment(value);
  };

  const checkSend = () => {
    return comment.length <= 0;
  };

  return (
    <section className="_post">
      <section className="_post_top_content">
        <Link to={`/${nick}`} className="_post_user">
          <img src={avatar} alt="avatar" className="_post_user_avatar" />
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
          <span className="_post_data_user">{user}</span>
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
