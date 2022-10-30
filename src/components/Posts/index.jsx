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
        return (
          <Post
            key={i}
            postData={post}
          />
        );
      })}
    </article>
  );
}
