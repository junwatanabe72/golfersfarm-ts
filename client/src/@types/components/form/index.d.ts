interface SignUpInitialValuesDataType {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
}

interface LoginInitialValuesDataType {
  email: string;
  password: string;
}
interface LoginSignUpValuesDataType {
  onSubmit: (values: LoginInitialValuesDataType | SignUpInitialValuesDataType) => void;
}

interface SignUpFormDatasType {
  initialValuesData: {
    email: string;
    name: string;
    password: string;
    confirmedPassword: string;
    [key: string]: string;
  };
  placeHolder: {
    email: string;
    name: string;
    password: string;
    confirmedPassword: string;
    [key: string]: string;
  };
}

interface LoginFormDatasType {
  initialValuesData: {
    email: string;
    password: string;
    [key: string]: string;
  };
  placeHolder: {
    email: string;
    password: string;
    [key: string]: string;
  };
}

interface LoginSignUpFormDataTypes {
  formDatas: LoginFormDatasType | SignUpFormDatasType;
}

interface ProfileEditInitialValuesDataType {
  email: string;
  name: string;
  password: string;
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
  clubImage: string;
  show: string;
  confirmedPassword: string;
}
type PartialProfileEditInitialValuesDataType = Partial<ProfileEditInitialValuesDataType>;
