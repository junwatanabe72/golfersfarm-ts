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
  school: '学習院大学',
  hobby: 'プログラミング',
  averageDistance: '250',
  bestScore: '69',
  homeCource: '姉ヶ崎CC',
  email: 'Email',
  password: 'Password',
  job: 'free',
  clubImage: ImageURL,
};
export const profileTableItems = {
  averageDistance: '平均飛距離',
  bestScore: 'ベストスコア',
  homeCource: 'ホームコース',
};

export const profileTableSubItems = {
  sex: '性別',
  residence: '現住所',
  birthPlace: '出生地',
  job: '職業',
  school: '出身校',
  hobby: '趣味',
};
export const profileTableKeys = ['ベストスコア', '平均飛距離', 'ホームコース'];
export const profileSubTableKeys = ['性別', '現住所', '出生地', '職業', '出身校', '趣味'];

export const resultTableItems = {
  year: '年',
  competition: '競技',
  rank: '順位',
};

export const gearTableKeys = ['種類', '名前', 'メーカー', 'シャフト', '硬さ'];
export const gearTableItems = {
  type: '種類',
  name: '名前',
  maker: 'メーカー',
  shaft: 'シャフト',
  flex: '硬さ',
};

export const users = [
  initialUser,
  { ...initialUser, id: 2 },
  { ...initialUser, id: 3 },
  { ...initialUser, id: 4 },
  { ...initialUser, id: 5 },
];

export const club = {
  id: 1,
  name: 'FT-TOUR',
  shaftId: 1,
  userId: 1,
  makerId: 1,
  typeId: 1,
};

export const allClubs = [
  club,
  { ...club, id: 2, name: 'V-steel', typeId: 2 },
  { ...club, id: 3, name: 'V-steel', typeId: 3 },
  { ...club, id: 4, name: 'I-Brade', typeId: 4 },
  { ...club, id: 5, name: 'E-ZONE', typeId: 5 },
  { ...club, id: 6, name: 'E-ZONE', typeId: 6 },
  { ...club, id: 7, userId: 2 },
  { ...club, id: 8 },
];

export const clubType = {
  id: 1,
  type: '1WOOD',
};
export const allTypes = [
  clubType,
  { ...clubType, id: 2, type: '3WOOD' },
  { ...clubType, id: 3, type: '5WOOD' },
  { ...clubType, id: 4, type: 'IRON(3~P)' },
  { ...clubType, id: 5, type: 'AW' },
  { ...clubType, id: 6, type: 'SW' },
];

export type TableData = typeof profileTableItems | typeof profileTableSubItems;
export type GearData = typeof club[];
export type GData = typeof club;
export const shaft = {
  id: 1,
  name: 'TOUR-AD PT-7',
  flex: 's',
  manufacturer: 'GRAPHITE DESIGN',
};
export const shafts = [
  shaft,
  { ...shaft, id: 2, name: 'TOUR-AD DI-7' },
  { ...shaft, id: 3, type: 'TOUR-AD DJ-7' },
  { ...shaft, id: 4, type: 'TOUR-AD MD-7' },
  { ...shaft, id: 5, type: 'TOUR-AD GT-7' },
  { ...shaft, id: 6, type: 'TOUR-AD BB-7' },
];

export const maker = {
  id: 1,
  name: 'MIZUNO',
};

export const makers = [
  maker,
  { ...maker, id: 2, name: 'Titleist' },
  { ...maker, id: 3, type: 'HONMMA' },
  { ...maker, id: 4, type: 'TOURSTAGE' },
  { ...maker, id: 5, type: 'SRIXON' },
  { ...maker, id: 6, type: 'PING' },
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
