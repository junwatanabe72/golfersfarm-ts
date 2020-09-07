interface UserObjectType {
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
  bestScore: number;
  averageDistance: number;
  homeCource: string;
  email: string;
  password: string;
  clubImage: string;
  show: boolean;
}

type PartialUserObjectType = Partial<UserObjectType>;
type UserThumbNailTypes = PartialUserObjectType[];

type SignupUserType = Pick<UerObjectType, 'name' | 'password' | 'email'>;
type LoginUserType = Pick<UserObjectType, 'password' | 'email'>;
type ImageUserType = Pick<UserObjectType, 'profileImage' | 'clubImage'>;
