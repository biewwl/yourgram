import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
// import PostComponent from "../../components/Post";
import PostView from "../../components/PostView";
import { getPost } from "../../mocks/fakePosts";
import { getCommentsForLogged } from "../../mocks/fakeComments";
import "./styles/Post.css";
import { useEffect, useState } from "react";

function Post() {
  const nav = useNavigate();

  const [userData, setUserData] = useState({});
  // const [comments, setComments] = useState([]);

  const { nick, post } = useParams();

  useEffect(() => {
    const userDataReturn = getPost(nick, Number(post));
    if (!userDataReturn) return nav("/");
    window.scrollTo(0, 0);
    return setUserData(userDataReturn);
  }, [nav, nick, post]);

  const commentsForLogged = getCommentsForLogged(nick, Number(post));

  return (
    <div className="_post_page">
      <Header />
      <PostView userData={userData} comments={commentsForLogged} />
    </div>
  );
}

export default Post;
