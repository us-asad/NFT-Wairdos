import styled, { keyframes } from 'styled-components'
import { CoverVideo, TypeWriterText } from "components";

const Section = styled.section`
  min-height: ${({theme}) => `calc(100vh - ${theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${({theme}) => theme.body};
`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const rotateAnimation = keyframes`
  100%{
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 50%;

  img{
    width: 100%;
    height: auto;
    animation: ${rotateAnimation} 6s linear infinite reverse ;
  }

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }

  @media (max-width: 48em) {
    right: 1rem;
  }
`

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  font-size:${({theme}) => theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size:${({theme}) => theme.fontlg};
  }
`

const Home = () => (
  <Section id="home">
    <Container>
      <Box>
        <TypeWriterText />
      </Box>
      <Box>
        <CoverVideo />
      </Box>
      <Round>
        <Circle>&#x2193;</Circle>
        <img
          width={500}
          height={400}
          src="/pngs/rounded-text-black.png"
          alt="NFT"
        />
      </Round>
    </Container>
  </Section>
);

export default Home;