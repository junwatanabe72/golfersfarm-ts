import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';
import { ROUTE, ROUTETYPE } from "../../../utils/constant/route"
import { BASICCOLORS, ICOLOR, COLORTYPES } from "../../../utils/constant/color"
import { FONTSIZE, WIDTH, CLEAR } from "../../../utils/constant/number";
import { media } from '../../../utils/styled/styledRdesign';
import UserGearTable from "../../molecules/user/userTable/UserGearTable";
import { Padding } from "../../../utils/styled/styledSpace";
import Contact from '../../organisms/Contact';

interface Props {
}

const Container = styled.div`
  display: flex;
  width: 55vw;
  background-color: ${BASICCOLORS.WHITELIGHT};
  justify-content: space-between;
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
        width: 60vw;
      `}
`;

const userName = "JUNWATANABE72"
const URL = "https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"
const UserGear: React.FC<Props> = ({ }) => {
  return (
    <Container>
        <Image image={URL} width={WIDTH.XSMALL} />
        <UserGearTable />
    </Container>
  )
}

export default UserGear;