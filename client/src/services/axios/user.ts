import { client } from '../../utils/axiosConf';

//userAPI

export async function updateUserAxios(data: PartialUserType) {
  const jwt = localStorage.getItem('jwt');

  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const { id } = data;
  const queries = { user: { ...data } };
  try {
    const { data } = await client.patch(`/users/${id}`, queries, config);
    return data;
  } catch (e) {
    return { e };
  }
}
export async function updateUserImageAxios(data: FormData) {
  const id = data.get('id');
  const jwt = localStorage.getItem('jwt');
  const queries = data;
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
      'content-type': 'multipart/form-data',
    },
  };
  try {
    const { data } = await client.post(`/users/${id}/images`, queries, config);
    return data;
  } catch (e) {
    return { e };
  }
}

//users
export async function getUsersAxios() {
  try {
    const { data } = await client.get('/users');
    return data;
  } catch (e) {
    return { e };
  }
}
