import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS, ICOLOR } from '../../../utils/constant/color';
import { WIDTH, CLEAR, FONTSIZE } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import Table from '../../atoms/Table';
import Card from '../../molecules/Card';
import UserCard from './UserCard';
import { sampleUserMainDatas, chars } from '../../../utils/constant/text/body/user/text';

interface Props {
  currentUser: any;
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

const UserMain: React.FC<Props> = ({ currentUser }) => {
  return (
    <Container>
      <UserCard
        data={currentUser}
        clear={CLEAR.XSMALL}
        width={WIDTH.XXSMALL}
        widthTab={WIDTH.LARGE}
        fontSize={FONTSIZE.XLARGE}
      />
      <Padding all={CLEAR.XSMALL} />
      <Card color={BASICCOLORS.WHITELIGHT} clear={CLEAR.XSMALL}>
        <Table datas={sampleUserMainDatas} width={WIDTH.XXSMALL} />
      </Card>
    </Container>
  );
};

export default UserMain;
