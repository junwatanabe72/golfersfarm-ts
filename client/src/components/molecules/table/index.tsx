import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';

interface Props extends PartialWidthSize {
  component: JSX.Element;
  title?: string;
}

const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: ${SIZE.LARGE}vw;  
      `}
`;

StyledTable.defaultProps = {
  width: SIZE.MEDIUM,
};

const Table: React.FC<Props> = ({ title, component, width }) => {
  return (
    <>
      {title && <div>{title}</div>}
      <StyledTable width={width}>
        <tbody>{component}</tbody>
      </StyledTable>
    </>
  );
};

export default Table;
