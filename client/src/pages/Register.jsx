import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100wh;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.3), 
        rgba(255,255,255,0.3)),
        url('https://static.vecteezy.com/system/resources/previews/001/984/861/original/abstract-blue-geometric-circles-overlapping-background-with-light-blue-free-vector.jpg') 
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
        font-size: 24:px;
        font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px 
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SKAPA KONTO</Title>
            <Form>
                <Input placeholder='förnamn'/>
                <Input placeholder='efternamn'/>
                <Input placeholder='användarnamn'/>
                <Input placeholder='email'/>
                <Input placeholder='lösenord'/>
                <Input placeholder='konfirmera lösenord'/>
                <Agreement>Genom att skapa konto, jag godkänner bearbetning av min personliga
                    information i enlighet med <b>SEKRETESSPOLICY</b>
                </Agreement>
                <Button>SKAPA</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register