import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Button } from "components";

const Title = styled.h2`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: #000;
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1{
    color: blue;
  }

  .text-2{
    color: orange;
  }

  .text-3{
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${({theme}) => theme.fontxl};
  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }

  @media (max-width: 40em){
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${({theme}) => theme.fontlg};
  text-transform: capitalize;
  color: ${({theme}) => `rgba(0, 0, 0, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${({theme}) => theme.fontmd};
  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => (
  <>
    <Title>
      Discover a new era of cool
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">NFTs.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Collectible Items.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Ape Killers!</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
    <SubTitle>Bored Of Apes? Try Something New.</SubTitle>
    <ButtonContainer>
      <Button
        color="#fff"
        text="Explore"
        link="#about"
      />
    </ButtonContainer>
  </>
);

export default TypeWriterText;
