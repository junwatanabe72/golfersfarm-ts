import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addUsers } from '../../actions';
import Layout from '../templates/Layout';
import ThumbNail from '../molecules/ThumbNail';
import { users } from '../../utils/constant/text/body/user/value';
import { media } from '../../utils/styled/styledRdesign';
import { CLEAR, SIZE, FONTSIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: PartialUserObjectType;
  allUsers: userThumbNailTypes;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      `}
`;
const Users: React.FC<Props> = ({ currentUser, allUsers }) => {
  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <ThumbNail datas={allUsers} clear={CLEAR.TINY} width={SIZE.XXXSMALL} />
        </Container>
      </Padding>
    </Layout>
  );
};
export default Users;
