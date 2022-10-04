import "./styles/PostGrid.css";

function PostsGrid({ posts }) {
  return (
    <article className="_posts_grid">
      {posts.map((post) => {
        const { thumbnail, capture } = post;
        return <img src={thumbnail} alt={capture} />;
      })}
    </article>
  );
}

export default PostsGrid;
