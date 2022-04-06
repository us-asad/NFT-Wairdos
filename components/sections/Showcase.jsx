import { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { nftItems } from "constants";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &>*:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }

  &>*:last-child {
    animation-duration: 15s;

    @media (max-width: 30em){
      animation-duration: 10s;
    }
  }
`;

const moveAnimation = keyframes`
  0%{
    transform: translateX(100%);
  }

  100%{
    transform: translateX(-100%);
  }
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing:content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${moveAnimation}  linear infinite ${({direction}) => direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: #202020;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${({theme}) => theme.fontsm};
    color: rgba(255, 255, 255, 0.5);
    font-weight:600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${({theme}) => theme.fontmd};
    color: #fff;
    font-weight:600;

    @media (max-width: 30em){
      font-size: ${({theme}) => theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

function NftItem({ image, number = 0, price = 0, passRef }) {
  const play = () => passRef.current.style.animationPlayState = 'running';
  const pause = () => passRef.current.style.animationPlayState = 'paused';

  return (
    <ImgContainer
      onMouseOver={pause}
      onMouseOut={play}
    >
      <img
        width={500}
        height={400}
        src={image}
        alt="The Weirdos"
      />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img
              width={200}
              height={200}
              src="/pngs/ethereum.png"
              alt="ETH"
            />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
} 

export default function Showcase() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  return(
    <Section id="showcase">
    <Row direction="none" ref={row1Ref}>
      {nftItems?.slice(0,5).map((item, index) => (
        <NftItem
          key={`nft_items_part1_item${index}`}
          passRef={row1Ref}
          {...item}
        />
      ))}
    </Row>
    <Row direction="reverse" ref={row2Ref}>
      {nftItems?.slice(5).map((item, index) => (
        <NftItem
          key={`nft_items_part2_item${index}`}
          passRef={row2Ref}
          {...item}
        />
      ))}
    </Row>
    </Section>
  );
}