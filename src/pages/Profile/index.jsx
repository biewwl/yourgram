import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ProfileBar from "../../components/ProfileBar";
import PostGrid from "../../components/PostsGrid";
import Posts from "../../components/Posts";
import fakeUsers from "../../mocks/fakeUsers";
import fakePosts from "../../mocks/fakePosts";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./styles/Profile.css";
import "./styles/Profile-mobile.css";
import lS from "manager-local-storage";

function Profile() {
  const { nick } = useParams();
  
  const nav = useNavigate();
  
  const [userData, setUserData] = useState({});
  const [grid, setGrid] = useState(true);
  
  useEffect(() => {
    const lSUsers = lS.get("biewwl-created-logins") ?? [];
    const allLogins = [...lSUsers, ...fakeUsers];
    const userDataReturn = allLogins.find((u) => u.nick === nick);
    if (!userDataReturn) return nav("/");
    return setUserData(userDataReturn);
  }, [nav, nick]);

  const { user, avatar, verified, header } = userData;

  const posts = fakePosts.filter((p) => p.nick === nick);

  const changeView = () => setGrid(!grid);

  return (
    <div className="_profile_page">
      <Header />
      <main className="_profile_content">
        <img src={header} alt={user} className="_header_profile" />
        <section className="_profile_presentation">
          <section className="_profile_user_avatar">
            <img src={avatar} alt={user} className="_avatar_profile" />
            <div className="_profile_user">
              <h1>{user}</h1>
              {verified && (
                <Icon
                  icon="codicon:verified-filled"
                  className="_verified_user_profile"
                />
              )}
            </div>
            <span>@{nick}</span>
          </section>
          <section className="_profile_user_data">
            <ProfileBar
              posts={posts.length}
              nick={nick}
            />
            <div className="_profile_post_title">
              <div>
                <Icon icon="gridicons:posts" />
                <h2>Posts</h2>
              </div>
              <button onClick={changeView} className="_profile_posts_view">
                {grid ? (
                  <Icon icon="bi:view-list" />
                ) : (
                  <Icon icon="akar-icons:grid" />
                )}
              </button>
            </div>
            {grid && <PostGrid posts={posts} />}
            {!grid && <Posts posts={posts} title={false} />}
          </section>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  nickLogged: state.user.nick,
});

export default connect(mapStateToProps)(Profile);
