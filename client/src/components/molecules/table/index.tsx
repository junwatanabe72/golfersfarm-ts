import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import { TABLETYPES } from '../../../utils/constant/text/table';
import VerticalTable from './VerticalTable';
import HorizontalTable from './HorizontalTable';
import { PartialIWIDTH } from '../../../@type/utils/numer';
import { ITABLETYPES } from '../../../@type/components/table';

interface Props extends PartialIWIDTH, ITABLETYPES {
  datas: PartialUserObjectType | PartialClubTableTypes | PartialResultTableTypes;
  tableItems: profileTableItemsType | gearTableItemsType | resultTableItemsType;
}

const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  border: solid 1px #ccc;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: 60vw;  
      `}
`;

StyledTable.defaultProps = {
  width: SIZE.MEDIUM,
};

const Table: React.FC<Props> = ({ datas, width, type, tableItems }) => {
  return (
    <>
      {type === TABLETYPES.HORIZONTAL ? (
        <HorizontalTable datas={datas} width={width} tableItems={tableItems} />
      ) : (
        <VerticalTable datas={datas} width={width} tableItems={tableItems} />
      )}
    </>
  );
};

export default Table;
