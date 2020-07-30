import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { BASICCOLORS, COLORTYPES} from "../../../utils/constant/color";
import { FONTSIZE } from "../../../utils/constant/number";
import { ROUTE } from "../../../utils/constant/route";
import { MgComponent } from "../../../utils/styled/styledSpace";

interface Props {
  fontColor: COLORTYPES,
};

const Container = styled.div`
  display: inline-block;
`;

const HeaderTitle: React.FC<Props> = ({ fontColor}) => {
  return (
    <Container>
      {/* <MgComponent right={16} left={16}> */}
      <LinkButton to={ROUTE.TOP} fontSize={FONTSIZE.XXLARGE} color={fontColor} >
          Golfersfarm
        </LinkButton>
      {/* </MgComponent> */}
    </Container>
  );
}

export default HeaderTitle;