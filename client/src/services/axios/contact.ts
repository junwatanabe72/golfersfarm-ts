import { client } from '../../utils/axiosConf';

export async function sendMessageAxios(arg: ContactType) {
  const queries = { inquery: arg };
  const { data } = await client.post('/contact', queries);
  return data;
}
