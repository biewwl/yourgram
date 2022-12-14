import { getUser } from "./fakeUsers";

const fakePosts = [
  {
    user: "mrcat",
    subtitle: "Who wants to meow on that roof?",
    thumbnail: "https://wallpaperaccess.com/full/1076309.jpg",
    postDate: "28 minutes hours ago",
    views: "80K views",
    id: 1, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "polemicat",
    subtitle:
      "Does your human think he owns you? 5 steps to avoid this behavior!",
    thumbnail:
      "https://thumbs.dreamstime.com/b/banner-para-web-thai-creme-point-cat-branco-com-nariz-vermelho-e-cauda-em-fundo-199837542.jpg",
    postDate: "5 hours ago",
    views: "1M views",
    id: 1, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "realblack",
    subtitle: "New pic Profile!",
    thumbnail:
      "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltb5565ff0cc8601e9/624f596266aa7f1348924533/blackcat_Lifeonwhite_Alamy_Stock_Photo.jpeg?quality=80&format=jpg&width=690",
    postDate: "5 hours ago",
    views: "1M views",
    id: 1, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "realblack",
    subtitle: "soon",
    thumbnail:
      "https://i.pinimg.com/564x/91/7a/8a/917a8ac6845d04bc25c32e3ba8610142.jpg",
    postDate: "3 hours ago",
    views: "2.1M views",
    id: 2, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "astravlog",
    subtitle: "Like an egyptian goddess πΈπ»πͺπ¬",
    thumbnail:
      "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
    postDate: "10 hours ago",
    views: "1.4M views",
    id: 1, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "astravlog",
    subtitle: "To the horizon",
    thumbnail:
      "https://www.thesprucepets.com/thmb/CfPJm47CnlJ8YFFlG8G2jg-jPF8=/2799x1866/filters:fill(auto,1)/guide-to-cat-eyes-552114-hero-75d820458de24543a35543a584b9eec6.jpg",
    postDate: "2 days ago",
    views: "7M views",
    id: 2, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "astravlog",
    subtitle: "lol",
    thumbnail:
      "https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat.jpg?width=1040",
    postDate: "2 days ago",
    views: "2M views",
    id: 3, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "lolcat",
    subtitle: "say: meow",
    thumbnail:
      "https://i.pinimg.com/originals/98/fc/88/98fc8863c7e68df57cd7ad7442f0ec18.jpg",
    postDate: "2 days ago",
    views: "1.2M views",
    id: 1, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "lolcat",
    subtitle: "travelling",
    thumbnail:
      "https://classic.exame.com/wp-content/uploads/2021/03/capa-nyan-cat.jpg?quality=70&strip=info&w=1024",
    postDate: "5 days ago",
    views: "3.2M views",
    id: 2, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "gabriel",
    subtitle: "Hello World",
    thumbnail: "https://i.ibb.co/72g3g9c/oie-QRUr-Oxvnl-Gu-O.jpg",
    postDate: "1 days ago",
    views: "3M views",
    id: 1, // When using API it refers to the post's Primary Key in the database
  },
  {
    user: "gabriel",
    subtitle: "UH OH!",
    thumbnail:
      "https://i.ibb.co/XDDgVkc/Captura-de-tela-de-2022-10-05-23-25-44.png",
    postDate: "1 days ago",
    views: "8M views",
    id: 2, // When using API it refers to the post's Primary Key in the database
  },
];

const fakePostsFullData = fakePosts.map((post) => {
  const { subtitle, thumbnail, postDate, views, id, user } = post;
  return {
    ...getUser(user),
    subtitle,
    thumbnail,
    postDate,
    views,
    id,
  };
});

export const getPost = (owner, id) =>
fakePostsFullData.find((post) => owner === post.nick && post.id === id);

export default fakePostsFullData;
