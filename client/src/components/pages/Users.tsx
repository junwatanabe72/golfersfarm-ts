import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { State } from '../../store';
import { addUsers } from '../../actions';
import Layout from '../templates/Layout';
import ThumbNail from '../molecules/ThumbNail';
import { chars } from '../../utils/constant/text/body/user/text';
import { media } from '../../utils/styled/styledRdesign';
import { CLEAR, SIZE, FONTSIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { PartialIUserData, UserData } from '../../actions';

interface Props {
  currentUser: PartialIUserData;
}

const Container = styled.div`
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  ${media.tablet`
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      `}
`;
const Users: React.FC<Props> = ({ currentUser }) => {
  const indexUsers = useSelector((state: State) => state.Users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUsers(chars));
  }, []);

  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <ThumbNail
            datas={indexUsers}
            clear={CLEAR.TINY}
            width={SIZE.XXXSMALL}
            widthTab={SIZE.MEDIUM}
            fontSize={FONTSIZE.MEDIUM}
          />
        </Container>
      </Padding>
    </Layout>
  );
};
export default Users;
