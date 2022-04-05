import {useState} from 'react'
import styled from 'styled-components'
import { Button, Logo } from "components";

const navItems = [
  {
    name: "Home",
    url: "#home"
  },
    {
    name: "About",
    url: "#about"
  },
    {
    name: "Roadmap",
    url: "#roadmap"
  },
    {
    name: "Showcase",
    url: "#showcase"
  },
    {
    name: "Team",
    url: "#team"
  },
    {
    name: "Faq",
    url: "#faq"
  }
];

const Section = styled.section`
  width: 100vw;
  background-color: ${({theme}) => theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${({theme}) => theme.navHeight};
  margin: 0 auto;

  .mobile{
    display: none;
  }

  @media (max-width: 64em) {
    .desktop{
      display: none;
    }

    .mobile{
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style:none;

  @media (max-width: 64em) {
    position: fixed;
    top: ${({theme}) => theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${({theme}) => `calc(100vh - $ theme.navHeight})`};
    z-index:50;
    background-color: ${({theme}) => `rgba($ theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${({click}) => click ? 'translateY(0)' : `translateY(1000%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${({theme}) => theme.text};
  cursor: pointer;

  &::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${({theme}) => theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after{
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after{
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width:  ${({click}) => click ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${({theme}) => theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${({click}) => click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'  };
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  &::after, &::before{
    content: ' ';
    width:  ${({click}) => click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${({click}) => click ? '-2px' : '0'};
    background: ${({theme}) => theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after{
    top: ${({click}) => click ? '0.3rem' : '0.5rem'};
    transform: ${({click}) => click ? 'rotate(-40deg)' : 'rotate(0)'  };
  }

  &::before{
    bottom: ${({click}) => click ? '0.3rem' : '0.5rem'};
    transform: ${({click}) => click ? 'rotate(40deg)' : 'rotate(0)'  };
  }
`;

export default function Header() {
  const [click, setClick] = useState(false);
  
  const scrollTo = id => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setClick(!click);
  }

  return (
    <Section id="navbar">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click}  onClick={() => setClick(!click)}>&nbsp;</HamburgerMenu>
        <Menu click={click}>
          {navItems.map(({name, url}) => <MenuItem key={url} onClick={() => scrollTo(url)}>{name}</MenuItem>)}
          <MenuItem>
            <div className="mobile">
              <Button text="Connect Wallet" link="https://google.com" />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button text="Connect Wallet" link="https://google.com" />
        </div>
      </NavBar>
    </Section>
  );
}
