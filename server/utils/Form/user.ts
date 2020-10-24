// client=>serverに変換

// user update
export const formUpdate = (data: any, targetType: any) => {
  delete data.ClubType;
  const user = {
    ...data,
    typeId: targetType.id,
  };
  return user;
};
