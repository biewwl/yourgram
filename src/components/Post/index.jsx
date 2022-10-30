import { Icon } from "@iconify/react";
import PostActions from "../PostActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCommentsById } from "../../mocks/fakeComments";
import "./styles/Post.css";
import "./styles/Post-mobile.css";

function Post({ postData }) {
  const {
    thumbnail,
    user, // user name (owner of the post)
    verified,
    avatar,
    nick, // owner of the post
    nickUser, // logged user
    avatarImage,
    id, // post id
  } = postData;

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
        <img
          src={thumbnail}
          alt={`_post_${id}_from_${nick}`}
          className="_post_thumbnail"
        />
        <PostActions
          isView={false}
          postData={{
            ...postData,
            comments,
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
