import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS, ICOLOR } from '../../../utils/constant/color';
import { SIZE, CLEAR, FONTSIZE } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import Table from '../../atoms/Table';
import Card from '../../molecules/Card';
import UserCard from './Card';
import { profileTableKeys } from '../../../utils/constant/text/body/user/text';
import { PartialIUserData, UserData } from '../../../actions';

interface Props {
  targetUser: PartialIUserData;
}

type PartialICOLOR = Partial<ICOLOR>;
const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;
BackColor.defaultProps = {
  color: BASICCOLORS.WHITE,
};

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 50px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UserMain: React.FC<Props> = ({ targetUser }) => {
  const { averageDistance, bestScore, homeCource } = targetUser;
  const tableData = { averageDistance, bestScore, homeCource };
  return (
    <Container>
      <UserCard
        data={targetUser}
        clear={CLEAR.XSMALL}
        width={SIZE.XXSMALL}
        widthTab={SIZE.LARGE}
        fontSize={FONTSIZE.XLARGE}
      />
      <Padding all={CLEAR.XSMALL} />
      <Card color={BASICCOLORS.WHITELIGHT} clear={CLEAR.XSMALL}>
        <Table datas={tableData} keys={profileTableKeys} width={SIZE.XXSMALL} />
      </Card>
    </Container>
  );
};

export default UserMain;
