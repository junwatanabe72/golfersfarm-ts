import { client } from '../../utils/axiosConf';

//userAPI
//signup
export async function createUserAxios(data: SignupUserType) {
  const queries = { user: { name: data.name, email: data.email, password: data.password } };
  try {
    const data = await client.post('/', queries);
    return data;
  } catch (e) {
    return { e };
  }
}

export async function updateUserAxios(data: PartialUserObjectType) {
  const { id } = data;
  const queries = { user: { ...data } };
  try {
    const { data } = await client.patch(`/${id}`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}
export async function postImageUserAxios(data: any) {
  const { id } = data;
  // const queries = { user: { ...data } };
  const queries = data;
  try {
    const { data } = await client.post(`/${id}/image`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}
//login
export async function loginUserAxios(data: LoginUserType) {
  const queries = { user: { email: data.email, password: data.password } };
  try {
    const { data } = await client.post('/login', queries);
    return data;
  } catch (e) {
    return { e };
  }
}
//users
export async function getUsersAxios() {
  try {
    const { data } = await client.get('/');
    return data;
  } catch (e) {
    return { e };
  }
}
