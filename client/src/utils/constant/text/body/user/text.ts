const facebook = 'https://www.facebook.com/junwatanabe72';
const twitter = 'https://twitter.com/junwata72';
const instagram = 'https://www.instagram.com/ruby.on/';
const youtube = 'https://www.youtube.com/channel/UC-hTmh_CtqIUphbwd8Eu6EQ';
const ImageURL =
  'https://res.cloudinary.com/hqejvhqad/image/upload/v1566349931/edh9uyqxlz8xx6zyz60z.jpg';

const urls = {
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
};

const userName = 'JUNWATANABE72';
const URL =
  'https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4';

export const initialUser = {
  id: 1,
  name: userName,
  profileImage: URL,
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
  sex: '男性',
  residence: '兵庫県',
  birthPlace: '栃木県',
  averageDistance: '250',
  bestScore: 69,
  email: 'Email',
  password: 'Password',
  job: 'free',
  clubImage: ImageURL,
};

export const chars = [initialUser, initialUser, initialUser, initialUser];

export const sampleUserMainDatas = [
  {
    arg: 'ベストスコア',
    value: '69',
  },
  {
    arg: '飛距離',
    value: '250',
  },
  {
    arg: '所属コース',
    value: '姉ヶ崎CC',
  },
];

export const sampleProfileDatas = [
  {
    arg: '性別',
    value: '男性',
  },
  {
    arg: '出生地',
    value: '栃木県',
  },
  {
    arg: '現住所',
    value: '神戸市',
  },
  {
    arg: '職業',
    value: '不動産',
  },
  {
    arg: '出身校',
    value: '学習院大学',
  },
  {
    arg: '趣味',
    value: 'プログラミング',
  },
];

export const sampleResultDatas = [
  {
    year: '年',
    com: '競技',
    rank: '順位',
  },
  {
    year: '2013年11月',
    com: 'ゴルフネットワーク選手権RomaroCUP',
    rank: '21位',
  },
  {
    year: '2007年4月',
    com: '関東大学春季Dブロック対抗戦',
    rank: '団体４位',
  },
  {
    year: '2007年８月',
    com: '関東大学春季Dブロック対抗戦',
    rank: '団体1位',
  },
  {
    year: '2006年8月',
    com: '関東大学春季Cブロック対抗戦',
    rank: '団体8位',
  },
];

export const sampleGearDatas = [
  {
    name: 'name',
    type: 'type',
    shaft: 'shaft',
    flex: 'flex',
    maker: 'maker',
  },
  {
    name: 'JBEAM',
    type: '1W',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: '3W',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: '5W',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: `3~P IRON`,
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'AW',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'SW',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'Putter',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'ball',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'ball',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'ball',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
  {
    name: 'JBEAM',
    type: 'ball',
    shaft: 'Tour-AD DI7',
    flex: 'S',
    maker: 'MIZUNO',
  },
];
