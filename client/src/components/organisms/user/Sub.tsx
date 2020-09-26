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
import { allResults } from '../../../utils/constant/text/body/user/value';
import {
  TABLETYPES,
  gearTableItems,
  profileTableSubItems,
  resultTableItems,
  ballTableItems,
} from '../../../utils/constant/text/table';
import { ALIGNITEMS } from '../../../utils/styled/styledSpace';

interface Props {
  targetUser: PartialUserType;
  checkedClubs: ArrayClubType;
  userBall: BallType | undefined;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const clubTableTitle = '使用クラブ';
const ballTableTitle = '使用ボール';
const URL = 'https://www.youtube.com/embed/wet97FIk2iY';
const videos = [URL, URL, URL, URL];

const UserSub: React.FC<Props> = ({ targetUser, checkedClubs, userBall }) => {
  const rightContent = (
    <StyledFlexColumn>
      <Table
        datas={checkedClubs}
        width={SIZE.SMALL}
        type={TABLETYPES.HORIZONTAL}
        tableItems={gearTableItems}
        title={clubTableTitle}
      />
      <Padding top={CLEAR.TINY} />
      {userBall && (
        <Table
          datas={userBall}
          width={SIZE.XSMALL}
          type={TABLETYPES.HORIZONTAL}
          tableItems={ballTableItems}
          title={ballTableTitle}
        />
      )}
    </StyledFlexColumn>
  );

  const leftContent = (
    <StyledFlex>
      <PaddingExtend>
        <Image image={targetUser.clubImage} width={SIZE.XSMALLMD} />
      </PaddingExtend>
    </StyledFlex>
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
