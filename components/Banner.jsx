import styled from 'styled-components'

const Banner = styled.div`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid #202020;
  background-color: #202020e6;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: ${({theme}) => theme.fontxxxl};
  color: #fff;
  padding: 1rem 2rem;
  z-index:10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px #fff;

  @media (max-width: 64em) {
    font-size: ${({theme}) => theme.fontxxl};
    text-align: center;
    width: 40%;
  }

  @media (max-width: 48em) {
    font-size: ${({theme}) => theme.fontxl};
    padding: 2rem 0;
    width: 100%;
  }
`;

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const JoiNow = styled.button`
  display: inline-block;
  background-color: #000;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${({theme}) => theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover{
    transform: scale(0.9);
  }

  &::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #000;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }

  @media (max-width: 48em){
    padding: 1rem 2rem;
  }

  @media (max-width: 30em){
    padding: 0.5rem 2rem;
    font-size: ${({theme}) => theme.fontsm};
  }
`;

const BannerComponent = () => (
  <Banner id="footer">
    <ImgContainer>
      {[...Array(6)].map((_,index) => (
        <img
          key={`banner_image${index}`}
          width={500}
          height={400}
          src={`/nfts/bighead-${index + 1}.svg`}
          alt="The Weirdos"
        />
      ))}
    </ImgContainer>
    <Title>Join the  <br /> weirdos club</Title>
    <BtnContainer>
      <JoiNow>
        Join Now
      </JoiNow>
    </BtnContainer>
  </Banner>
);;

export default BannerComponent;