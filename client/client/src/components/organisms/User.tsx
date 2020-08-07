import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import UserMain from "../molecules/user/UserMain";
import UserSub from "../molecules/user/UserSub";
import { ROUTE, ROUTETYPE } from "../../utils/constant/route"
import { BASICCOLORS,ICOLOR, COLORTYPES } from "../../utils/constant/color"
import { FONTSIZE, WIDTH, CLEAR } from "../../utils/constant/number";
import { TopUsageText } from '../../utils/constant/text/body/top/text';
import { media } from '../../utils/styled/styledRdesign';
import UserProfile from "../molecules/user/UserProfile";
import { Padding } from "../../utils/styled/styledSpace";
interface Props extends RouteComponentProps < {id: string} >{};

const userName = "jun"

const Container = styled.div`
  display:flex;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;  
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const User: React.FC<Props> = ({match}) => {
  return (
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <UserMain />
        <Padding all={CLEAR.XSMALL}  />
          <UserSub />
        </Container>
      </Padding>
  )
}

export default User;