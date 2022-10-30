import { Link } from "react-router-dom";
import "./styles/PostGrid.css";

function PostsGrid({ posts }) {
  return (
    <article className="_posts_grid">
      {posts.map((post, i) => {
        const { thumbnail, subtitle, id, nick } = post;
        return (
          <Link to={`/${nick}/${id}`}>
            <img src={thumbnail} alt={subtitle} key={i} />
          </Link>
        );
      })}
    </article>
  );
}

export default PostsGrid;
