import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #64cdee;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Fri frakt vid beställningar över 1000 kr
        <p>Köp två betala för tre!</p>
    </Container>
  )
}

export default Announcement

