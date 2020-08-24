import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS } from '../../../utils/constant/color';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import Table from '../../molecules/table';
import Card from '../../molecules/Card';
import UserCard from './Card';
import { TABLETYPES } from '../../../utils/constant/text/tableType';
import { profileTableItems } from '../../../utils/constant/text/body/user/text';
import { PartialUserObjectType } from '../../../utils/constant/storeType';

interface Props {
  targetUser: PartialUserObjectType;
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
  return (
    <Container>
      <UserCard data={targetUser} width={SIZE.XXSMALL} />
      <Padding all={CLEAR.XSMALL} />
      <Card color={BASICCOLORS.WHITELIGHT}>
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
