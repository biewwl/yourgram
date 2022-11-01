import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import {
  alreadyFollow,
  followUser,
  unfollowUser,
} from "../../helpers/managerFollows";

function FollowButtons({ followData, nickLogged, type, reloadFollows }) {
  const { recipient, sender } = followData;

  const unfollow = (sender, recipient) => {
    unfollowUser(sender, recipient);
    reloadFollows();
  };

  const follow = (sender, recipient) => {
    followUser(sender, recipient);
    reloadFollows();
  };

  const verifyFollowSender = () => alreadyFollow(nickLogged, sender.nick);
  const verifyFollowRecipient = () => alreadyFollow(nickLogged, recipient.nick);

  return (
    <>
      {type === "following" && sender.nick === nickLogged && (
        <button
          className="_follow_btn _unfollow"
          onClick={() => unfollow(nickLogged, recipient.nick)}
        >
          <Icon icon="bx:user-minus" />
          <span>unfollow</span>
        </button>
      )}
      {/* {type === "following" && recipient.nick === nickLogged && (
        <button className="_follow_btn _unfollow">
          <Icon icon="bx:user-x" />
          <span>remove</span>
        </button>
      )} */}
      {type === "following" &&
        recipient.nick !== nickLogged &&
        !verifyFollowRecipient() && (
          <button
            className="_follow_btn _follow"
            onClick={() => follow(nickLogged, recipient.nick)}
          >
            <Icon icon="bx:user-plus" />
            <span>follow</span>
          </button>
        )}
      {type === "following" &&
        sender.nick !== nickLogged &&
        verifyFollowRecipient() && (
          <button
            className="_follow_btn _unfollow"
            onClick={() => unfollow(nickLogged, recipient.nick)}
          >
            <Icon icon="bx:user-minus" />
            <span>unfollow</span>
          </button>
        )}
      {/* {type === "followers" && sender.nick === nickLogged && (
        <button className="_follow_btn _unfollow">
          <Icon icon="bx:user-minus" />
          <span>unfollow</span>
        </button>
      )} */}
      {type === "followers" && recipient.nick === nickLogged && (
        <button
          className="_follow_btn _remove"
          onClick={() => unfollow(sender.nick, nickLogged)}
        >
          <Icon icon="bx:user-x" />
          <span>remove</span>
        </button>
      )}
      {type === "followers" &&
        sender.nick !== nickLogged &&
        !verifyFollowSender() && (
          <button
            className="_follow_btn _follow"
            onClick={() => follow(nickLogged, sender.nick)}
          >
            <Icon icon="bx:user-plus" />
            <span>follow</span>
          </button>
        )}
      {type === "followers" &&
        sender.nick !== nickLogged &&
        verifyFollowSender() && (
          <button
            className="_follow_btn _unfollow"
            onClick={() => unfollow(nickLogged, sender.nick)}
          >
            <Icon icon="bx:user-minus" />
            <span>unfollow</span>
          </button>
        )}
    </>
  );
}

const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(FollowButtons);
