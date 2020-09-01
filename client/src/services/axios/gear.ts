import { client } from '../../utils/axiosConf';
// import { queries } from '@testing-library/react';

export async function getGearsAxios(data: PartialUserObjectType) {
  const clubs = data.clubs ? data.clubs : [];
  const { id } = data;
  const params = clubs
    .map((num) => {
      return `cids=${num}&`;
    })
    .join('');

  try {
    const { data } = await client.get(`/${id}/gears?${params}`);
    return data;
  } catch (e) {
    return { e };
  }
}
