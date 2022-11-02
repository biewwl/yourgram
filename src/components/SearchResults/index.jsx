import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./styles/SearchResults.css";
import "./styles/SearchResults-mobile.css";

function SearchResults({ results, setQuerySearch }) {
  const onSearch = () => {
    setQuerySearch("");
  };

  return (
    <aside className="_search_results">
      {results.map((result, i) => (
        <Link
          to={`/${result.nick}`}
          className="_search_result"
          key={i}
          onClick={onSearch}
        >
          <img src={result.avatar} alt={result.nick} />
          <div className="_search_nick_verified">
            <span className="_search_verified">
              {result.nick}
              {result.verified && (
                <Icon
                  icon="codicon:verified-filled"
                  className="_verified_user_notify"
                />
              )}
            </span>
            <span className="_search_name">{result.user}</span>
          </div>
        </Link>
      ))}
    </aside>
  );
}

export default SearchResults;
