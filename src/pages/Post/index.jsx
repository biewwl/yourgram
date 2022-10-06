import { useParams } from "react-router-dom";
import Header from "../../components/Header";
// import PostComponent from "../../components/Post";
import PostView from "../../components/PostView";
import { getPost } from "../../mocks/fakePosts";
import { getCommentsForLogged } from "../../mocks/fakeComments";
import "./styles/Post.css";
import { useEffect } from "react";

function Post() {
  const { nick, post } = useParams();

  const userData = getPost(
    nick,
    Number(post)
  );

  const commentsForLogged = getCommentsForLogged(nick, Number(post))

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="_post_page">
      <Header />
      <PostView
        userData={userData}
        comments={commentsForLogged}
      />
    </div>
  );
}

export default Post;
