import { useState } from "react";
import styled from "styled-components"
import { login } from "../redux/callsApi";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100wh;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.3), 
        rgba(255,255,255,0.3)),
        url('https://wallpaperset.com/w/full/7/5/a/545589.jpg') 
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color:red;
`


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state) => state.user);
    const handleClick = (e) =>{
        e.preventDefault();
        login(dispatch, {username, password});
    }
  return (
    <Container>
        <Wrapper>
            <Title>LOGGA IN</Title>
            <Form>
                <Input placeholder='användarnamn'  onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder='lösenord' type='password' onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>Logga In</Button>
                {error && <Error>Något blev fel!...</Error>}
                <Link>Kommer ej ihåg lösenord?</Link>
                <Link>SKAPA NY KONTO </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login