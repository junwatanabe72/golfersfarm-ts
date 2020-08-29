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
  [key: string]: any;
}

type PartialUserObjectType = Partial<userObjectType>;
type userThumbNailTypes = PartialUserObjectType[];
