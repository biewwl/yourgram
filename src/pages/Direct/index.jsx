import "./styles/Direct.css";
import Header from "../../components/Header";
import { Icon } from "@iconify/react";

function Direct() {
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
            <div className="list">
              <div className="person-message">
                <div className="all">
                  <img
                    className="photo-chat"
                    src="https://aliancatraducoes.com/wp-content/uploads/2019/10/o-que-sao-cat-tools.jpg"
                    alt=""
                  />
                  <div className="cat-message">
                    <p className="name-chat">Sleep Cat</p>
                    <p className="message">Come on!! I want to sleeeep</p>
                  </div>
                </div>
                <div className="count-message">5</div>
              </div>
              <div className="person-message">
                <div className="all">
                  <img
                    className="photo-chat"
                    src="https://stickerly.pstatic.net/sticker_pack/HOztWLErY069XuMiaH30vA/K0Q2VH/31/7b61297b-f4c9-453c-a219-d5f2cb529387.png"
                    alt=""
                  />
                  <div className="cat-message">
                    <p className="name-chat">PickCat</p>
                    <p className="message">YooooooWW</p>
                  </div>
                </div>
                <div className="count-message">5</div>
              </div>
              <div className="person-message">
                <div className="all">
                  <img
                    className="photo-chat"
                    src="https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg"
                    alt=""
                  />
                  <div className="cat-message">
                    <p className="name-chat">Cat Cute</p>
                    <p className="message">Ohh, mee too!!</p>
                  </div>
                </div>
                <div className="count-message">5</div>
              </div>
              <div className="person-message selected">
                <div className="all">
                  <img
                    className="photo-chat"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm4GMt4U5hGOWFSuKHpfcyckBEZumF3LH0Q&usqp=CAU"
                    alt=""
                  />
                  <div className="cat-message">
                    <div className="special-name">
                      <p className="name-chat">The Jeans</p>
                      <Icon
                        className="verified"
                        icon="codicon:verified-filled"
                      />
                    </div>
                    <p className="message">This is 4 U</p>
                  </div>
                </div>
                <div className="count-message">5</div>
              </div>
              <div className="person-message">
                <div className="all">
                  <img
                    className="photo-chat"
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F10%2F07%2Fcat-in-pirate-costume-380541532-2000.jpg&q=60"
                    alt=""
                  />
                  <div className="cat-message">
                    <p className="name-chat">HowHow</p>
                    <p className="message">
                      Yess, i'm
                      sureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    </p>
                  </div>
                </div>
                <div className="count-message">5</div>
              </div>
            </div>
          </div>
          <div className="chat"></div>
        </div>
      </div>
    </div>
  );
}

export default Direct;
