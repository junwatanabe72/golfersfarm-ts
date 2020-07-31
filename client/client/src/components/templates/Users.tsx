import React,{useState} from 'react';
import styled from 'styled-components';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import {  IMAGEWIDTH,CLEAR } from "../../utils/constant/number"
import { MgComponent} from "../../utils/styled/styledSpace";

const URL = "https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"
const userName ="jun"
const players = [{ id: 1, name: userName, image: URL }, { id: 2, name: userName, image: URL }, { id: 3, name: userName, image: URL }, { id: 4, name: userName, image: URL }]

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
`;
const Styled = styled.div`
  text-align: center;
`;


const Users: React.FC = () => {
  const [modalIsOpen, setModal] = useState<any>(players);
  
  const player = modalIsOpen.map((data: any, i: number) => {
      return (
        <MgComponent all={CLEAR.SMALL}>
          <Image image={data.image} width={IMAGEWIDTH.SMALL} />
          <Styled>
            <LinkButton to={`/users/${data.id}`}>
              {data.name}
            </LinkButton>
          </Styled>
        </MgComponent>
      );
    })
  
  return (
      <Container>
        {player}
      </Container>
  )
  
}
export default Users;
  