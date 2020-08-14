import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS,ICOLOR } from "../../utils/constant/color"
import { Padding } from '../../utils/styled/styledSpace';
import { CLEAR } from "../../utils/constant/number";
import LinkList from '../molecules/LinkList';

interface Props extends ICOLOR{
  route: any,
  infoRoute: any,
};

//style
const BackgroundColor = styled.div <{ color: Props["color"] }>`
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


const Footer: React.FC<Props> = ({color,route,infoRoute}) => {
  
  const fontColor = (color === BASICCOLORS.WHITE) ? BASICCOLORS.PRIMARY : BASICCOLORS.SECONDARY;
  return (
    <BackgroundColor color={color}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <div>
            <LinkList color={fontColor} route={route} num={CLEAR.TINY} />
          </div>
          <div>
            <LinkList color={fontColor} route={infoRoute} num={CLEAR.TINY} />
          </div>
          <Center>{CR}</Center>
        </Container>
      </Padding>
    </BackgroundColor>
  );
}

export default Footer;