import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center; 
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight 600;
    cursor: pointer;
    border: ${props=>props.type === 'filled' && 'none'};
    background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props=>props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
${mobile({ display: 'none' })}
`;

const TopText = styled.span`
    text.decoration: underline;
    cursor:pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}

`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div` 
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
    flex: 1;
    display: flex:
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 2px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    
`;

const SummaryTitle = styled.h1`
    font-weight: 200;

`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'Total' && '500'};
    font-size: ${props=>props.type === 'Total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button= styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>DIN VARUKORG</Title>
            <Top>
                <TopButton>Fortsätt handla</TopButton>
                <TopTexts>
                    <TopText>Varukorg (2)</TopText>
                    <TopText>Önskelista (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>Till checkout</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://images.ctfassets.net/vx12w8gtks6f/24sfOj9jVxMnn25LeQgWq0/1fc54e74093b0ebfdfd42e89c1f86961/iPhone_14_Blue_PDP_Image_Position-1_CAEN.jpg' />
                            <Details>
                                <ProductName><b>Produkt:</b> Iphone 14</ProductName>
                                <ProductId><b>ID:</b> 65545255</ProductId>
                                <ProductColor color='lightblue'/>
                                <ProductSize><b>STORLEK:</b> 146 cm</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 14000 kr</ProductPrice>
                        

                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src='https://m.media-amazon.com/images/I/71sesDsw95L._AC_SL1500_.jpg' />
                            <Details>
                                <ProductName><b>Produkt:</b> Bärbara dator: Acer Aspire</ProductName>
                                <ProductId><b>ID:</b> 6569841</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>STORLEK:</b> 8 GB</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 8000 kr</ProductPrice>
                        

                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Beställning översikt</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Delsumma</SummaryItemText>
                        <SummaryItemPrice>$ 22000 kr</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Beräknad Frakt</SummaryItemText>
                        <SummaryItemPrice>$ 100 kr</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Fraktrabatt</SummaryItemText>
                        <SummaryItemPrice>$ -100 kr</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total kostnad</SummaryItemText>
                        <SummaryItemPrice>$ 22000 kr</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NU</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart