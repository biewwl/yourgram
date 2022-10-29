import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProfileBar from "../../components/ProfileBar";
import fakeUsers from "../../mocks/fakeUsers";
import fakePosts from "../../mocks/fakePosts";
import { useState } from "react";
import { connect } from "react-redux";
import { changeImages } from "../../redux/actions/userAction";
import EditUserInfos from "../../components/EditUserInfos";
import "./styles/EditProfile.css";
import "./styles/EditProfile-mobile.css";

function EditProfile({
  nick,
  headerImage,
  avatarImage,
  name,
  email,
  password,
  dispatch,
}) {
  const nav = useNavigate();

  const { user, verified } = fakeUsers.find((u) => u.nick === nick);

  const posts = fakePosts.filter((p) => p.nick === nick);

  const [headerSrc, setHeaderSrc] = useState(headerImage);
  const [avatarSrc, setAvatarSrc] = useState(avatarImage);
  const [userInfos, setUserInfos] = useState({
    nick,
    user: name,
    email,
    password,
  });

  const setHeader = ({ target }) => {
    const image = URL.createObjectURL(target.files[0]);
    setHeaderSrc(image);
  };

  const setAvatar = ({ target }) => {
    const image = URL.createObjectURL(target.files[0]);
    setAvatarSrc(image);
  };

  const save = () => {
    dispatch(
      changeImages({
        avatar: avatarSrc,
        header: headerSrc,
        ...userInfos,
      })
    );
    const user = fakeUsers.find((u) => u.nick === nick);
    user.header = headerSrc;
    user.avatar = avatarSrc;
    user.email = userInfos.email;
    user.nick = userInfos.nick;
    user.password = userInfos.password;
    user.user = userInfos.user;
    nav(`/${nick}`);
  };

  return (
    <div className="_edit_profile_page">
      <Header />
      <main className="_edit_profile_content">
        <div className="_thumbnail_header_edit_profile">
          <img src={headerSrc} alt={user} className="_header_edit_profile" />
          <label className="_edit_profile_header_button_edit" htmlFor="header">
            <Icon icon="fluent:camera-edit-20-filled" />
            <input
              type="file"
              name="header"
              id="header"
              onChange={setHeader}
              accept="image/*"
            />
          </label>
        </div>
        <section className="_edit_profile_presentation">
          <section className="_edit_profile_user_avatar">
            <img src={avatarSrc} alt={user} className="_avatar_edit_profile" />
            <label
              className="_edit_profile_avatar_button_edit"
              htmlFor="avatar"
            >
              <Icon icon="fluent:camera-edit-20-filled" />
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={setAvatar}
                accept="image/*"
              />
            </label>
            <div className="_edit_profile_user">
              <h1>{user}</h1>
              {verified && (
                <Icon
                  icon="codicon:verified-filled"
                  className="_verified_user_edit_profile"
                />
              )}
            </div>
            <span>@{nick}</span>
          </section>
          <section className="_edit_profile_user_data">
            <ProfileBar
              posts={posts.length}
              nick={nick}
              nickLogged={nick}
              edit={true}
            />
            <EditUserInfos userInfos={userInfos} setUserInfos={setUserInfos} />
            <button onClick={save} className="_edit_profile_save">
              <Icon icon="el:ok" />
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  nick: state.user.nick,
  headerImage: state.user.header,
  avatarImage: state.user.avatar,
  name: state.user.user,
  email: state.user.email,
  password: state.user.password,
});

export default connect(mapStateToProps)(EditProfile);
