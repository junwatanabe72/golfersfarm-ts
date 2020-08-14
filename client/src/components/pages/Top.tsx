import React from 'react';
import styled from 'styled-components';
import TopTitle from "../organisms/top/TopTitle";
import TopConcept from "../organisms/top/TopConcept";
import Layout from "../templates/Layout";
import TopUsage from "../organisms/top/TopUsage";
import { BASICCOLORS, ICOLOR} from "../../utils/constant/color";
import { CLEAR,WIDTH } from "../../utils/constant/number";
import { Padding } from "../../utils/styled/styledSpace";

type PartialICOLOR = Partial<ICOLOR>

interface Props  {
  currentUser: any,
};

const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

BackColor.defaultProps = {
  color: BASICCOLORS.WHITE
}

const components: JSX.Element[] = [<TopTitle />, <TopUsage />, <TopConcept />] 

const contents = components.map((d: JSX.Element,i: number) => {
    if (i % 2 !== 0){
      return (
        <BackColor color={BASICCOLORS.WHITELIGHT}>
          <Padding top={CLEAR.XSMALL} bottom={CLEAR.XSMALL}>
              <Container>
                {d}
              </Container>
          </Padding >
        </BackColor>
      )
    }else{
      return ( 
        <BackColor >
          <Padding top={CLEAR.XSMALL} bottom={CLEAR.XSMALL}>
            <Container>
              {d}
            </Container>
          </Padding>
        </BackColor>
      )
    }
});

const Top: React.FC<Props>= ({currentUser}) => {
  return (
    <Layout currentUser={currentUser}>
      {contents}
    </Layout>
  )
}

export default Top;