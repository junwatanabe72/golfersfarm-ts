import React from 'react';
import styled from 'styled-components';
import Table from "../../atoms/Table";
import { media } from '../../../utils/styled/styledRdesign';
import { WIDTH, IWIDTH } from "../../../utils/constant/number"
import { Padding } from "../../../utils/styled/styledSpace";
import { BASICCOLORS } from "../../../utils/constant/color"
type PartialIWIDTH = Partial<IWIDTH>
interface Props extends PartialIWIDTH {

}

const datas = [
  {
    year: "年",
    com: "競技",
    rank: "順位",
  },
  {
    year: "2013年11月",
    com: "ゴルフネットワーク選手権RomaroCUP",
    rank: "21位", 
  },
  {
    year: "2007年4月",
    com: "関東大学春季Dブロック対抗戦",
    rank: "団体４位",
  },
  {
    year: "2007年８月",
    com: "関東大学春季Dブロック対抗戦",
    rank: "団体1位", 
  },
  {
    year: "2006年8月",
    com: "関東大学春季Cブロック対抗戦",
    rank: "団体8位",
  },
  
]


const BackColor = styled.div`
  background-color: ${BASICCOLORS.SECONDARY};
`;


const Container = styled.div`
  // display: flex;
  // width: 55vw;
  // background-color: ${BASICCOLORS.BASICLIGHT};
  // ${media.tablet`
  //       flex-direction: column;
  //       align-items: center;
  //     `}
`;

const UserResult: React.FC<Props> = ({width}) => {
  // console.log(vwWidth)
  return (
    <Container>
      <Table datas={datas} width={width} />
    </Container>


  );
}

export default UserResult;