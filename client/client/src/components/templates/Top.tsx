import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import { ROUTE, ROUTETYPE } from "../../utils/constant/route"
import { BASICCOLORS,COLORTYPES } from "../../utils/constant/color"
import { FONTSIZE } from "../../utils/constant/number"


const Top: React.FC = () => {
  return (
    <div className="App">
      <Logo fontsize={FONTSIZE.XXXLARGE}>TOPsPage</Logo>
      <Input />
      <TextArea
        placeHolder="sample"
        value="value"
        onChange={() => {
          window.alert('Hello world!');
        }}
      />
      <LinkButton to={ROUTE.USERS} color={BASICCOLORS.PRIMARY}>
        indexへ
      </LinkButton>
    </div>
  )
}

export default Top;