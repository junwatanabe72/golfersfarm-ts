interface userObjectType {
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
  show: boolean;
  clubs: number[];
  [key: string]: any;
}

type PartialUserObjectType = Partial<userObjectType>;
type userThumbNailTypes = PartialUserObjectType[];

type signupUserType = Pick<userObjectType, 'name' | 'password' | 'email'>;
type loginUserType = Pick<userObjectType, 'password' | 'email'>;
interface clubListType {
  id: number;
  userId: number;
  clubId: number;
  createdAt: string;
  updatedAt: string;
}
type clubListsType = clubListType[];
