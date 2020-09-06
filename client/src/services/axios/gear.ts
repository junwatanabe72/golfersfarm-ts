import { client } from '../../utils/axiosConf';
// import { queries } from '@testing-library/react';

export async function getGearsAxios(data: PartialUserObjectType) {
  const { id } = data;
  try {
    const { data } = await client.get(`/${id}/gears`);
    return data;
  } catch (e) {
    return { e };
  }
}
