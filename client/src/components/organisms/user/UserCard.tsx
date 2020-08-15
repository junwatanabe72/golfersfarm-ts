import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import Image from '../../atoms/Image';
import Card from '../../molecules/Card';
import SNS from '../../molecules/SNSIcons';
import { ICLEAR, IWIDTH, IWIDTHTAB, IFONTSIZE } from '../../../utils/constant/number';
import { UserData } from '../../../actions';
import { BASICCOLORS } from '../../../utils/constant/color';

type PartialIWIDTH = Partial<IWIDTH>;
type PartialICLEAR = Partial<ICLEAR>;
type PartialIWIDTHTAB = Partial<IWIDTHTAB>;
type PartialIFONTSIZE = Partial<IFONTSIZE>;
interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE {
  data: UserData;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UserCard: React.FC<Props> = ({ data, clear, width, widthTab, fontSize }) => {
  const { facebook, twitter, instagram, youtube } = data;
  const urls = { facebook, twitter, instagram, youtube };

  return (
    <Card color={BASICCOLORS.WHITELIGHT} clear={clear}>
      <Container>
        <Image image={data.profileImage} width={width} widthTab={widthTab} />
        <LinkButton to={`/users/${data.id}`} fontSize={fontSize} color={BASICCOLORS.PRIMARY}>
          {data.name}
        </LinkButton>
        <SNS urls={urls} color={BASICCOLORS.SECONDARY} fontSize={fontSize} />
      </Container>
    </Card>
  );
};
export default UserCard;
