import { getUser } from "./fakeUsers";

const fakeTrending = {
  ...getUser('polemicat'),
  verified: getUser('polemicat').verified,
  capture: 'Does your human think he owns you? 5 steps to avoid this behavior!',
  thumbnail: 'https://thumbs.dreamstime.com/b/banner-para-web-thai-creme-point-cat-branco-com-nariz-vermelho-e-cauda-em-fundo-199837542.jpg',
  postDate: '5 hours ago',
  views: '1.2M views'
};

export default fakeTrending;
