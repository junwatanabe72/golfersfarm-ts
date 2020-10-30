import React from 'react';
import styled from 'styled-components';
import UserCard from './Card';
import ProfileTable from './table/profile';
import Table from '../../molecules/table';
import Card from '../../molecules/Card';
import { SIZE, CLEAR, FONTSIZE } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import SNS from '../../molecules/SNSIcons';
import { media } from '../../../utils/styled/styledRdesign';
import { profileTableItems } from '../../../utils/constant/text/table';

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

const Styleddiv = styled.div`
  width: ${SIZE.XXSMALL}vw;
  ${media.tablet`
      width: ${SIZE.LARGE}vw;  
      `}
`;

const title = 'SKILL';
const UserMain: React.FC<Props> = ({ targetUser }) => {
  const { facebook, twitter, instagram, youtube } = targetUser;
  const urls = { facebook, twitter, youtube, instagram };
  return (
    <Container>
      <UserCard data={targetUser} width={SIZE.XXSMALL} />
      <Padding all={CLEAR.TINY} />
      <Card title={'SNS'}>
        <Styleddiv>
          <SNS urls={urls} fontSize={FONTSIZE.XLARGE} />
        </Styleddiv>
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card title={title}>
        <Table
          component={<ProfileTable data={targetUser} tableItems={profileTableItems} />}
          width={SIZE.XXSMALL}
        />
      </Card>
    </Container>
  );
};

export default UserMain;
