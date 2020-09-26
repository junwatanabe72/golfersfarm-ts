interface UserType {
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
  homeCourse: string;
  email: string;
  password: string;
  clubImage: string;
  show: boolean;
}

type PartialUserType = Partial<UserType>;
type ArrayPartialUserType = PartialUserType[];

type SignupUserType = Pick<UserType, 'name' | 'password' | 'email'>;
type LoginUserType = Pick<UserType, 'password' | 'email'>;
type ImageUserType = Pick<UserType, 'profileImage' | 'clubImage'>;
type PartialImageUserType = Partial<ImageUserType>;
