import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from "../../atoms/Button";
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import TopImage from "../../../utils/image/6114.jpg"
import { ROUTE } from "../../../utils/constant/route"
import { BASICCOLORS } from "../../../utils/constant/color";
import { FONTSIZE,IMAGEWIDTH,CLEAR } from "../../../utils/constant/number";
import { StyledSpan } from "../../../utils/styled/styledText";
import { Padding } from "../../../utils/styled/styledSpace";
import { media } from '../../../utils/styled/styledRdesign';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedWidth = styled.div`
  width: 70%;
`;

const text: string[] = ["あなたのゴルフライフを公開しよう！",
                        "Golfersfarmはゴルファーのためのプロフィール公開ツールです。",
                        "「無料」で使えて、操作も簡単です。",
                        "さあ、今すぐ登録をしよう！Enjoy your Golf life!!",
                        "今すぐ無料登録する",
                        ]

const mainText = text.map((t: string,i: number) =>{
  if(i===0){
    return (
      <Padding bottom={CLEAR.MEDIUM}>
        <Logo fontsize={FONTSIZE.XXXLARGE} >
        <StyledSpan color={BASICCOLORS.PRIMARY}>
            {t}
        </StyledSpan>
        </Logo>
      </Padding>
    )
  }else if(i===text.length-1){
    return (
      <Padding bottom={CLEAR.MEDIUM}>
        <LinkButton to={ROUTE.LOGIN}>
          <Button color={BASICCOLORS.WHITELIGHT}>
            {t}
          </Button>
        </LinkButton>
      </Padding>
    )
  }else{
    return (
      <Padding bottom={CLEAR.SMALL}>{t}</Padding>
    )
  }
  }
)


const TopTitle: React.FC = () => {
  return (
      <Container>
        <FixedWidth>
          {mainText}
        </FixedWidth>
        <FreePick image={TopImage} width={IMAGEWIDTH.MEDIUM}/>
      </Container>
  )
}

export default TopTitle;