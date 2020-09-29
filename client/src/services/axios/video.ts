import { authClient } from '../../utils/axiosConf';

export async function getVideosAxios(arg: PartialUserType) {
  const { id } = arg;
  const { data } = await authClient.get(`/users/${id}/videos`);
  return data;
}

export async function updateVideosAxios(arg: PartialArrayVideoType) {
  const { userId } = arg[0];
  const queries = { video: [...arg] };
  const { data } = await authClient.post(`/users/${userId}/videos/replace`, queries);
  return data;
}
