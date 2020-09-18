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

export async function createClubAxios(data: ClubObjectType) {
  const { userId } = data;
  const queries = { club: { ...data } };
  try {
    const { data } = await client.post(`/${userId}/clubs`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}

export async function updateClubAxios(data: ClubObjectType) {
  const { id, userId } = data;
  const queries = { club: { ...data } };
  try {
    const { data } = await client.patch(`/${userId}/clubs/${id}`, queries);
    return data;
  } catch (e) {
    return { e };
  }
}
export async function deleteClubAxios(data: ClubObjectType) {
  const { id, userId } = data;
  try {
    const { data } = await client.delete(`/${userId}/clubs/${id}`);
    return data;
  } catch (e) {
    return { e };
  }
}
