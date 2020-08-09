import React,{useState} from 'react';
import styled from 'styled-components';
import LinkButton from '../atoms/LinkButton';
import Image from '../atoms/Image';
import Layout from "../templates/Layout";
import { WIDTH,CLEAR } from "../../utils/constant/number"
import { Padding} from "../../utils/styled/styledSpace";
import { BASICCOLORS } from '../../utils/constant/color';

interface Props {
  login: boolean,
};

const URL = "https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"
const userName ="jun"
const players = [{ id: 1, name: userName, image: URL }, { id: 2, name: userName, image: URL }, { id: 3, name: userName, image: URL }, { id: 4, name: userName, image: URL }]

const Container = styled.div`
  display: flex;
  // min-height: 1000px;
  flex-wrap: wrap;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const Styled = styled.div`
  text-align: center;
`;


const Users: React.FC<Props>= ({login}) => {
  const [modalIsOpen, setModal] = useState<any>(players);
  
  const player = modalIsOpen.map((data: any, i: number) => {
      return (        
        <Padding all={CLEAR.TINY}>
          <Image image={data.image} width={WIDTH.TINY} />
          <Styled>
            <LinkButton to={`/users/${i}`} color={BASICCOLORS.PRIMARY}>
              {data.name}
            </LinkButton>
          </Styled>
        </Padding>
      );
    })
  
  return (
    <Layout login={login}>
      <Container>
      {player}
      </Container>
    </Layout>
  )
  
}
export default Users;
  