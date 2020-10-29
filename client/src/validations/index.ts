import * as yup from 'yup';

export const emailValidation = (message = 'メールアドレスの形式で入力してください') =>
  yup.string().email(message).required('必須項目です');

export const nameValidation = (message = '必須項目です') =>
  yup.string().required(message).max(15, '15字以下にしてください。');

export const urlValidation = (message = '必須項目です') => yup.string().required(message);

export const passwordValidation = (message = '必須項目です', minCount = 8, maxCount = 30) =>
  yup
    .string()
    .required(message)
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,30}$/,
      '半角英小文字、大文字、数値を１種類以上使用して、8文字以上30文字以下で入力してください。'
    );

export const confirmedPasswordValidation = (message = '入力したパスワードではありません。') =>
  yup.string().oneOf([yup.ref('password'), undefined], message);
