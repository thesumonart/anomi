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
        <div className="container">
          <h2 className="galleray_heading">GALLERY LIST</h2>
        </div>
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
      position: fixed;
      left: 0;
      top: 10rem;
      bottom: 0;
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
  }
  h2.galleray_heading {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10rem;
    font-family: "Inter", sans-serif;
    color: #fff;
    z-index: 1;
  }
`;
