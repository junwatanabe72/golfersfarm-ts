import React from 'react';
import styled from 'styled-components';
import TopTitle from "../molecules/top/TopTitle";
import TopConcept from "../molecules/top/TopConcept";
import TopUsage from "../molecules/top/TopUsage";
import { BASICCOLORS, ICOLOR} from "../../utils/constant/color";
import { CLEAR } from "../../utils/constant/number";
import { Padding } from "../../utils/styled/styledSpace";

type PartialICOLOR = Partial<ICOLOR>

const Container = styled.div`
`;

const Layout = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const BackColor = styled.div<PartialICOLOR>`
  background-color: ${(props)=> props.color};
`;
BackColor.defaultProps = {
  color: BASICCOLORS.WHITE
}

const Components: JSX.Element[] = [<TopTitle />, <TopUsage />, <TopConcept />] 

const data = Components.map((d: JSX.Element,i: number) => {
    if (i % 2 !== 0){
      return (
        <BackColor color={BASICCOLORS.WHITELIGHT}>
          <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
              <Layout>
                {d}
              </Layout>
          </Padding >
        </BackColor>
      )
    }else{
      return ( 
        <BackColor>
          <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
            <Layout>
              {d}
            </Layout>
          </Padding>
        </BackColor>
      )
    }
});

const Top: React.FC = () => {
  return (
      <>
        {data}
      </>
  )
}

export default Top;