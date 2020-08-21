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
import { UsersData, UserData } from '../../actions';

interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE {
  datas: UsersData;
}

const ThumbNail: React.FC<Props> = ({ datas, clear, width, widthTab, fontSize }) => {
  const player = datas.map((data: UserData) => {
    return (
      <Padding all={CLEAR.TINY}>
        <UserCard data={data} clear={clear} width={width} widthTab={widthTab} fontSize={fontSize} />
      </Padding>
    );
  });
  return <>{player}</>;
};
export default ThumbNail;
