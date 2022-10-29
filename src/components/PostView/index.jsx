import PostActions from "../PostActions";
import { Icon } from "@iconify/react";
import "./styles/PostView.css";
import { Link } from "react-router-dom";
import "./styles/PostView-mobile.css";
import { connect } from "react-redux";
import { getCommentsById } from "../../mocks/fakeComments";
import { useEffect, useState } from "react";
import { uncommentPost } from "../../helpers/managerPosts";

function PostView({ userData, nickUser, avatarImage, status }) {
  const { thumbnail, user, subtitle, verified, avatar, postDate, nick, id } =
    userData;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(getCommentsById(nick, id));
  }, [nick, id]);

  const image = nick === nickUser ? avatarImage : avatar;

  const reloadComments = () => setComments(getCommentsById(nick, id));

  const uncomment = (idComment) => {
    uncommentPost(idComment, id, nick);
    reloadComments();
  };

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
                  src={image}
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
            {comments.map((comment, i) => {
              const { sender, payload, id: idComment } = comment;
              const validDelete = sender.nick === nickUser;
              return (
                <div className="_post_view_comment" key={i}>
                  <img
                    src={sender.avatar}
                    alt=""
                    className="_post_view_comment_avatar"
                  />
                  <span className="_comment_area">
                    <span className="_header_comment">
                      <Link to={`/${sender.nick}`}>
                        {sender.nick}
                        {sender.verified && (
                          <Icon icon="codicon:verified-filled" />
                        )}
                      </Link>
                      {validDelete && (
                        <button onClick={() => uncomment(idComment)}>
                          <Icon icon="bi:x" />
                        </button>
                      )}
                    </span>
                    <p>{payload.comment}</p>
                  </span>
                </div>
              );
            })}
          </div>
          <PostActions
            className="_post_view_post_bar"
            reloadComments={reloadComments}
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
      </article>
    </section>
  );
}

const mapStateToProps = (state) => ({
  nickUser: state.user.nick,
  avatarImage: state.user.avatar,
  status: state.user.status,
});

export default connect(mapStateToProps)(PostView);
