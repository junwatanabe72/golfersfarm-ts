import React from 'react';
import styled from 'styled-components';
import Layout from "../templates/Layout";
import ThumbNail from "../molecules/ThumbNail";
import { chars } from "../../utils/constant/text/body/user/text";
import { media } from '../../utils/styled/styledRdesign';
import { CLEAR,WIDTH,FONTSIZE } from "../../utils/constant/number";
import { Padding } from "../../utils/styled/styledSpace";

interface Props {
  currentUser: any,
};

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

const Users: React.FC<Props>= ({currentUser}) => {  
  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <ThumbNail datas={chars} clear={CLEAR.TINY} width={WIDTH.XXXSMALL} widthTab={WIDTH.MEDIUM} fontSize={FONTSIZE.MEDIUM}/>
        </Container>
      </Padding>
    </Layout>
  )
}
export default Users;
  