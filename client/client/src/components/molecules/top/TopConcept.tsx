import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from "../../atoms/Button";
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import LastImage from "../../../utils/image/16782.jpg"
import { ROUTE } from "../../../utils/constant/route"
import { BASICCOLORS, COLORTYPES } from "../../../utils/constant/color";
import { FONTSIZE, IMAGEWIDTH, CLEAR } from "../../../utils/constant/number";
import { StyledSpan } from "../../../utils/styled/styledText";
import { Padding } from "../../../utils/styled/styledSpace";
import { media } from '../../../utils/styled/styledRdesign';

const Container = styled.div`
  
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const ResponseText = styled.div`
  ${media.tablet`
       margin-top: ${CLEAR.LARGE}px;
      `}
`;

const text: string[] = ["Golfersfarmはこれまでになかったゴルファーのためのアプリケーションです。",
                        "ゴルフの醍醐味は、スコアだけではありません。",
                        "Golfersfarmでは、ツアープロのようにあなたのクラブセッティングやスウィング動画などを登録できます。",
                        "あなたのこだわりや努力を全世界に向けて、公開しましょう！",
                        "Golfersfarmを始める",
]

const mainText = text.map((t: string, i: number) => {
  if (i === text.length-1) {
    return (
      <Padding bottom={CLEAR.MEDIUM}>
        <LinkButton to={ROUTE.LOGIN}>
          <Button color={BASICCOLORS.WHITELIGHT}>
            {t}
          </Button>
        </LinkButton>
      </Padding>
    )
  } else {
    return (
      <Padding bottom={CLEAR.XSMALL}>{t}</Padding>
    )
  }
}
)

const TopConcept: React.FC = () => {
  return (
    <>
        <Padding bottom={CLEAR.MEDIUM}>
          <StyledSpan color={BASICCOLORS.PRIMARY}>
            <Logo fontsize={FONTSIZE.XXLARGE}>
              ゴルフを、もっと楽しく
            </Logo>
          </StyledSpan>
        </Padding>
        <Layout>
          <FreePick image={LastImage} width={IMAGEWIDTH.MEDIUM} />
          <ResponseText>
            {mainText}
          </ResponseText>
        </Layout>
    </>
  )
}

export default TopConcept;