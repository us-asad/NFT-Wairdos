import { useEffect, useRef } from 'react'
import gsap from 'gsap';
// jsconfig.json bug solved
import ScrollTrigger from 'node_modules/gsap/ScrollTrigger';
import styled, { keyframes } from 'styled-components'
import { Vector } from 'icons'; 

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const bounceAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(0.5);
  }
  to {
    transform: translateX(-50%) scale(1);
  }
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #000;
  animation: ${bounceAnimation} 0.5s linear infinite alternate;

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

export default function DrawSvg()  {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let element = ref.current;
    let svg = document.querySelector(".svg-path");
    const length = svg.getTotalLength(); 
    
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger:{
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: ({progress}) => {
          const draw = length * progress;
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: ({isActive}) => {
          ballRef.current.style.display = isActive ? 'none' : 'inline-block';
        }
      }
    })

    return () => {
      if(t1) t1.kill();
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef}/>
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  )
}
