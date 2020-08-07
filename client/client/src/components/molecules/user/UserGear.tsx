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
const URL = "https://res.cloudinary.com/hqejvhqad/image/upload/v1566349931/edh9uyqxlz8xx6zyz60z.jpg"
const UserGear: React.FC<Props> = ({ }) => {
  return (
    <Container>
        <Image image={URL} width={WIDTH.XSMALL} />
        <UserGearTable />
    </Container>
  )
}

export default UserGear;