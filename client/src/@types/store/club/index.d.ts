interface ClubObjectType {
  id: number;
  userId: number;
  name: string;
  shaft: string;
  maker: string;
  type: string;
  flex: string;
  [key: string]: string | number;
}
type ClubTableTypes = ClubObjectType[];
type PartialClubObjectType = Partial<ClubObjectType>;
type PartialClubTableTypes = PartialClubObjectType[];
