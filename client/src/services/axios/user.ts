import { client } from '../../utils/axiosConf';
//userAPI

export async function updateUserAxios(data: PartialUserType) {
  const { id } = data;
  const queries = { user: { ...data } };
  try {
    const { data } = await client.patch(`/users/${id}`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}
export async function updateUserImageAxios(data: FormData) {
  const id = data.get('id');
  const queries = data;
  const config = {
    headers: {
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
