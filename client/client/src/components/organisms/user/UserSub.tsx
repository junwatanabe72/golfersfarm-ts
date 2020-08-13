import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS, ICOLOR } from "../../../utils/constant/color";
import { WIDTH, CLEAR } from "../../../utils/constant/number";
import { media } from '../../../utils/styled/styledRdesign';
import VideoPosition from "../../molecules/VideoPosition";
import { Padding } from "../../../utils/styled/styledSpace";
import Table from "../../atoms/Table";
import Image from "../../atoms/Image";
import Card from "../../molecules/Card";
import FlexLayout from "../../atoms/FlexLayout";
import { sampleGearDatas, sampleResultDatas, sampleProfileDatas } from "../../../utils/constant/text/body/user/text";
import { ALIGNITEMS } from "../../../utils/styled/styledSpace";
interface Props {

}

type PartialICOLOR = Partial<ICOLOR>
const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;
BackColor.defaultProps = {
  color: BASICCOLORS.WHITE
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        position: relative;
        height: 100%;
        top: 0;
      `}
`;
const PaddingExtend = styled(Padding)`
    padding: ${CLEAR.TINY}vw;

`
const StyledFlexColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const URL = "https://www.youtube.com/embed/wet97FIk2iY";
const videos = [URL, URL, URL, URL]
const ImageURL = "https://res.cloudinary.com/hqejvhqad/image/upload/v1566349931/edh9uyqxlz8xx6zyz60z.jpg"

const rightContent = (
  <Table datas={sampleGearDatas} width={WIDTH.SMALL} />
);

const leftContent = (
    <StyledFlexColumn>
      <PaddingExtend>
        <Image image={ImageURL} width={WIDTH.XSMALL} />
      </PaddingExtend >
    </StyledFlexColumn>
);

const UserSub: React.FC<Props> = ({}) => {
  return (
      <Container>
        <Card color={BASICCOLORS.WHITELIGHT} title={"PROFILE"} clear={CLEAR.XSMALL} textAlign={ALIGNITEMS.START}>
          <Table datas={sampleProfileDatas} />
        </Card>
        <Padding all={CLEAR.TINY} />
        <Card color={BASICCOLORS.WHITELIGHT} title={"GEAR"} clear={CLEAR.TINY} textAlign={ALIGNITEMS.START}>
          <FlexLayout left={leftContent} right={rightContent} alignItems={ALIGNITEMS.CENTER} />
        </Card>
        <Padding all={CLEAR.TINY} />
        <Card color={BASICCOLORS.WHITELIGHT} title={"SWING"} clear={CLEAR.XSMALL} textAlign={ALIGNITEMS.START}>
          <VideoPosition maxWidth={WIDTH.MEDIUM} videos={videos} />
        </Card>
        <Padding all={CLEAR.TINY} />
        <Card color={BASICCOLORS.WHITELIGHT} title={"RESULT"} clear={CLEAR.XSMALL} textAlign={ALIGNITEMS.START}>
          <Table datas={sampleResultDatas} />
        </Card>
      </Container>
  )
}

export default UserSub;