import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    background: rgb(14,11,20);
    background: radial-gradient(circle, rgba(253,253,253,1) 3%, rgba(40,224,100,1) 28%, rgba(112,38,177,1) 74%);
    height: 70px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex:1;
    display: flex; 
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style= {{color:'gray', fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Pelins El.</Logo></Center>
            <Right>

                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default navbar