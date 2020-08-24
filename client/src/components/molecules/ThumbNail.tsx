import React from 'react';
import UserCard from '../organisms/user/Card';
import {
  CLEAR,
  PartialIFONTSIZE,
  PartialICLEAR,
  PartialIWIDTH,
  PartialIWIDTHTAB,
} from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { userObjectType, userThumbNailTypes } from '../../utils/constant/storeType';
interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE {
  datas: userThumbNailTypes;
}

const ThumbNail: React.FC<Props> = ({ datas, clear, width, widthTab, fontSize }) => {
  const player = datas.map((data: userObjectType) => {
    return (
      <Padding all={CLEAR.TINY}>
        <UserCard data={data} clear={clear} width={width} widthTab={widthTab} fontSize={fontSize} />
      </Padding>
    );
  });
  return <>{player}</>;
};
export default ThumbNail;
