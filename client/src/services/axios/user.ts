import { authClient } from '../../utils/axiosConf';

//userAPI

export async function updateUserAxios(arg: PartialUserType) {
  const { id } = arg;
  const queries = { user: { ...arg } };
  const { data } = await authClient.patch(`/users/${id}`, queries);
  return data;
}
export async function updateUserImageAxios(arg: FormData) {
  const id = arg.get('id');
  const queries = arg;
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const { data } = await authClient.post(`/users/${id}/images`, queries, config);
  return data;
}

//users
export async function getUsersAxios() {
  const { data } = await authClient.get('/users');
  return data;
}
