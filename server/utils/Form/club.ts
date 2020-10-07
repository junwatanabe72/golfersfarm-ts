// replace
export const formReplace = async (
  data: any,
  targetShaftId: number,
  targetMakerId: number,
  targetClubTypeId: number
) => {
  const club = {
    id: data.id || undefined,
    name: data.name || undefined,
    shaftId: targetShaftId,
    makerId: targetMakerId,
    typeId: targetClubTypeId,
    flex: data.flex,
  };

  return club;
};
