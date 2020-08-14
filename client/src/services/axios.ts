import { client, issueURL, issuePutURL, userURL } from '../utils/Axios';

//fix
// export async function getAxios() {
//   try {
//     const data = await client.get(issueURL);
//     return { data };
//   } catch (e) {
//     return { e };
//   }
// }

// export async function postAxios(data: any) {
//   const queries = { title: data.issue.title, body: data.issue.description };
//   try {
//     const data = await client.post(issueURL, queries);
//     return { data };
//   } catch (e) {
//     return { e };
//   }
// }

// export async function putAxios(data: any) {
//   const newData = data.issue;
//   const id = newData.number;
//   const queries = {
//     title: newData.title,
//     body: newData.body,
//     state: newData.state,
//   };
//   try {
//     const data = await client.patch(issuePutURL + id, queries);
//     return { data };
//   } catch (e) {
//     return;
//   }
// }

// export async function getUserAxios() {
//   try {
//     const data = await client.get(userURL);
//     return { data };
//   } catch (e) {
//     return { e };
//   }
// }