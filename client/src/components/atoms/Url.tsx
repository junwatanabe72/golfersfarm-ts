import React from 'react';
import styled from 'styled-components';

interface Props {
  to?: string;
}
const StyledDisplay = styled.div<{ to: Props['to'] }>`
  cursor: pointer;
  ${(props) => checkedDisplay(props.to)};
`;

const checkedDisplay = (props: Props['to']) => {
  if (props === '') {
    return `
      display: none;
      `;
  }
};

const Url: React.FC<Props> = ({ to, children }) => {
  return (
    <StyledDisplay to={to}>
      <a href={to}>{children}</a>
    </StyledDisplay>
  );
};

export default Url;

// interface Props {
//   to: string,
// }
// const StyledLink = styled(Link) <{ to: Props["to"] }>`
//   cursor: pointer;
//   ${(props) => checkedDisplay(props.to)};
// `;

// const checkedDisplay = (props: Props["to"]) => {
//   if (props === "") {
//     return `
//       display: none;
//       `
//   }
// }

// const Url: React.FC<Props> = ({ to, children }) => {
//   return (
//     <StyledLink to={to} target="_blank">{children}</StyledLink>
//   );
// }

// export default Url;
