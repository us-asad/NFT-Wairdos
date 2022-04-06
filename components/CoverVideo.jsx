import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverVideo = () => (
  <VideoContainer>
    <img
      src="/video-gif/home-gif.gif"
      alt="NFT"
    />
  </VideoContainer>
);

export default CoverVideo;