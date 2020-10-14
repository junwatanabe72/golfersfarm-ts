const facebook = 'junwatanabe72';
const twitter = 'junwata72';
const instagram = 'ruby.on';
const youtube = 'UC-hTmh_CtqIUphbwd8Eu6EQ';

export const sexValues = Object.freeze({
  male: 1,
  female: 100,
});

export const sexLabels = {
  male: '男性',
  female: '女性',
};

export const showValues = Object.freeze({
  open: 1,
  close: 100,
});

export const showLabels = {
  open: '公開',
  close: '非公開',
};

const ImageURL =
  'https://res.cloudinary.com/hqejvhqad/image/upload/v1566349931/edh9uyqxlz8xx6zyz60z.jpg';

const URL =
  'https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4';

const userName = 'JUNWATANABE72';

export const clubOrder = [
  '1WOOD',
  '3WOOD',
  '4WOOD',
  '5WOOD',
  '7WOOD',
  '9WOOD',
  '11WOOD',
  '13WOOD',
  '3UT',
  '4UT',
  '5UT',
  '6UT',
  '2IRON',
  '3IRON',
  '4IRON',
  'IRON(2~9)',
  'IRON(2~P)',
  'IRON(3~P)',
  'IRON(4~P)',
  'IRON(5~P)',
  'IRON(6~P)',
  'IRON(3~9)',
  'IRON(4~9)',
  'IRON(5~9)',
  'PW',
  'AW(50 Degree)',
  'AW(52 Degree)',
  'SW(54 Degree)',
  'SW(56 Degree)',
  'SW(58 Degree)',
  'LW(60 Degree)',
  'PUTTER',
];
export const initialUser = {
  id: 1,
  name: userName,
  profileImage: URL,
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
  sex: 1,
  residence: '兵庫県',
  birthPlace: '栃木県',
  school: '学習院大学',
  hobby: 'プログラミング',
  bestScore: 69,
  averageDistance: 250,
  homeCourse: '姉ヶ崎CC',
  email: 'junwatanabe72@gmail.com',
  password: 'Password',
  job: 'free',
  clubImage: ImageURL,
  show: 100,
};
export const prefacture = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
];
export const baseUser = {
  id: '',
  name: '',
  profileImage: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  sex: '',
  residence: '',
  birthPlace: '',
  school: '',
  hobby: '',
  bestScore: '',
  averageDistance: '',
  homeCourse: '',
  email: '',
  password: '',
  job: '',
  clubImage: '',
  show: '',
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
  flex: 'R',
};

export const baseClub = {
  id: '',
  name: '',
  userId: '',
  maker: '',
  type: '',
  flex: '',
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
  { ...clubType, id: 5, type: 'AW(52 Degree)' },
  { ...clubType, id: 6, type: 'SW(58 Degree)' },
];

export const shaft = {
  id: 1,
  name: 'TOUR AD DI-7',
};
export const shafts = [
  shaft,
  { ...shaft, id: 2, name: 'TOUR-AD DI-7' },
  { ...shaft, id: 3, name: 'TOUR-AD DJ-7' },
  { ...shaft, id: 4, name: 'TOUR-AD MD-7' },
  { ...shaft, id: 5, name: 'TOUR-AD GT-7' },
  { ...shaft, id: 6, name: 'TOUR-AD BB-7' },
];

export const maker = {
  id: 1,
  name: 'Mizuno',
};

export const makers = [
  maker,
  { ...maker, id: 2, name: 'Titleist' },
  { ...maker, id: 3, name: 'HONMMA' },
  { ...maker, id: 4, name: 'TOURSTAGE' },
  { ...maker, id: 5, name: 'SRIXON' },
  { ...maker, id: 6, name: 'PING' },
  { ...maker, id: 7, name: 'original' },
];

export const allResults = [
  {
    id: 1,
    year: '2013年11月',
    com: 'ゴルフネットワーク選手権RomaroCUP',
    rank: '21位',
  },
  {
    id: 2,
    year: '2007年4月',
    com: '関東大学春季Dブロック対抗戦',
    rank: '団体４位',
  },
  {
    id: 3,
    year: '2007年８月',
    com: '関東大学春季Dブロック対抗戦',
    rank: '団体1位',
  },
  {
    id: 4,
    year: '2006年8月',
    com: '関東大学春季Cブロック対抗戦',
    rank: '団体8位',
  },
];
