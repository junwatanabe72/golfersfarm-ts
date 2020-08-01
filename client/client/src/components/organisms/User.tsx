import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import { ROUTE, ROUTETYPE } from "../../utils/constant/route"
import { BASICCOLORS, COLORTYPES } from "../../utils/constant/color"
import { FONTSIZE } from "../../utils/constant/number"

interface Props extends RouteComponentProps < {id: string} >{};

const User: React.FC<Props> = ({match}) => {
  return (
    <div className="App">
      <Logo fontSize={FONTSIZE.XXXLARGE}>UPage</Logo>
      <Input />
      <TextArea
        placeHolder="sample"
        value={match.params.id}
        onChange={() => {
          window.alert('Hello world!');
        }}
      />
      <LinkButton to={ROUTE.TOP} color={BASICCOLORS.PRIMARY}>
        {match.params.id}
      </LinkButton>
    </div>
  )
}

export default User;