interface resultObjectType {
  id: number;
  year: string;
  com: string;
  rank: string;
  [key: string]: string;
}
type PartialResultObjectType = Partial<resultObjectType>;
type resultTableTypes = resultObjectType[];
type PartialResultTableTypes = Partial<resultTableTypes>;

interface TableDataTypes {
  datas: clubTableTypes | userObjectType | resultTableTypes;
}
