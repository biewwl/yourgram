import { useParams } from "react-router-dom";
import Header from "../../components/Header";
// import PostComponent from "../../components/Post";
import PostView from "../../components/PostView";
import { getPost } from "../../mocks/fakePosts";
import { getCommentsForLogged } from "../../mocks/fakeComments";
import "./styles/Post.css";

function Post() {
  const { nick, post } = useParams();

  const userData = getPost(
    nick,
    Number(post)
  );

  const commentsForLogged = getCommentsForLogged(nick, Number(post))

  return (
    <div className="_post_page">
      <Header />
      {/* <main className="_post_page_content">
        <PostComponent
          thumbnail={thumbnail}
          user={user}
          capture={capture}
          verified={verified}
          avatar={avatar}
          postDate={postDate}
          nick={nick}
        />
      </main> */}
      <PostView
        userData={userData}
        comments={commentsForLogged}
      />
    </div>
  );
}

export default Post;
