import styled from 'styled-components';
import { Confetti } from 'components';
import { members } from "constants";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: capitalize;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #000;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${({theme}) => theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: #000;
  margin: 2rem 1rem;
  position: relative;
  z-index:5;
  backdrop-filter: blur(4px);
  border: 2px solid #000;
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${({theme}) => theme.carouselColor};
  border: 1px solid #000;
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${({theme}) => theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #000;
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${({theme}) => theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: #202020e6;
  font-weight:400;
`;

const MemberComponent = ({image, name = "", position = ""}) => (
  <Item>
    <ImageContainer>
      <img
        width={500}
        height={400}
        src={image}
        alt="member pic"
      />
    </ImageContainer>
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Item>
);

const Team = () => (
  <Section id="team">
    <Confetti />
    <Title>Team</Title>
    <Container>
      {members?.map((member, index) => (
        <MemberComponent
          key={`member${index}`}
          {...member}
        />
      ))}
    </Container>
  </Section>
);

export default Team;