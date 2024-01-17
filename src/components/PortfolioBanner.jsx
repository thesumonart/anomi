import styled from "styled-components";

const PortfolioBanner = () => {
  return (
    <BannerWrapper>
      <div className="portfolio_video">
        <video
          autoplay="autoplay"
          muted
          loop="true"
          src="./videos/portfolio_bg_video.mp4"
        ></video>
      </div>
    </BannerWrapper>
  );
};

export default PortfolioBanner;
const BannerWrapper = styled.div`
  position: relative;
  .portfolio_video {
    position: relative;
    height: 50rem;
    width: 100vw;
    video {
      width: inherit;
      height: inherit;
      object-fit: cover;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: inherit;
      width: inherit;
      background: rgb(10, 10, 10);
      background: radial-gradient(
        circle,
        rgba(10, 10, 10, 0) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
    &::before {
      content: "GALLERY LIST";
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      z-index: 1;
      font-family: "Inter", sans-serif;
      font-weight: 700;
      letter-spacing: 0.5rem;
      color: #ffffff;
      font-size: 10rem;
    }
  }
`;
