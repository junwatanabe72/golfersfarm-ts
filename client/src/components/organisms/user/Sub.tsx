import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS } from '../../../utils/constant/color';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import VideoPosition from '../../molecules/VideoPosition';
import { Padding } from '../../../utils/styled/styledSpace';
import Table from '../../molecules/table';
import Image from '../../atoms/Image';
import Card from '../../molecules/Card';
import FlexLayout from '../../atoms/FlexLayout';
import {
  profileTableSubItems,
  gearTableItems,
  resultTableItems,
} from '../../../utils/constant/text/body/user/text';
import { allResults } from '../../../utils/constant/text/body/user/value';
import { TABLETYPES } from '../../../utils/constant/text/table';
import { ALIGNITEMS } from '../../../utils/styled/styledSpace';

interface Props {
  targetUser: PartialUserObjectType;
  storeClubs: clubTableTypes;
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
  padding-top: ${CLEAR.TINY}vw;
  padding-right: ${CLEAR.TINY}vw;
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

const UserSub: React.FC<Props> = ({ targetUser, storeClubs }) => {
  const rightContent = (
    <Table
      datas={storeClubs}
      width={SIZE.SMALL}
      type={TABLETYPES.HORIZONTAL}
      tableItems={gearTableItems}
    />
  );

  const leftContent = (
    <StyledFlexColumn>
      <PaddingExtend>
        <Image image={targetUser.clubImage} width={SIZE.XSMALLMD} />
      </PaddingExtend>
    </StyledFlexColumn>
  );

  return (
    <Container>
      <Card color={BASICCOLORS.WHITELIGHT} title={'PROFILE'}>
        <Table datas={targetUser} type={TABLETYPES.VERTICAL} tableItems={profileTableSubItems} />
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card color={BASICCOLORS.WHITELIGHT} title={'GEAR'} textAlign={ALIGNITEMS.START}>
        <FlexLayout left={leftContent} right={rightContent} alignItems={ALIGNITEMS.CENTER} />
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card color={BASICCOLORS.WHITELIGHT} title={'SWING'}>
        <VideoPosition videos={videos} />
      </Card>
      <Padding all={CLEAR.TINY} />
      <Card color={BASICCOLORS.WHITELIGHT} title={'RESULT'}>
        <Table datas={allResults} type={TABLETYPES.HORIZONTAL} tableItems={resultTableItems} />
      </Card>
    </Container>
  );
};

export default UserSub;
