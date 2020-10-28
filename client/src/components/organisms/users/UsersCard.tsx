import React from 'react';
import styled from 'styled-components';
import ProfileTable from '../user/table/profile';
import LinkButton from '../../atoms/LinkButton';
import Image from '../../atoms/Image';
import Card from '../../molecules/Card';
import SNS from '../../molecules/SNSIcons';
import { CLEAR, SIZE } from '../../../utils/constant/number';
import { Padding, JUSTIFYCONTENT, ALIGNITEMS } from '../../../utils/styled/styledSpace';
import Table from '../../molecules/table';
import { profileUsersItems } from '../../../utils/constant/text/table';
import Logo from '../../atoms/Logo';
import { BASICCOLORS } from '../../../utils/constant/color';

interface Props {
  data: PartialUserType;
}

const Flex = styled.div`
  display: flex;
  justify-content: ${JUSTIFYCONTENT.CENTER};
  align-items: ${ALIGNITEMS.CENTER};
`;
const Cent = styled.div`
  display: flex;
  justify-content: ${JUSTIFYCONTENT.BETWEEN};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${JUSTIFYCONTENT.AROUND};
  align-items: ${ALIGNITEMS.CENTER};
`;

const UsersCard: React.FC<Props> = ({ data }) => {
  const { id, name, facebook, twitter, instagram, youtube, profileImage } = data;
  const urls = { facebook, twitter, youtube, instagram };
  return (
    <Card clear={CLEAR.TINY}>
      <Cent>
        <LinkButton to={`/users/${id}`} display={'block'}>
          <Logo>{name}</Logo>
        </LinkButton>
        <SNS urls={urls} />
      </Cent>
      <Flex>
        <LinkButton to={`/users/${id}`}>
          <Image image={profileImage} width={SIZE.XXXSMALL} widthTab={SIZE.SMALL} />
        </LinkButton>
        <Container>
          <Padding top={CLEAR.TINY}>
            <LinkButton to={`/users/${id}`} color={BASICCOLORS.BASIC}>
              <Padding all={CLEAR.TINY}>
                <Table
                  component={
                    <ProfileTable data={data} tableItems={profileUsersItems} hover={'none'} />
                  }
                  width={SIZE.XSMALL}
                  widthTab={SIZE.SMALL}
                />
              </Padding>
            </LinkButton>
          </Padding>
        </Container>
      </Flex>
    </Card>
  );
};
export default UsersCard;
