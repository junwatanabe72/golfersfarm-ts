import { client } from '../../utils/axiosConf';

//signup
export async function createUserAxios(data: SignupUserType) {
  const queries = { user: { ...data } };
  try {
    const data = await client.post('/auth/signup', queries);
    return data;
  } catch (e) {
    return { e };
  }
}

//login
export async function loginUserAxios(data: LoginUserType) {
  const queries = { ...data };
  try {
    const { data } = await client.post('/auth/login', queries);
    return data;
  } catch (e) {
    return { e };
  }
}

export async function checkLoginUserAxios() {
  const jwt = localStorage.getItem('jwt');
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  try {
    const { data } = await client.get('/auth/login', config);
    return data;
  } catch (e) {
    return { e };
  }
}
