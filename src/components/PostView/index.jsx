import PostBar from "../PostBar";
import { Icon } from "@iconify/react";
import "./styles/PostView.css";
import { useState } from "react";
import { getCommentsForLogged } from "../../mocks/fakeComments";
import { Link } from "react-router-dom";
import "./styles/PostView-mobile.css";

function PostView({ userData, comments }) {
  const { thumbnail, user, subtitle, verified, avatar, postDate, nick } =
    userData;

  const [comment, setComment] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setComment(value);
  };

  const checkSend = () => {
    return comment.length <= 0;
  };

  console.log(getCommentsForLogged(nick));

  return (
    <section className="_post_view">
      <article className="_post_view_content">
        <section className="_post_view_thumbnail">
          <img src={thumbnail} alt="" />
        </section>
        <section className="_post_view_data">
          <div className="_post_view_fixed_header">
            <section className="_post_view_header">
              <Link to={`/${nick}`}>
                <img
                  src={avatar}
                  alt={nick}
                  className="_post_view_header_avatar"
                />
              </Link>
              <Link to={`/${nick}`} className="_post_view_user">
                {user}
                {verified && (
                  <Icon
                    icon="codicon:verified-filled"
                    className="_verified_user_post"
                  />
                )}
              </Link>
            </section>
            <p className="_post_view_subtitle">
              <span>
                <Link to={`/${nick}`} className="_post_view_subtitle_user">
                  {user}
                </Link>
                <span className="_post_view_subtitle_content">{subtitle}</span>
              </span>
              <span className="_post_view_date">{postDate}</span>
            </p>
          </div>
          <div className="_post_view_comments">
            {comments.map((comment) => {
              const { sender, payload } = comment;
              return (
                <div className="_post_view_comment">
                  <img
                    src={sender.avatar}
                    alt=""
                    className="_post_view_comment_avatar"
                  />
                  <span>
                    <Link to={`/${sender.nick}`}>{sender.nick}</Link>
                    <p>{payload.comment}</p>
                  </span>
                </div>
              );
            })}
          </div>
          <PostBar />
          <section className="_post_view_comment_input">
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
      </article>
    </section>
  );
}

export default PostView;
