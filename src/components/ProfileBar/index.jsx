import { Icon } from "@iconify/react";
import './styles/ProfileBar.css';
import './styles/ProfileBar-mobile.css';

function ProfileBar({ posts }) {
  return (
    <section className="_profile_stats_bar">
      <span className="_profile_stats_bar_icon _followers">
        <div>
          <Icon icon="lucide:users" />
          <span>Followers</span>
        </div>
        27M
      </span>
      <span className="_profile_stats_bar_icon _following">
        <div>
          <Icon icon="mingcute:user-follow-line" />
          <span>Following</span>
        </div>
        99
      </span>
      <span className="_profile_stats_bar_icon _posts">
        <div>
          <Icon icon="gridicons:posts" />
          <span>Posts</span>
        </div>
        {posts}
      </span>
    </section>
  );
}

export default ProfileBar;
