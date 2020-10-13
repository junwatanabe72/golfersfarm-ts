import React from 'react';
import styled from 'styled-components';
import UserCard from './Card';
import Table from '../../molecules/table';
import Card from '../../molecules/Card';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import { TABLETYPES } from '../../../utils/constant/text/table';

interface Props {
  targetUser: PartialUserType;
}

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 50px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const profileTableItems = {
  bestScore: 'ベストスコア',
  averageDistance: '平均飛距離',
  homeCourse: 'ホームコース',
};
const title = 'SKILL';
const UserMain: React.FC<Props> = ({ targetUser }) => {
  return (
    <Container>
      <UserCard data={targetUser} width={SIZE.XXSMALL} />
      <Padding all={CLEAR.TINY} />
      <Card title={title}>
        <Table
          datas={targetUser}
          width={SIZE.XXSMALL}
          type={TABLETYPES.VERTICAL}
          tableItems={profileTableItems}
        />
      </Card>
    </Container>
  );
};

export default UserMain;
