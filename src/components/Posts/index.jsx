import { Icon } from "@iconify/react";
import Post from "../Post";
import "./styles/Posts.css";

export default function Posts({ posts, title }) {
  return (
    <article className="_post_content">
      {title && (
        <div className="_post_title">
          <Icon icon="gridicons:posts" />
          <h2>Posts</h2>
        </div>
      )}
      {posts.map((post, i) => {
        const { thumbnail, user, capture, verified, avatar, postDate, nick } =
          post;
        return (
          <Post
            thumbnail={thumbnail}
            user={user}
            capture={capture}
            verified={verified}
            avatar={avatar}
            postDate={postDate}
            key={i}
            nick={nick}
          />
        );
      })}
    </article>
  );
}
