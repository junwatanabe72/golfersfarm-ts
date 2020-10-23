// client=>serverに変換

// user update
export const formUpdate = (data: any, type?: any) => {
  const id = type ? type.id : undefined;
  const user = {
    ...data,
    typeId: id,
  };
  return user;
};
