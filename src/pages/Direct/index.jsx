import "./styles/Direct.css";
import Header from "../../components/Header";
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import chats from "./chats"
import { getUser } from "../../mocks/fakeUsers";
import { useState } from "react";

function Direct() {

  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  }

  const params = useParams();

  const user = params.nick;

  return (
    <div>
      <Header page="direct" />
      <div className="body">
        <div className="page">
          <div className="persons">
            <div className="user">
              <img
                className="user-pic"
                src="https://assets.papodehomem.com.br/2015/05/30/05/42/43/431/photo.jpg"
                alt=""
              />
              <p className="name">Cat LoL</p>
            </div>
            <div className="options">
              <input
                className="input-search" 
                value={search} 
                type="text" 
                onChange={ handleChange }
                name="" 
                placeholder="Search" 
                id="" />
              <Icon className="write" icon="jam:write" />
            </div>
            <div clkLinkassName="list">
              {chats.filter((infos) => infos.user.toLowerCase().includes(search.toLowerCase())).map((infocat) => (
                <Link to={`/direct/${infocat.nick}`} className={`person-message-${infocat.nick === user}`}>
                  <div className="all">
                    <img
                      className="photo-chat"
                      src={infocat.avatar}
                      alt=""
                    />
                    <div className="cat-message">
                      <div className="box-name">
                        <p className="name-chat">{infocat.user}</p>
                        {infocat.verified ? <Icon icon="codicon:verified-filled" className="verified" /> : ''}
                      </div>
                      <p className="message">{infocat.catMessages[infocat.catMessages.length - 1].message}</p>
                    </div>
                  </div>
                  {infocat.catMessages.filter((type) => type.from === 'other').length - infocat.catMessages
                    .indexOf(infocat.catMessages.filter((type) => type.from === 'me')[infocat.catMessages
                      .filter((type) => type.from === 'me').length - 1])
                    > 0 ?
                    <div className="count-message">{infocat.catMessages.length - infocat.catMessages
                      .indexOf(infocat.catMessages.filter((type) => type.from === 'me')[infocat.catMessages
                        .filter((type) => type.from === 'me').length - 1]) - 1}</div> : ''}
                </Link>
              ))}
            </div>
          </div>
          <div className="chat">
            {chats.some((chat) => chat.nick === user) ? [chats.find((chat) => chat.nick === user)].map((infos) => (
              <div className="square-chat">
                <div className="chat-header">
                  <img src={infos.avatar} alt="" />
                  <div className="name-top">
                    <p>{infos.user}</p>
                    {infos.verified ? <Icon icon="codicon:verified-filled" className="verified" /> : ''}
                  </div>
                </div>
                <div className="all-chats">
                  {infos.catMessages.map((messages) => (
                    <div>
                      {messages.from === 'other'
                        ? <div className="other-message">
                          <img className="img-side-other" src={infos.avatar} alt="" />
                          <p className="message-other">{messages.message}</p>
                        </div>
                        : <div className="me-message">
                          <img className="img-side-me" src={getUser('lolcat').avatar} alt="" />
                          <p className="message-me">{messages.message}</p>
                        </div>}
                    </div>
                  ))}
                </div>
                <div className="tools-chat">
                  <Icon className="tools-chat-icon" icon="bi:camera" />
                  <div className="input">
                    <input type="text" placeholder="Write your message" name="" id="" />
                    <Icon className="tools-chat-icon send" icon="fluent:send-28-filled" />
                  </div>
                  <Icon className="tools-chat-icon" icon="heroicons-outline:paper-clip" />
                  <Icon className="tools-chat-icon mic" icon="fluent:mic-16-filled" />
                </div>
              </div>
            )) : <div className="no-one">
              <Icon className="dont-message" icon="emojione-monotone:grinning-cat-face" />
              <p>
                Hey! Choose a chat to start!
              </p>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Direct;