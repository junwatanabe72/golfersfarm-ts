import React from 'react';
import styled from 'styled-components';
import Iframe from '../atoms/Iframe';
import { media } from '../../utils/styled/styledRdesign';
import { SIZE, SIZETYPE, CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  videos: string[];
  maxWidth?: SIZETYPE;
}

const Container = styled.div<{ maxWidth: Props['maxWidth'] }>`
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

const VideoPosition: React.FC<Props> = ({ maxWidth, videos }) => {
  const [width, height] = [3, 4].includes(videos.length)
    ? [SIZE.SXMALL, SIZE.XSMALL]
    : [SIZE.LARGE, SIZE.SMALL];
  const content = videos.map((data) => {
    return (
      <Padding top={CLEAR.TINY}>
        <Iframe width={width} height={height} source={data} />
      </Padding>
    );
  });

  return <Container maxWidth={maxWidth}>{content}</Container>;
};

export default VideoPosition;
