import React from 'react';
import styled from 'styled-components';
import ProfileTable from './table/profile';
import VideoContents from './VideoContents';
import Table from '../../molecules/table';
import Card from '../../molecules/Card';
import Image from '../../atoms/Image';
import FlexLayout from '../../atoms/FlexLayout';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import { Padding } from '../../../utils/styled/styledSpace';
import {
  clubTableItems,
  profileTableSubItemsA,
  profileTableSubItemsB,
  resultTableItems,
  ballTableItems,
} from '../../../utils/constant/text/table';
import { ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { editTitleList } from '../../../utils/constant/text/common';
import BallTable from './table/ball';
import ClubResultTable from './table/clubResult';

interface Props {
  targetUser: PartialUserType;
  checkedClubs: ArrayClubType;
  checkedVideos: ObjectVideoType;
  checkedResults: ArrayResultType;
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
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
      flex-direction: column;
      `}
`;
const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const clubTableTitle = '使用クラブ';
const ballTableTitle = '使用ボール';

const titles = Object.values(editTitleList).filter((value) => {
  if (value === 'IMAGE') {
    return null;
  }
  return value;
});

const UserSub: React.FC<Props> = ({
  targetUser,
  checkedClubs,
  userBall,
  checkedVideos,
  checkedResults,
}) => {
  const contents = {
    PROFILE: (
      <Center>
        <Table
          component={<ProfileTable data={targetUser} tableItems={profileTableSubItemsA} />}
          width={SIZE.SXMALL}
        />
        <Table
          component={<ProfileTable data={targetUser} tableItems={profileTableSubItemsB} />}
          width={SIZE.SXMALL}
        />
      </Center>
    ),
    GEAR: (
      <FlexLayout
        left={
          <Center>
            <PaddingExtend>
              <Image image={targetUser.clubImage} width={SIZE.XSMALLMD} />
            </PaddingExtend>
          </Center>
        }
        right={
          <StyledFlexColumn>
            <Table
              component={
                <ClubResultTable datas={checkedClubs} tableItems={clubTableItems} theme={'club'} />
              }
              width={SIZE.SMALL}
              title={clubTableTitle}
            />
            <Padding top={CLEAR.TINY} />
            {userBall && (
              <Table
                component={<BallTable data={userBall} tableItems={ballTableItems} />}
                width={SIZE.XSMALL}
                title={ballTableTitle}
              />
            )}
          </StyledFlexColumn>
        }
        alignItems={ALIGNITEMS.CENTER}
      />
    ),
    VIDEO: <VideoContents videos={checkedVideos} />,
    RESULT: (
      <Table
        component={
          <ClubResultTable datas={checkedResults} tableItems={resultTableItems} theme={'result'} />
        }
      />
    ),
  };
  type Contents = typeof contents;
  return (
    <Container>
      {titles.map((value, num) => {
        return (
          <React.Fragment key={num}>
            <Card title={value} textAlign={ALIGNITEMS.START}>
              {contents[value as keyof Contents]}
            </Card>
            <Padding all={CLEAR.TINY} />
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default UserSub;
