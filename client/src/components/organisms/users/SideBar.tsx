import React from 'react';
import styled from 'styled-components';
import Card from '../../molecules/Card';
import Logo from '../../atoms/Logo';
import ComponentFontAwesomeIcon from '../../atoms/FontAwesomeIcon';
import Input from '../../atoms/Input';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTAWEICON } from '../../../utils/constant/text/fontAweicon';

interface Props {
  onClick: (e: string) => void;
  onChangeSearchName: (e: React.ChangeEvent<any>) => void;
  onChangeSearchCourse: (e: React.ChangeEvent<any>) => void;
  searchCourse: string;
  searchName: string;
}

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 110px;
  ${media.tablet`
    display: block;
    width: ${SIZE.LARGE}vw; 
    position: static;
    top: 0px;
      `}
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
     flex-direction: row; 
     justify-content: ${JUSTIFYCONTENT.AROUND}; 
      `}
`;
const Flex = styled.div`
  display: flex;
`;

const SortDiv = styled.div`
  cursor: pointer;
  color: ${BASICCOLORS.BASIC};
  text-align: end;
  &:hover {
    color: ${BASICCOLORS.SECONDARY};
  }
  ${media.tablet`
        text-align: center;
      `}
`;

const items = ['hcap', 'bestScore', 'averageDistance'];
const itemsText = ['HDCP', 'ベストスコア', '平均飛距離'];
const SideBar: React.FC<Props> = ({
  onChangeSearchName,
  onChangeSearchCourse,
  searchName,
  searchCourse,
  onClick,
}) => {
  const search = {
    name: {
      placeHolder: 'ホームコース名で検索',
      value: searchCourse,
      onChange: onChangeSearchCourse,
    },
    homeCourse: {
      placeHolder: 'ユーザー名で検索',
      value: searchName,
      onChange: onChangeSearchName,
    },
  };

  return (
    <Container>
      <Card textAlign={ALIGNITEMS.CENTER}>
        <Layout>
          <Flex>
            <Logo color={BASICCOLORS.BASIC} textAlign={ALIGNITEMS.START}>
              ユーザーを並び替える
            </Logo>
            <ComponentFontAwesomeIcon
              color={BASICCOLORS.BASIC}
              head={FONTAWEICON.sort.head}
              tail={FONTAWEICON.sort.tail}
            />
          </Flex>
          <Padding top={CLEAR.TINY} />
          <Column>
            {items.map((item, num) => {
              const click = () => {
                onClick(item);
              };
              return (
                <Padding key={num} bottom={CLEAR.TINY}>
                  <SortDiv onClick={click}>{itemsText[num]}</SortDiv>
                </Padding>
              );
            })}
          </Column>
          <Flex>
            <Logo color={BASICCOLORS.BASIC} textAlign={ALIGNITEMS.START}>
              ユーザーを検索する
            </Logo>
            <ComponentFontAwesomeIcon
              color={BASICCOLORS.BASIC}
              head={FONTAWEICON.search.head}
              tail={FONTAWEICON.search.tail}
            />
          </Flex>
          <Padding top={CLEAR.TINY} />
          {Object.values(search).map((item) => {
            return (
              <>
                <Input
                  type={'text'}
                  placeHolder={item.placeHolder}
                  value={item.value}
                  onChange={item.onChange}
                />
                <Padding all={CLEAR.TINY} />
              </>
            );
          })}
        </Layout>
      </Card>
    </Container>
  );
};

export default SideBar;
