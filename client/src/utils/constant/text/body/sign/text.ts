import * as yup from 'yup';

// signup
//text,value
const SignUpCheck = '利用規約とプライバシーポリシーを御覧ください。';
const SignUpLoginUser = 'アカウントをお持ちの方はこちら';
const SignUpTitle = 'SIGN UP';
export const SignUpText = {
  SignUpCheck,
  SignUpLoginUser,
  SignUpTitle,
};
export const signUpFormDatas = {
  initialValuesData: {
    email: '',
    name: '',
    password: '',
    confirmedPassword: '',
  },
  placeHolder: {
    email: 'メールアドレス',
    name: 'ユーザ名',
    password: '英数字８字以上のパスワード',
    confirmedPassword: '確認用パスワード',
  },
};

export interface signUpInitialValuesDataType {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
}

export const signUpValidation = () =>
  yup.object().shape({
    email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
    name: yup.string().required('必須項目です'),
    password: yup
      .string()
      .required('必須項目です')
      .min(8, '8字以上にしてください。')
      .max(30, '30字以下にしてください。'),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], '入力したパスワードではありません。'),
  });

export const signUpValidationType = yup.object({
  email: yup.string().defined().email(),
  name: yup.string().defined(),
  password: yup.string().defined().min(8).max(30),
  confirmedPassword: yup.string().oneOf([yup.ref('password'), undefined]),
});

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
//

// login
const LoginTitle = 'LOGIN';
const LoginNoUser = 'アカウントをお持ちでない方はこちら';
export const LoginText = {
  LoginNoUser,
  LoginTitle,
};

export const formDatas = {
  initialValuesData: {
    email: '',
    password: '',
  },
  placeHolder: {
    email: 'メールアドレス',
    password: '英数字８字以上のパスワード',
  },
};
export interface loginInitialValuesDataType {
  email: string;
  password: string;
}

export const validation = () =>
  yup.object().shape({
    email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
    password: yup
      .string()
      .required('必須項目です')
      .min(8, '8字以上にしてください。')
      .max(30, '30字以下にしてください。'),
  });

export const loginValidationType = yup.object({
  email: yup.string().defined().email(),
  password: yup.string().defined().min(8).max(30),
});

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
export type initialValuesDataType = loginInitialValuesDataType | signUpFormDatasType;
export type ValidationType =
  | yup.InferType<typeof loginValidationType>
  | yup.InferType<typeof signUpValidationType>;
export interface formDataTypes {
  formDatas: loginFormDatasType | signUpFormDatasType;
}
//

// logout
const LogoutMessage = 'ログアウトしました';
const LogoutLoginUser = 'ログインはこちら';
export const LogoutText = {
  LogoutMessage,
  LogoutLoginUser,
};
//
