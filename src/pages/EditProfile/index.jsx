import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProfileBar from "../../components/ProfileBar";
import fakePosts from "../../mocks/fakePosts";
import { useState } from "react";
import { connect } from "react-redux";
import { changeInfos, loginUser } from "../../redux/actions/userAction";
import EditUserInfos from "../../components/EditUserInfos";
import validate from "../../helpers/validateDataJOI";
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
  verified
}) {
  const nav = useNavigate();

  const [errorData, setErrorData] = useState([]);

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
      changeInfos({
        avatar: avatarSrc,
        header: headerSrc,
        verified,
        ...userInfos,
      })
    );
    dispatch(loginUser(userInfos.nick));
    nav(`/${userInfos.nick}`);
  };

  const validSave = () => {
    const isValid = validate(userInfos, { nick, email });
    const { error } = isValid;
    if (error) {
      if (!errorData) {
        setErrorData(error);
      }
      return false;
    }
    return true;
  };

  return (
    <div className="_edit_profile_page">
      <Header />
      <main className="_edit_profile_content">
        <div className="_thumbnail_header_edit_profile">
          <img src={headerSrc} alt={name} className="_header_edit_profile" />
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
            <img src={avatarSrc} alt={name} className="_avatar_edit_profile" />
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
              <h1>{name}</h1>
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
            <EditUserInfos
              userInfos={userInfos}
              setUserInfos={setUserInfos}
              setErrorData={setErrorData}
            />
            <button
              onClick={save}
              disabled={!validSave()}
              className="_edit_profile_save"
            >
              <Icon icon="el:ok" />
            </button>
            {errorData &&
              errorData.map((error) => (
                <span className="_error_feedback">{error.error}</span>
              ))}
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
  verified: state.user.verified,
});

export default connect(mapStateToProps)(EditProfile);
