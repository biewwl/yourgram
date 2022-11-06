import { Link } from "react-router-dom";
import "./styles/PostGrid.css";
import "./styles/PostGrid-mobile.css";

function PostsGrid({ posts }) {

  return (
    <article className="_posts_grid">
      {posts.map((post, i) => {
        const { thumbnail, subtitle, id, nick } = post;
        return (
          <Link to={`/${nick}/${id}`} key={i}>
            <img src={thumbnail} alt={subtitle} />
          </Link>
        );
      })}
    </article>
  );
}

export default PostsGrid;
