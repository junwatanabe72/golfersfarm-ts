import { clubType, club, maker, shaft } from './text/body/user/value';

export interface userObjectType {
  id: number;
  name: string;
  profileImage: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  sex: string;
  residence: string;
  birthPlace: string;
  school: string;
  job: string;
  hobby: string;
  bestScore: string;
  averageDistance: string;
  homeCource: string;
  email: string;
  password: string;
  clubImage: string;
  [key: string]: any;
}

export type userThumbNailTypes = userObjectType[];
export type PartialUserObjectType = Partial<userObjectType>;

export interface clubObjectType {
  id: number;
  name: string;
  shaftId: number;
  userId: number;
  makerId: number;
  typeId: number;
  [key: string]: string | number;
}
export type clubTableTypes = clubObjectType[];
export type PartialClubObjectType = Partial<clubObjectType>;
export type PartialClubTableTypes = Partial<clubTableTypes>;

export interface resultObjectType {
  year: string;
  com: string;
  rank: string;
  [key: string]: string;
}
export type PartialResultObjectType = Partial<resultObjectType>;
export type resultTableTypes = resultObjectType[];
export type PartialResultTableTypes = Partial<resultTableTypes>;

export interface TableDataTypes {
  datas: clubTableTypes | userObjectType | resultTableTypes;
}

export type TypeData = typeof clubType;
export type TypesData = TypeData[];

export type ShaftData = typeof shaft;
export type ShaftsData = ShaftData[];

export type MakerData = typeof maker;
export type MakersData = MakerData[];
