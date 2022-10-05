import "./styles/PostGrid.css";

function PostsGrid({ posts }) {
  return (
    <article className="_posts_grid">
      {posts.map((post, i) => {
        const { thumbnail, capture } = post;
        return <img src={thumbnail} alt={capture} key={i} />;
      })}
    </article>
  );
}

export default PostsGrid;
