import { useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import styled from 'styled-components';

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #fff;

  font-size: ${({theme}) => theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition:all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }

  &:active{
    transform: scale(0.9);
  }
`;

export default function ScrollToTop() {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollToTop = () => {
    let element = document.getElementById("header");

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  useEffect(() => {
    ref.current.style.display = y > 200 ? "flex" : "none";
  }, [y]);

  return (
    <Up
      ref={ref} 
      onClick={() => scrollToTop()}
    >&#x2191;</Up>
  );
}
