import React from 'react';
import styled from 'styled-components';
import Table from "../../atoms/Table";
import Iframe from "../../atoms/Iframe";
import { media } from '../../../utils/styled/styledRdesign';
import { WIDTH, VWWIDTH, CLEAR } from "../../../utils/constant/number"
import { Padding } from "../../../utils/styled/styledSpace";
import { BASICCOLORS } from "../../../utils/constant/color"
type PartialVWWIDTH = Partial<VWWIDTH>
interface Props extends PartialVWWIDTH {

}

const BackColor = styled.div`
`;
const URL = "https://www.youtube.com/embed/wet97FIk2iY";
const Container = styled.div`
  display: flex;
  // background-color: ${BASICCOLORS.SECONDARYLIGHT};
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const UserVideo: React.FC<Props> = () => {
  return (
    <>
    <Container>
      <Iframe width={WIDTH.SXMALL} height={WIDTH.SXMALL} source={URL}/>
      <BackColor/>
      <Iframe width={WIDTH.SXMALL} height={WIDTH.SXMALL} source={URL} />
    </Container>
    <Container >
      <Iframe width={WIDTH.SXMALL} height={WIDTH.SXMALL} source={URL} />
      <BackColor />
      <Iframe width={WIDTH.SXMALL} height={WIDTH.SXMALL} source={URL} />
    </Container>
</>

  );
}

export default UserVideo;
