import { Icon } from "@iconify/react";
import { useState } from "react";
import fakeStories from "../../mocks/fakeStories";
import { Link } from "react-router-dom";
import "./styles/Stories.css";
import "./styles/Stories-mobile.css";

export default function Stories() {

  const [scroll, setScroll] = useState(0);
  const [scrollConfig, setScrollConfig] = useState(0);

  const handleClick = (direction) => {
    const stories = document.querySelector('._stories');
    let scrollValue = direction === 'prev' ? (scroll - 150) : (scroll + 150);
    const width = fakeStories.length - (Math.round(stories.offsetWidth / 150));
    if (direction === 'prev') {
      if (scroll === 0) {
        scrollValue = 0;
      } else {
        setScrollConfig(scrollConfig - 1);
      }
    }
    if (direction === 'next') {
      if ((scrollConfig) === width) {
        scrollValue = scroll;
      } else {
        setScrollConfig(scrollConfig + 1);
      }
    }
    stories.scroll(scrollValue, 0);
    setScroll(scrollValue);
  }

  return (
    <section className="_stories_section">
      <div className="_stories_title">
        <Icon icon="gg:stories" />
        <h2>Stories</h2>
      </div>
      <section className="_stories">
        <section className="_prev_story" onClick={() => handleClick('prev')}>
          <Icon icon="carbon:previous-filled" />
        </section>
        {fakeStories.map((story, i) => {
          const { thumbnail, user, verified, mode, nick } = story;
          return (
            <section className="_story" key={i}>
              <img
                src={thumbnail}
                alt={`story_by_${user}`}
                className="_story_thumbnail"
              />
              {mode && <span className="_story_live_tag">{mode}</span>}
              <Link to={`/${nick}`} className="_story_user">
                <span>{user}</span>
                {verified && (
                  <Icon
                    icon="codicon:verified-filled"
                    className="_verified_user_story"
                  />
                )}
              </Link>
            </section>
          );
        })}
        <section className="_next_story" onClick={() => handleClick('next')} >
          <Icon icon="carbon:next-filled" />
        </section>
      </section>
    </section>
  );
}
