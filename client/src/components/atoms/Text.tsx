import React from 'react';
import styled from 'styled-components';
import { CLEAR } from "../../utils/constant/number";
import { ITEXTTYPE } from "../../utils/constant/text/body/top/text";
import { Padding } from "../../utils/styled/styledSpace";

interface Props {
  text: ITEXTTYPE
};

const Container = styled.div`
  text-align: center;
`;

const Text: React.FC<Props>= ({text}) => {
  return (
    <Container>
      {
      text.map((t: string) => {
          return (
            <Padding bottom={CLEAR.TINY}>{t}</Padding>
          )
        })
      }
    </Container>
  )
}

export default Text;