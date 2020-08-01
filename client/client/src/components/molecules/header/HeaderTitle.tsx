import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { ICOLOR } from "../../../utils/constant/color";
import { FONTSIZE } from "../../../utils/constant/number";
import { HEADERTITLETYPE } from "../../../utils/constant/text/header/text";
import { ROUTE } from "../../../utils/constant/route";

interface Props extends ICOLOR, HEADERTITLETYPE{
};

const Container = styled.div`
  display: inline-block;
`;

const HeaderTitle: React.FC<Props> = ({ color, appTitle}) => {
  return (
    <Container>
      <LinkButton to={ROUTE.TOP} fontSize={FONTSIZE.XXLARGE} color={color} >
        {appTitle}
      </LinkButton>
    </Container>
  );
}

export default HeaderTitle;