import styled from 'styled-components';
import { Logo, Banner } from 'components';
import { navItems, socialMedias } from "constants";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: relative;
  color: #000;

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #000;

  @media (max-width: 48em) {
    width: 90%;

    h1{
      font-size: ${({theme}) => theme.fontxxxl};
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  &>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style:none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: #000;
    transition: width .3s ease;
  }

  &:hover::after{
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration:underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

export default function Footer() {
  const scrollTo = id => {
    let element = document.getElementById(id);
  
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  
  return (
    <Section>
      <Banner />
      <Container>
        <Left> 
          <Logo />
          <IconList>
            {socialMedias?.map(({url, image}) => (
              <a 
                key={url}
                href={url}
                target='_blank' 
                rel="noopener noreferrer"
                aria-label='facebook'
              >
                <img src={image} alt={url} />
              </a>
            ))}
          </IconList>
        </Left>
        <MenuItems>
          {navItems?.map(({name, url}) => <Item key={url} onClick={() => scrollTo(url)}>{name}</Item>)}
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by &nbsp;
          <a
            href="https://www.us-asad.tk"
            target="_blank" 
            rel="noreferrer"
          >
            Asad Us..
          </a>
        </span>
      </Bottom>
    </Section>
  );
}
