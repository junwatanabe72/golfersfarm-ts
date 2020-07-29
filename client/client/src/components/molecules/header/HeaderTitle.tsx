import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { defaultColors,colorType} from "../../../utils/constant/color";
import { defaultSize } from "../../../utils/constant/number";
import { ROUTE } from "../../../utils/constant/route";
import { MgComponent } from "../../../utils/styled/styledSpace";

interface Props {
  fontColor: colorType,
};

const Container = styled.div`
  display: inline-block;
`;

const HeaderTitle: React.FC<Props> = ({ fontColor}) => {
  return (
    <Container>
      {/* <MgComponent right={16} left={16}> */}
      <LinkButton to={ROUTE.TOP} fontSize={defaultSize.FONT.XXLARGE} color={fontColor} >
          Golfersfarm
        </LinkButton>
      {/* </MgComponent> */}
    </Container>
  );
}

export default HeaderTitle;