const fakeUsers = [
  {
    user: "Mr. Cat",
    avatar: "https://wallpaperaccess.com/full/32048.jpg",
    verified: true,
    nick: "mrcat",
    header: 'https://b-static.besthdwallpaper.com/minimalist-landscape-forest-river-wallpaper-1280x768-87865_13.jpg',
  },
  {
    user: "PolemiCat",
    avatar:
      "https://cdn.pixabay.com/photo/2017/08/16/20/16/yellow-cat-2649033_960_720.jpg",
    verified: true,
    nick: "polemicat",
    header: 'https://i.imgur.com/TfKh42o.jpg',
  },
  {
    user: "Real Black",
    avatar:
      "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltb5565ff0cc8601e9/624f596266aa7f1348924533/blackcat_Lifeonwhite_Alamy_Stock_Photo.jpeg?quality=80&format=jpg&width=690",
    verified: true,
    nick: "realblack",
    header: 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/international-black-cat-awareness-month-e1575287719521.jpg',
  },
  {
    user: "Astra Vlog",
    avatar: "https://akhbarelmi.ir/media/covers/175146.jpg",
    verified: true,
    nick: "astravlog",
    header: 'https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_707431309-e1554172878508.jpg',
  },
  {
    user: "Cat Jr.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcES9q6owZT27Grqx-zpCZfHSuJ3VfSEkoA&usqp=CAU",
    verified: false,
    nick: "catjr",
    header: 'https://i.pinimg.com/originals/a7/69/50/a7695060d2e3cc45e18a1849118672e5.jpg',
  },
  {
    user: "Cute Cat",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSY6mGU9NgW6-ZiExdW0RWRDIzImgc0FOfhg&usqp=CAU",
    verified: false,
    nick: "thecute",
    header: 'https://pbs.twimg.com/media/C5Oscg0VYAAWjrX.jpg',
  },
  {
    user: "Studious Cat",
    avatar:
      "https://thumbs.dreamstime.com/b/cute-grey-cat-glasses-wood-background-178508562.jpg",
    verified: true,
    nick: "studious.cat",
    header: 'https://frkr.github.io/jundiai/images/unsplash_brooklyn-bridge_header.jpg',
  },
  {
    user: "John Cat",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQtx_SaztbC9yDSvnfTFV1oQkU5mQyAierA&usqp=CAU",
    verified: false,
    nick: "johnnn",
    header: 'https://1.bp.blogspot.com/-jd_40cyublU/YQih3b2PAdI/AAAAAAABSgA/Pkv_e0D_dSseWirzZBr-OJSGJgrTULuKACLcBGAsYHQ/w0/night-time-minimal-5k-mj-2560x1440.jpg',
  },
  {
    user: "Meow Bella",
    avatar:
      "https://i.pinimg.com/originals/89/e9/99/89e999dd299dd837a4693cd39f6a1cd6.jpg",
    verified: true,
    nick: "lifebella",
    header: 'https://i.pinimg.com/originals/50/c5/1e/50c51e02a205b44c3449fc128400ff20.jpg',
  },
  {
    user: "Tumblr Cat",
    avatar:
      "https://ih1.redbubble.net/image.533614679.7633/raf,750x1000,075,t,FFFFFF:97ab1c12de.u2.jpg",
    verified: true,
    nick: "hicat",
    header: 'https://data.whicdn.com/images/340025811/original.jpg',
  },
  {
    user: "Meowzeiro",
    avatar:
      "https://64.media.tumblr.com/bb228e4edf679f5bc4016b676549497d/tumblr_pfti60LMM11xnen5oo1_r1_1280.png",
    verified: false,
    nick: "meowzeiro",
    header: 'https://i.pinimg.com/originals/64/1e/61/641e6177260fd7d3c3a8a92ffa70dccf.jpg',
  },
  {
    user: "BotâniCat",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwZuJUBh2gRwa9xeAyLc12XYOES8P7j0tQA&usqp=CAU",
    verified: false,
    nick: "cat.life",
    header: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0_DfdzzSwJvUWRo_oPzVCh7aamNF4haUNg&usqp=CAU',
  },
  {
    user: "Meow Music",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyjnxbwRrgexw7p5guoPgSvrnn_9gFWP6GA&usqp=CAU",
    verified: true,
    nick: "mm",
    header: 'https://i.pinimg.com/originals/1c/43/87/1c43876d5d2c4dca9ac36816efb2a781.jpg',
  },
  {
    user: "Bad",
    avatar: "https://images.snapwi.re/0a3d/5bd7aeb3dffb4541b65ad6ae.w800.jpg",
    verified: true,
    nick: "thuglife",
    header: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4l9TdOxiC4foSIPNHcLc6nAQHc9IS1qVvRg&usqp=CAU',
  },
  {
    user: "Cat LoL",
    avatar: "https://assets.papodehomem.com.br/2015/05/30/05/42/43/431/photo.jpg",
    verified: true,
    nick: "lolcat",
    header: 'https://i.pinimg.com/736x/25/02/05/250205aeea9cd5eca6b7ccf7fc704398.jpg',
  },
];

// const generatePrettyArray = () => {
//   const newObject = {};
//   fakeUsers.forEach((u) => {
//     newObject[u.nick] = { ...u };
//   });
//   return newObject;
// };

export const getUser = (nick) => {
  return fakeUsers.find((u) => u.nick === nick);
};

// export const prettyFakeUsers = generatePrettyArray();

export default fakeUsers;
