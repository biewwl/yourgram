import { Icon } from "@iconify/react";
import "./styles/EditUserInfos.css";
// import "./styles/EditProfile-mobile.css";

function EditUserInfos({ userInfos, setUserInfos, setErrorData }) {
  const { nick, user, email, password } = userInfos;

  const handleChange = ({ target }) => {
    setErrorData("");
    setUserInfos({
      ...userInfos,
      [target.name]: target.value,
    });
  };

  const clearField = (name) => {
    setUserInfos({
      ...userInfos,
      [name]: "",
    });
  };

  return (
    <section className="_edit_profile_user_infos">
      <label htmlFor="nick">
        <span>
          <Icon icon="material-symbols:alternate-email" />
        </span>
        <input
          type="text"
          name="nick"
          id="nick"
          onChange={handleChange}
          value={nick}
          className="_edit_profile_nick"
          placeholder="@yournick"
          spellCheck={false}
        />
        <button onClick={() => clearField("nick")}>
          <Icon icon="bi:x" />
        </button>
      </label>
      <label htmlFor="user">
        <span>
          <Icon icon="carbon:user-profile" />
        </span>
        <input
          type="text"
          name="user"
          id="user"
          onChange={handleChange}
          value={user}
          placeholder="Your Name"
          spellCheck={false}
        />
        <button onClick={() => clearField("user")}>
          <Icon icon="bi:x" />
        </button>
      </label>
      <label htmlFor="email">
        <span>
          <Icon icon="ic:outline-email" />
        </span>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
          placeholder="youremail@email.com"
          spellCheck={false}
        />
        <button onClick={() => clearField("email")}>
          <Icon icon="bi:x" />
        </button>
      </label>
      <label htmlFor="password">
        <span>
          <Icon icon="ic:baseline-password" />
        </span>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
          placeholder="********"
          spellCheck={false}
        />
        <button onClick={() => clearField("password")}>
          <Icon icon="bi:x" />
        </button>
      </label>
    </section>
  );
}

export default EditUserInfos;
