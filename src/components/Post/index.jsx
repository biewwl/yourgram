import { Icon } from "@iconify/react";
import PostBar from "../PostBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCommentsById } from "../../mocks/fakeComments";
import "./styles/Post.css";
import "./styles/Post-mobile.css";

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
  const image = nick === nickUser ? avatarImage : avatar;

  const comments = getCommentsById(nick, id);

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
        <PostBar
          postData={{
            user,
            nick,
            subtitle,
            postDate,
            id,
            comments,
            sender: nickUser,
          }}
        />
      </section>
    </section>
  );
}

const mapStateToProps = (state) => ({
  nickUser: state.user.nick,
  avatarImage: state.user.avatar,
});

export default connect(mapStateToProps)(Post);
