import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
// import PostComponent from "../../components/Post";
import PostView from "../../components/PostView";
import { getPost } from "../../mocks/fakePosts";
import "./styles/Post.css";

function Post() {
  const nav = useNavigate();

  const [postData, setPostData] = useState({});

  const { nick, post } = useParams();

  useEffect(() => {
    const postDataReturn = getPost(nick, Number(post));
    if (!postDataReturn) return nav("/");
    window.scrollTo(0, 0);
    return setPostData(postDataReturn);
  }, [nav, nick, post]);

  return (
    <div className="_post_page">
      <Header />
      <PostView postData={postData} />
    </div>
  );
}

export default Post;
