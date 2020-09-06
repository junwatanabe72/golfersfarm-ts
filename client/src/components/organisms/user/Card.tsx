import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import Image from '../../atoms/Image';
import Card from '../../molecules/Card';
import SNS from '../../molecules/SNSIcons';

interface Props extends PartialICLEAR, PartialIWIDTH, PartialIWIDTHTAB, PartialIFONTSIZE {
  data: PartialUserObjectType;
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
    <Card clear={clear}>
      <Container>
        <Image image={data.profileImage} width={width} widthTab={widthTab} />
        <LinkButton to={`/users/${data.id}`} fontSize={fontSize}>
          {data.name}
        </LinkButton>
        <SNS urls={urls} fontSize={fontSize} />
      </Container>
    </Card>
  );
};
export default UserCard;
