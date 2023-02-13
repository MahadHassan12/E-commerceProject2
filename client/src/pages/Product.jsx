import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    display: flex;
    align-items: center; 
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;

`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
const  AmountContainer= styled.div`
    display:flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;



const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src ='https://www.komplett.se/img/p/1153/1216520_1.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Acer Aspire</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam id arcu quis magna porttitor venenatis feugiat eget nulla. 
                Donec sit amet turpis magna.Donec vestibulum, nibh non tincidunt ultricies,
                 urna augue euismod tortor,eget vehicula ex neque ac eros. Cras id justo lectus.
                 Mauris pellentesque risus a maximus congue.
                </Desc>
                <Price>10000 kr</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Färg</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='gray'/>
                    </Filter>
                    <Filter>

                        <FilterTitle>Storlek</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Liten</FilterSizeOption>
                            <FilterSizeOption>Mellan</FilterSizeOption>
                            <FilterSizeOption>Stor</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Lägg till i varukrog</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product