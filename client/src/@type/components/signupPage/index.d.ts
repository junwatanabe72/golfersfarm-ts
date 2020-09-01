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

//common
type initialValuesDataType = loginInitialValuesDataType | signUpInitialValuesDataType;
type ValidationType =
  | yup.InferType<typeof loginValidationType>
  | yup.InferType<typeof signUpValidationType>;
interface formDataTypes {
  formDatas: loginFormDatasType | signUpFormDatasType;
}
