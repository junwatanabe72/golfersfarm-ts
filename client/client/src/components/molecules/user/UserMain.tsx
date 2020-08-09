import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import Image from '../../atoms/Image';
import { ROUTE, ROUTETYPE } from "../../../utils/constant/route"
import { BASICCOLORS, ICOLOR, COLORTYPES } from "../../../utils/constant/color"
import { FONTSIZE, WIDTH,CLEAR } from "../../../utils/constant/number";
import { TopUsageText } from '../../../utils/constant/text/body/top/text';
import { media } from '../../../utils/styled/styledRdesign';
import UserMainTable from "../../molecules/user/userTable/UserMainTable";
import { Padding } from "../../../utils/styled/styledSpace";
import Contact from '../../pages/Contact';

interface Props {

}

type PartialICOLOR = Partial<ICOLOR>
const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;
BackColor.defaultProps = {
  color: BASICCOLORS.WHITE
}

const Container = styled.div`
  display: flex;
  width: 30%;
  position: sticky;
  top: 50px;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        width: 70vw;
        position: relative;
        height: 100%;
        top: 0;
      `}
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${BASICCOLORS.WHITELIGHT};
  align-items: center;
`;

const userName = "JUNWATANABE72"
const URL = "https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"
const UserMain: React.FC<Props> = () => {
  return (
    <Container>
      <Layout>
        <Padding all={CLEAR.BASE}>
          <Image image={URL} width={WIDTH.XSMALL} />
          <div>{userName}</div>
          <UserMainTable width={WIDTH.XSMALL} />
        </Padding>
      </Layout>
      <Padding all={CLEAR.TINY}/>
      <Layout>
        <Padding all={CLEAR.BASE}>
        <UserMainTable width={WIDTH.XSMALL} />
        </Padding>
      </Layout>
    </Container>
  )
}

export default UserMain;


// const Container = styled.div`
//   display: flex;
//   width: 30%;
//   position: sticky;
//   top: 50px;
//   height: 100%;
//   flex-direction: column;
//   justify-content: space-around;
//   background-color: ${BASICCOLORS.WHITELIGHT};
//   align-items: center;
//   ${media.tablet`
//         width: 70vw;
//         position: relative;
//         height: 100%;
//         top: 0;
//       `}
// `;