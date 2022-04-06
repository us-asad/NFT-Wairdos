import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Plus, Minus } from 'icons';

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme}) => theme.carouselColor};
  margin: 3rem 0;

  @media (max-width: 48em){
    margin: 2rem 0;
  }
`;

const Title = styled.div`
  font-size: ${({theme}) => theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div`
  display: ${({clicked}) => clicked ? 'inline-block' : 'none'};
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${({theme}) => theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  font-size: ${({theme}) => theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    width: 1rem;
    height: auto;
    fill: ${({theme}) => theme.carouselColor};
  }

  @media (max-width: 48em){
    font-size: ${({theme}) => theme.fontxl};
  }
`;

export default function Accordion({title, children, ScrollTrigger}) {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
      ScrollTrigger.refresh()
  }, [collapse]);
    
  return (
    <Container>
      <Title onClick={() => setCollapse(prevState => !prevState)}>
        <Name>
          <span>{title}</span>
        </Name>
        <Indicator>
          {collapse ? <Minus /> : <Plus />}
        </Indicator>
      </Title>
      <Reveal clicked={collapse}>
        {children}
      </Reveal>
    </Container>
  );
}
