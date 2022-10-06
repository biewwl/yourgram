import { Icon } from "@iconify/react";
import { useState } from "react";
import PostBar from "../PostBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/Post.css";
import "./styles/Post-mobile.css";
import { getCommentsById } from "../../mocks/fakeComments";

function Post({
  thumbnail,
  user,
  subtitle,
  verified,
  avatar,
  postDate,
  nick,
  nickUser,
  avatarImage,
  id,
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

  const countPost = getCommentsById(nick, id).length

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
          <Link to={`/${nick}`} className="_post_data_user">
            {user}
          </Link>
          <span className="_post_subtitle">{subtitle}</span>
        </section>
        <section className="_post_date">
          <span className="_date">{postDate}</span>
        </section>
      </section>
      <section className="_post_comments">
        <Link to={`/${nick}/${id}`} className="_comments_link">
          { countPost === 0 && `See post` }
          { countPost === 1 && `See post and ${countPost} comment` }
          { countPost > 1 && `See post and all ${countPost} comments` }
        </Link>
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
