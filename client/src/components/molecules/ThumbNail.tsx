import React from 'react';
import UserCard from '../organisms/user/Card';
import {
  PartialIFONTSIZE,
  PartialICLEAR,
  PartialIWIDTH,
  PartialIWIDTHTAB,
} from '../../@type/utils/numer';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE {
  datas: userThumbNailTypes;
}

const ThumbNail: React.FC<Props> = ({ datas, clear, width, widthTab, fontSize }) => {
  const player = datas.map((data: PartialUserObjectType) => {
    return (
      <Padding all={CLEAR.TINY}>
        <UserCard data={data} clear={clear} width={width} widthTab={widthTab} fontSize={fontSize} />
      </Padding>
    );
  });
  return <>{player}</>;
};
export default ThumbNail;
