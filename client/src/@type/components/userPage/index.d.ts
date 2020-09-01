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
  type: string;
  name: string;
  maker: string;
  shaft: string;
  flex: string;
  [key: string]: string;
}
