interface ClubObjectType {
  id: number;
  name: string;
  shaft: string;
  maker: string;
  type: string;
  flex: string;
  [key: string]: string | number;
}
type ClubTableTypes = ClubObjectType[];
type PartialClubObjectType = Partial<ClubObjectType>;
type PartialClubTableTypes = Partial<ClubTableTypes>;
