import React from 'react';
import styled from 'styled-components';
import Iframe from "../atoms/Iframe";
import { media } from '../../utils/styled/styledRdesign';
import { WIDTH, WIDTHTYPE, CLEAR } from "../../utils/constant/number"
import { Padding } from "../../utils/styled/styledSpace";

interface Props {
  videos: string[],
  maxWidth?: WIDTHTYPE,

}


const Container = styled.div<{maxWidth: Props["maxWidth"]}>`
  display: flex;
  max-width: ${(props) => props.maxWidth}vw;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
        width: 60vw;  
        max-width: 60vw;
      `}
`;

const VideoPosition: React.FC<Props> = ({ maxWidth,videos}) => {
  const content = videos.map((data) => {
    if (videos.length === 4) {
      return (
          <Padding top={CLEAR.TINY} >
            <Iframe width={WIDTH.SXMALL} height={WIDTH.XSMALL} source={data} />
          </Padding>
      )
    } else if (videos.length === 3) {
      return (
        <Padding top={CLEAR.TINY} >
          <Iframe width={WIDTH.SXMALL} height={WIDTH.XSMALL} source={data} />
        </Padding>
      )
    } else {
      return (
        <Iframe width={WIDTH.LARGE} height={WIDTH.SMALL} source={data} />
      )
    }
  })

  
  return (
    <Container maxWidth={maxWidth}>
      {content}
    </Container>
  );
}

export default VideoPosition;
