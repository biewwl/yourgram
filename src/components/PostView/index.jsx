import PostActions from "../PostActions";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCommentsById } from "../../mocks/fakeComments";
import { useEffect, useState } from "react";
import PostComments from "../PostComments";
import "./styles/PostView.css";
import "./styles/PostView-mobile.css";

function PostView({ postData, nickUser, avatarImage }) {
  const {
    thumbnail,
    user, // user name (owner of the post)
    subtitle,
    verified,
    avatar, // avatar (owner of the post)
    postDate,
    nick: nickPost, // owner of the post
    id,
  } = postData;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(getCommentsById(nickPost, id));
  }, [nickPost, id]);

  const image = nickPost === nickUser ? avatarImage : avatar;

  const reloadComments = () => setComments(getCommentsById(nickPost, id));

  return (
    <section className="_post_view">
      <article className="_post_view_content">
        <section className="_post_view_thumbnail">
          <img src={thumbnail} alt="" />
        </section>
        <section className="_post_view_data">
          <div className="_post_view_fixed_header">
            <section className="_post_view_header">
              <Link to={`/${nickPost}`}>
                <img
                  src={image}
                  alt={nickPost}
                  className="_post_view_header_avatar"
                />
              </Link>
              <Link to={`/${nickPost}`} className="_post_view_user">
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
                <Link to={`/${nickPost}`} className="_post_view_subtitle_user">
                  {user}
                </Link>
                <span className="_post_view_subtitle_content">{subtitle}</span>
              </span>
              <span className="_post_view_date">{postDate}</span>
            </p>
          </div>
          <PostComments
            nickPost={nickPost}
            idPost={id}
            reloadComments={reloadComments}
            comments={comments}
          />
          <PostActions
            isView={true}
            reloadComments={reloadComments}
            postData={postData}
          />
        </section>
      </article>
    </section>
  );
}

const mapStateToProps = (state) => ({
  nickUser: state.user.nick,
  avatarImage: state.user.avatar,
});

export default connect(mapStateToProps)(PostView);
