import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom'
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import { ROUTE, routeType } from "../../utils/constant/route"
import { defaultColors, colorType } from "../../utils/constant/color"
import { defaultSize } from "../../utils/constant/number"

interface Props extends RouteComponentProps < {id: string} >{};

const User: React.FC<Props> = ({match}) => {
  return (
    <div className="App">
      <Logo fontsize={defaultSize.FONT.XXXLARGE}>UPage</Logo>
      <Input />
      <TextArea
        placeHolder="sample"
        value={match.params.id}
        onChange={() => {
          window.alert('Hello world!');
        }}
      />
      <LinkButton to={ROUTE.TOP} color={defaultColors.BASICCOLORS.primary}>
        {match.params.id}
      </LinkButton>
    </div>
  )
}

export default User;