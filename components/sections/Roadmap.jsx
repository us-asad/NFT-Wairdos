import { useEffect, useRef } from "react";
import gsap from "gsap";
// jsconfig.json bug solved
import ScrollTrigger from 'node_modules/gsap/ScrollTrigger';
import styled from "styled-components";
import { DrawSvg } from "components";
import { roadmapItems } from "constants";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: relative;
  display: inline-block;
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
  width: 70%;
  height: 200vh;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
  
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid #000;

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: #eeedde;
  color: #000;
  padding: 1rem;
  position: relative;
  border: 1px solid #000;
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${({theme}) => theme.fontxl};
  text-transform: capitalize;
  color: #000;

  @media (max-width: 40em) {
    font-size: ${({theme}) => theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${({theme}) => theme.fontsm};
  text-transform: capitalize;
  color: #000;
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${({theme}) => theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subtext, addToRef }) => (
  <Item ref={addToRef}>
    <ItemContainer>
      <Box>
        <SubTitle>{title} </SubTitle>
        <Text>{subtext}</Text>
      </Box>
    </ItemContainer>
  </Item>
);

export default function Roadmap() {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          {roadmapItems?.map((item, index) => (
            <RoadMapItem
              key={`roadmap_item${index}`}
              addToRef={addToRefs}
              {...item}
            />
          ))}
        </Items>
      </Container>
    </Section>
  );
};
