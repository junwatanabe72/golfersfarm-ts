// client=>serverに変換

// user update
export const formUpdate = (data: any, id: number) => {
  const user = {
    ...data,
    typeId: id,
  };
  return user;
};
