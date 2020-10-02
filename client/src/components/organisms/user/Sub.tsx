import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS } from '../../../utils/constant/color';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import VideoContents from './VideoContents';
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
import { editTitleList } from '../../../utils/constant/text/common';

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
`;
const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const clubTableTitle = '使用クラブ';
const ballTableTitle = '使用ボール';

const titles = Object.values(editTitleList).filter((value) => {
  if (value === 'IMAGE') {
    return;
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
  type Contents = typeof contents;
  const contents = {
    PROFILE: (
      <Table datas={targetUser} type={TABLETYPES.VERTICAL} tableItems={profileTableSubItems} />
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
        }
        alignItems={ALIGNITEMS.CENTER}
      />
    ),
    VIDEO: <VideoContents videos={checkedVideos} />,
    RESULT: (
      <Table datas={checkedResults} type={TABLETYPES.HORIZONTAL} tableItems={resultTableItems} />
    ),
  };

  return (
    <Container>
      {titles.map((value, num) => {
        return (
          <React.Fragment key={num}>
            <Card color={BASICCOLORS.WHITELIGHT} title={value} textAlign={ALIGNITEMS.START}>
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
