import React from 'react';
import UserCard from "../organisms/user/UserCard"
import { CLEAR, IFONTSIZE, ICLEAR, IWIDTH, IWIDTHTAB } from "../../utils/constant/number"
import { Padding} from "../../utils/styled/styledSpace";

type PartialIWIDTH = Partial<IWIDTH>
type PartialICLEAR = Partial<ICLEAR>
type PartialIWIDTHTAB = Partial<IWIDTHTAB>
type PartialIFONTSIZE = Partial<IFONTSIZE>
interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE {
  datas: any,
};


const ThumbNail: React.FC<Props>= ({datas,clear,width,widthTab,fontSize}) => {
  const player = datas.map((data: any) => {
      return (     
        <Padding all={CLEAR.TINY}>
          <UserCard data={data} clear={clear} width={width} widthTab={widthTab} fontSize={fontSize} />
        </Padding>
      );
    })
  return (
      <>
        {player}
      </>
  )
  
}
export default ThumbNail;
  