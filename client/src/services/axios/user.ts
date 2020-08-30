import { client } from '../../utils/axiosConf';

//userAPI
//signup
// export async function createUser(data: PartialUserObjectType) {
//   const queries = { name: data.user.name, email: data.user.email, password: data.user.password };
//   try {
//     const data = await client.post('/', queries);
//     return { data };
//   } catch (e) {
//     return { e };
//   }
// }
//login
// export async function loginUser() {
//   try {
//     const data = await client.get('/');
//     return { data };
//   } catch (e) {
//     return { e };
//   }
// }
//users
export async function getUsers() {
  try {
    const { data } = await client.get('/');
    return data;
  } catch (e) {
    return { e };
  }
}
//logout
// export async function logoutUser() {
//   try {
//     const data = await client.get('/');
//     return { data };
//   } catch (e) {
//     return { e };
//   }
// }

export async function postAxios(data: any) {
  const queries = { title: data.issue.title, body: data.issue.description };
  try {
    const data = await client.post('/', queries);
    return { data };
  } catch (e) {
    return { e };
  }
}

export async function putAxios(data: any) {
  const newData = data.issue;
  const id = newData.number;
  const queries = {
    title: newData.title,
    body: newData.body,
    state: newData.state,
  };
  try {
    const data = await client.patch('/', queries);
    return { data };
  } catch (e) {
    return;
  }
}

export async function getUserAxios() {
  try {
    const data = await client.get('/');
    return { data };
  } catch (e) {
    return { e };
  }
}
