import * as yup from 'yup';
import { FORMTYPES } from '../../../utils/constant/text/form';

const signUpValidationType = yup.object({
  email: yup.string().defined().email(),
  name: yup.string().defined(),
  password: yup.string().defined().min(8).max(30),
  confirmedPassword: yup.string().oneOf([yup.ref('password'), undefined]),
});

const loginValidationType = yup.object({
  email: yup.string().defined().email(),
  password: yup.string().defined().min(8).max(30),
});

import { loginValidationType, signUpValidationType } from '../../../utils/constant/text/body/sign';

interface signUpInitialValuesDataType {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
}

interface signUpFormDatasType {
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

interface loginInitialValuesDataType {
  email: string;
  password: string;
}

interface loginFormDatasType {
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

interface profileEditFormDatasType {
  initialValuesData: {
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
    bestScore: string;
    averageDistance: string;
    homeCource: string;
    clubImage: string;
    show: string;
    confirmedPassword: string;
    [key: string]: string;
  };
  placeHolder: {
    email: string;
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
    clubImage: string;
    show: string;
    password: string;
    confirmedPassword: string;
    [key: string]: string;
  };
}

interface profileEditInitialValuesDataType {
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
  bestScore: string;
  averageDistance: string;
  homeCource: string;
  clubImage: string;
  show: boolean;
  confirmedPassword: string;
}
//common
type initialValuesDataType =
  | loginInitialValuesDataType
  | signUpInitialValuesDataType
  | profileEditInitialValuesDataType;
type ValidationType =
  | yup.InferType<typeof loginValidationType>
  | yup.InferType<typeof signUpValidationType>;
interface formDataTypes {
  formDatas: loginFormDatasType | signUpFormDatasType | profileEditFormDatasType;
}

interface IFORMTYPES {
  type: typeof FORMTYPES.SIGNLOGIN | typeof FORMTYPES.USERPROFILE;
}
