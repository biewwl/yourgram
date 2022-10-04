import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Stories from "../../components/Stories";
import fakePosts from "../../mocks/fakePosts";
import Trending from "../../components/Trending";
import "./styles/Home.css";
import "./styles/Home-mobile.css";

export default function Home() {
  return (
    <div className="_home_page">
      <Header />
      <main className="_home_content">
        <Stories />
        <Trending />
        <Posts posts={fakePosts} title={true} />
      </main>
    </div>
  );
}
