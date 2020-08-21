import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS, ICOLOR } from '../../../utils/constant/color';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import VideoPosition from '../../molecules/VideoPosition';
import { Padding } from '../../../utils/styled/styledSpace';
import Table from '../../atoms/Table';
import Tablegear from '../../atoms/Tablegear';
import Image from '../../atoms/Image';
import Card from '../../molecules/Card';
import FlexLayout from '../../atoms/FlexLayout';
import {
  sampleGearDatas,
  sampleResultDatas,
  profileSubTableKeys,
  gearTableKeys,
  allClubs,
} from '../../../utils/constant/text/body/user/text';
import { ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { UserData, PartialIUserData } from '../../../actions';

interface Props {
  targetUser: PartialIUserData;
}

type PartialICOLOR = Partial<ICOLOR>;
const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;
BackColor.defaultProps = {
  color: BASICCOLORS.WHITE,
};

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
`;
const StyledFlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const URL = 'https://www.youtube.com/embed/wet97FIk2iY';
const videos = [URL, URL, URL, URL];
const ImageURL =
  'https://res.cloudinary.com/hqejvhqad/image/upload/v1566349931/edh9uyqxlz8xx6zyz60z.jpg';

const UserSub: React.FC<Props> = ({ targetUser }) => {
  const { sex, residence, birthPlace, job, school, hobby } = targetUser;
  const tableData = { sex, residence, birthPlace, job, school, hobby };

  const rightContent = <Tablegear datas={allClubs} keys={gearTableKeys} width={SIZE.SMALL} />;

  const leftContent = (
    <StyledFlexColumn>
      <PaddingExtend>
        <Image image={targetUser.clubImage} width={SIZE.XSMALL} />
      </PaddingExtend>
    </StyledFlexColumn>
  );

  return (
    <Container>
      <Card
        color={BASICCOLORS.WHITELIGHT}
        title={'PROFILE'}
        clear={CLEAR.XSMALL}
        textAlign={ALIGNITEMS.START}
      >
        <Table datas={tableData} keys={profileSubTableKeys} />
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card
        color={BASICCOLORS.WHITELIGHT}
        title={'GEAR'}
        clear={CLEAR.TINY}
        textAlign={ALIGNITEMS.START}
      >
        <FlexLayout left={leftContent} right={rightContent} alignItems={ALIGNITEMS.CENTER} />
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card
        color={BASICCOLORS.WHITELIGHT}
        title={'SWING'}
        clear={CLEAR.XSMALL}
        textAlign={ALIGNITEMS.START}
      >
        <VideoPosition maxWidth={SIZE.MEDIUM} videos={videos} />
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card
        color={BASICCOLORS.WHITELIGHT}
        title={'RESULT'}
        clear={CLEAR.XSMALL}
        textAlign={ALIGNITEMS.START}
      >
        {/* <Table datas={sampleResultDatas} /> */}
      </Card>
    </Container>
  );
};

export default UserSub;
