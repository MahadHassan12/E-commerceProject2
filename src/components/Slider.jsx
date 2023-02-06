import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;
const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 90%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`
const  Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src='https://www.hp.com/se-sv/shop/Html/Merch/Images/c08262515_1750x1285.jpg?imwidth=750' />
                </ImgContainer>
                <InfoContainer>
                    <Title>Vinter deals!!</Title>
                    <Desc>Stationära Datorer 20% rabatt</Desc>
                    <Button>KÖP NU</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction='right'>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
