import React from 'react';
import styled from 'styled-components';
import Table from "../../../atoms/Table";
import { WIDTH, IWIDTH } from "../../../../utils/constant/number"

type PartialIWIDTH = Partial<IWIDTH>
interface Props extends PartialIWIDTH{

}

const datas = [
  {
    arg: "ベストスコア", 
    value: "69",
  }, 
  {
    arg: "飛距離",
    value: "250",
  },
  {
    arg: "所属コース",
    value: "姉ヶ崎CC",
  }
]


const Container = styled.div`
`;


const UserMainTable: React.FC<Props> = ({width}) => {
  
  return (
    <Container>
      <Table datas={datas} width={WIDTH.XSMALL} />
    </Container>
  );
}

export default UserMainTable;