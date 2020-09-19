import { client } from '../../utils/axiosConf';

export async function getGearsAxios(data: PartialUserObjectType) {
  const { id } = data;
  try {
    const { data } = await client.get(`/${id}/gears`);
    return data;
  } catch (e) {
    return { e };
  }
}

export async function updateClubsAxios(data: PartialClubTableTypes) {
  const { userId } = data[0];
  const queries = { club: [{ ...data }] };
  try {
    const { data } = await client.post(`/${userId}/clubs/replace`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}
