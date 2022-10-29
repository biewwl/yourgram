// import "./styles/EditProfile.css";
// import "./styles/EditProfile-mobile.css";

function EditProfile({ userInfos, setUserInfos }) {
  const { nick, user, email, password } = userInfos;

  const handleChange = ({ target }) => {
    setUserInfos({
      ...userInfos,
      [target.name]: target.value,
    });
  };

  return (
    <section className="_edit_profile_user_infos">
      <label htmlFor="nick">
        nick
        <input
          type="text"
          name="nick"
          id="nick"
          onChange={handleChange}
          value={nick}
        />
      </label>
      <label htmlFor="user">
        user
        <input
          type="text"
          name="user"
          id="user"
          onChange={handleChange}
          value={user}
        />
      </label>
      <label htmlFor="email">
        email
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label htmlFor="password">
        password
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
        />
      </label>
    </section>
  );
}

export default EditProfile;
