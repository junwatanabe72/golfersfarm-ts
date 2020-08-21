import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS } from '../../../utils/constant/color';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import Table from '../../atoms/Table';
import Card from '../../molecules/Card';
import UserCard from './Card';
import { profileTableKeys } from '../../../utils/constant/text/body/user/text';
import { PartialIUserData } from '../../../actions';

interface Props {
  targetUser: PartialIUserData;
}

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
      <UserCard data={targetUser} width={SIZE.XXSMALL} />
      <Padding all={CLEAR.XSMALL} />
      <Card color={BASICCOLORS.WHITELIGHT}>
        <Table datas={tableData} keys={profileTableKeys} width={SIZE.XXSMALL} />
      </Card>
    </Container>
  );
};

export default UserMain;
