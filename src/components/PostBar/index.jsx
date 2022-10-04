import { Icon } from "@iconify/react";
import "./styles/PostBar.css";

export default function PostBar() {
  return (
    <section className="_post_bar">
      <div>
        <Icon icon="mdi:cards-heart-outline" />
        <Icon icon="mdi:comment-outline" />
        <Icon icon="eva:paper-plane-fill" />
      </div>
      <Icon icon="mdi:bookmark-outline" />
    </section>
  );
}
