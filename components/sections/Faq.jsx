import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// jsconfig.json bug solved
import ScrollTrigger from 'node_modules/gsap/ScrollTrigger';
import styled from 'styled-components';
import { Accordion } from 'components';
import { faqs } from "constants";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: #202020;
  position: relative;
  color: #fff;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: uppercase;
  color: #fff;
  
  margin: 1rem auto;
  border-bottom: 2px solid ${({theme}) => theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
    font-size: ${({theme}) => theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em){
    width: 80%;
  }

  @media (max-width: 48em){
    width: 90%;
    flex-direction: column;

    &>*:last-child{
      &>*:first-child{
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em){
    width: 90%;
    align-self: center;
  }
`;

export default function Faq() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start:'bottom bottom',
      end:'bottom top',
      pin:true,   
      pinSpacing:false, 
      scrub:1,
    })

    return () => {
      if (typeof ScrollTrigger?.kill === "function") ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          {faqs?.slice(0,3).map((faq, index) => (
            <Accordion
              key={`faqs_part1_item${index}`}
              ScrollTrigger={ScrollTrigger}
              title={faq.question}
            >{faq.answear}</Accordion>
          ))}
        </Box>
        <Box>
          {faqs?.slice(3).map((faq, index) => (
            <Accordion
              key={`faqs_part2_item${index}`}
              ScrollTrigger={ScrollTrigger}
              title={faq.question}
            >{faq.answear}</Accordion>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
