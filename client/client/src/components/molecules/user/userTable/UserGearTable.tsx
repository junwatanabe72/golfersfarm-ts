import React from 'react';
import styled from 'styled-components';
import Table from "../../../atoms/Table";
import { WIDTH, IWIDTH } from "../../../../utils/constant/number";
import { BASICCOLORS, ICOLOR, COLORTYPES } from "../../../../utils/constant/color";
import { media } from '../../../../utils/styled/styledRdesign';

type PartialIWIDTH = Partial<IWIDTH>
interface Props extends PartialIWIDTH {

}

const datas = [
  {
    name: "名称",
    type: "タイプ",
    shaft: "シャフト名",
    flex: "フレックス",
    smaker: "シャフトメーカー",
    maker: "メーカー",
  },
  {
    name: "JBEAM",
    type: "1W",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "3W",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "5W",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: `3~P 
    IRON`,
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "AW",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "SW",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "Putter",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "ball",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "ball",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "ball",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
  {
    name: "JBEAM",
    type: "ball",
    shaft: "Tour-AD DI7",
    flex: "S",
    smaker: "GrafightDesign",
    maker: "MIZUNO",
  },
]


const Container = styled.div`
//  width: 30vw;
  background-color: ${BASICCOLORS.SECONDARY};
  ${media.tablet`
        width: 60vw;
      `}
`;

const UserGearTable: React.FC<Props> = ({ width }) => {

  return (
    <Container>
      <Table datas={datas} width={WIDTH.BASESMALL} />
    </Container>
  );
}

export default UserGearTable;