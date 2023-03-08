import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`   
    display: flex; 
    ${mobile({ flexDirection: 'column' })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex; 
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Pelins El.</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut id nunc sed erat eleifend finibus. 
                Suspendisse non elementum magna. Donec suscipit tellus diam, 
                a ornare massa sagittis sit amet.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <LinkedIn />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Användbara länkar</Title>
            <List>
                <ListItem>Start sida</ListItem>
                <ListItem>Varukorg</ListItem>
                <ListItem>Hem elektronik</ListItem>
                <ListItem>Mitt Konto</ListItem>
                <ListItem>Villkor</ListItem>
                <ListItem>Önskelista</ListItem>
                <ListItem>Spåra beställning</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Kontakt information</Title>
            <ContactItem>
                <Room style={{marginRight:'10px'}}/>  Röda vägen 3, 781 70 Borlänge
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'10px'}}/> +46745896
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:'10px'}}/> pelinsEl@hotmail.com
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer