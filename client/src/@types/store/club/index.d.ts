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
type ClubArrayTypes = ClubObjectType[];
type ClubTableTypes = { [key: number]: ClubObjectType };
type PartialClubObjectType = Partial<ClubObjectType>;
type PartialClubArrayTypes = PartialClubObjectType[];
type PartialClubTableTypes = { [key: number]: PartialClubObjectType };
