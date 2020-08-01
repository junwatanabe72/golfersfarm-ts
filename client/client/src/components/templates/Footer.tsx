import React from 'react';
import styled from 'styled-components';
import FooterLink from '../molecules/footer/FooterLink';
import { BASICCOLORS,COLORTYPES,ICOLOR } from "../../utils/constant/color"
import { media } from '../../utils/styled/styledRdesign';
import { Padding } from '../../utils/styled/styledSpace';
import { CLEAR } from "../../utils/constant/number";

interface Props extends ICOLOR{
};

//style
const BackgroundColor = styled.div<Props>`
  background-color: ${(props) => props.color}; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Center = styled.div`
  text-align: center;
`;
const CR = "©️ 2020 Copyright: junwatanabe72";


const Footer: React.FC<Props> = ({ color}) => {
  
  const fontColor = (color === BASICCOLORS.WHITE) ? BASICCOLORS.PRIMARY : BASICCOLORS.SECONDARY;
  return (
    <BackgroundColor color={color}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
            <FooterLink color={fontColor} />
            <Center>{CR}</Center>
        </Container>
      </Padding>
    </BackgroundColor>
  );
}

export default Footer;