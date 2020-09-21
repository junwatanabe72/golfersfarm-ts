import { client } from '../../utils/axiosConf';

export async function getGearsAxios(data: PartialUserType) {
  const { id } = data;
  try {
    const { data } = await client.get(`/${id}/clubs`);

    return data;
  } catch (e) {
    return { e };
  }
}

export async function updateClubsAxios(data: PartialArrayClubType) {
  const { userId } = data[0];
  const queries = { club: [...data] };

  try {
    const { data } = await client.post(`/${userId}/clubs/replace`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}
