interface clubObjectType {
  id: number;
  name: string;
  shaft: string;
  maker: string;
  type: string;
  flex: string;
  [key: string]: string | number;
}
type clubTableTypes = clubObjectType[];
type PartialClubObjectType = Partial<clubObjectType>;
type PartialClubTableTypes = Partial<clubTableTypes>;
