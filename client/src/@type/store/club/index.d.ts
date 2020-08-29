interface clubObjectType {
  id: number;
  name: string;
  shaftId: number;
  userId: number;
  makerId: number;
  typeId: number;
  [key: string]: string | number;
}
type clubTableTypes = clubObjectType[];
type PartialClubObjectType = Partial<clubObjectType>;
type PartialClubTableTypes = Partial<clubTableTypes>;
