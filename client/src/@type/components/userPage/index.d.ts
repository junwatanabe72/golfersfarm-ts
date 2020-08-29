interface profileTableSubItemsType {
  sex: string;
  residence: string;
  birthPlace: string;
  school: string;
  job: string;
  hobby: string;
  [key: string]: string;
}
interface profileTablemainItemsType {
  bestScore: string;
  averageDistance: string;
  homeCource: string;
  [key: string]: string;
}
type profileTableItemsType = profileTablemainItemsType | profileTableSubItemsType;

interface resultTableItemsType {
  year: string;
  com: string;
  rank: string;
  [key: string]: string;
}

interface gearTableItemsType {
  typeId: string;
  name: string;
  makerId: string;
  shaftId: string;
  userId: string;
  [key: string]: string;
}
