import { client } from '../../utils/axiosConf';

export async function getGearsAxios(data: PartialUserType) {
  const jwt = localStorage.getItem('jwt');

  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const { id } = data;
  try {
    const { data } = await client.get(`/users/${id}/clubs`, config);

    return data;
  } catch (e) {
    return { e };
  }
}

export async function updateClubsAxios(data: PartialArrayClubType) {
  const jwt = localStorage.getItem('jwt');

  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const { userId } = data[0];
  const queries = { club: [...data] };

  try {
    const { data } = await client.post(`/users/${userId}/clubs/replace`, queries, config);
    return data;
  } catch (e) {
    return { e };
  }
}
