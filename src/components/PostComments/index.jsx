import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { uncommentPost } from "../../helpers/managerPosts";
import "./styles/PostComments.css";
import "./styles/PostComments-mobile.css";

function PostComments({
  nickUser, // logged user
  nickPost, // owner of the post
  idPost,
  reloadComments,
  comments,
}) {
  const uncomment = (idComment) => {
    uncommentPost(idComment, idPost, nickPost);
    reloadComments();
  };

  return (
    <div className="_post_comments_area">
      {comments.map((comment, i) => {
        const { sender, payload, id: idComment, recipient } = comment;
        const validDelete =
          sender.nick === nickUser || recipient.nick === nickUser;
        return (
          <div className="_post_comment_area" key={i}>
            <img
              src={sender.avatar}
              alt=""
              className="_post_comment_area_avatar"
            />
            <span className="_comment_area">
              <span className="_header_comment_area">
                <Link to={`/${sender.nick}`}>
                  {sender.nick}
                  {sender.verified && <Icon icon="codicon:verified-filled" />}
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
  );
}

const mapStateToProps = (state) => ({
  nickUser: state.user.nick,
});

export default connect(mapStateToProps)(PostComments);
