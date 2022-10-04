import { Icon } from "@iconify/react";
import fakeTrending from "../../mocks/fakeTrending";
import "./styles/Trending.css";
import "./styles/Trending-mobile.css";

export default function Trending() {
  const { thumbnail, user, capture, postDate, verified, views } = fakeTrending;

  return (
    <article className="_trending_content">
      <div className="_trending_title">
        <Icon icon="el:fire" />
        <h2>Trending</h2>
      </div>
      <section className="_trending_post">
        <img
          src={thumbnail}
          alt="trending_post"
          className="_trending_thumbnail"
        />
        <section className="_trending_post_data">
          <h3 className="_trending_post_capture">{capture}</h3>
          <span className="_trending_post_user">
            <span>{user}</span>
            {verified && (
              <Icon
                icon="codicon:verified-filled"
                className="_verified_user_trending_post"
              />
            )}
          </span>
          <span className="_trending_post_date">{postDate}</span>
          <span className="_trending_post_views">
            <Icon icon="carbon:view" />
            <span>{views}</span>
          </span>
        </section>
      </section>
    </article>
  );
}
