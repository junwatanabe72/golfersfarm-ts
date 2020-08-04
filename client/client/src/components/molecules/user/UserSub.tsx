import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import { BASICCOLORS, ICOLOR, COLORTYPES } from "../../../utils/constant/color"
import { FONTSIZE, WIDTH, CLEAR } from "../../../utils/constant/number";
import { media } from '../../../utils/styled/styledRdesign';
import UserProfile from "../../molecules/user/UserProfile";
import UserGear from "../../molecules/user/UserGear";
import UserResult from "../../molecules/user/UserResult";
import UserVideo from "../../molecules/user/UserVideo";
import { Padding } from "../../../utils/styled/styledSpace";


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
  width: 70%;
  flex-direction: column;
  justify-content: space-around;
  // background-color: ${BASICCOLORS.SECONDARY};
  align-items: center;
  ${media.tablet`
        width: 80%;
        position: relative;
        height: 100%;
        top: 0;
      `}
`;
const Color = styled.div<PartialICOLOR>`
  background-color: ${BASICCOLORS.SECONDARYDARK};
`;

const UserSub: React.FC<Props> = ({ }) => {
  return (
    <Container> 
      <Color>
        <Padding all={24}>
          <UserProfile width={WIDTH.MEDIUMLARGE} />
        </Padding>
      </Color>
      <Padding all={16}/>
      <Color>
        <Padding all={24}>
          <UserProfile width={WIDTH.MEDIUMLARGE} />
        </Padding>
      </Color>
      <Color>
        <Padding all={24}>
          <UserGear />
        </Padding>
      </Color>
      <Color>
        <Padding all={24}>
          <UserVideo />
        </Padding>
      </Color>
      <Color>
        <Padding all={24}>
          <UserResult />
        </Padding>
      </Color>
    </Container>
  )
}

export default UserSub;