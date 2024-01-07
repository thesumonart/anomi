import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const HomeBanner = () => {
  return (
    <Hero>
      <TextBox>
        <h1>
          ANOMI nexus <span>creative agency</span>
        </h1>
        <p className="innerText">
          Turning visions into pixels, creating seamless websites, and boosting
          visibility—your digital success, our mission.{" "}
          <span>
            With a dedicated focus on innovation, we not only craft exceptional
            online experiences but also strategically position your brand for
            sustained growth in the digital realm.
          </span>
        </p>
        <Link className="link" to="about">
          <span>Discover More</span>
          <FaArrowRight />
        </Link>
      </TextBox>
      <Illustration>
        <img
          id="first_banner"
          src="/images/home_banner_one.svg"
          alt="illustration"
        />
        <img
          id="second_banner"
          src="/images/home_banner_two.svg"
          alt="illustration"
        />
      </Illustration>
    </Hero>
  );
};

export default HomeBanner;

const Hero = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;
  height: 85vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextBox = styled.section`
  flex-basis: 50%;
  h1 {
    font-size: 10rem;
    font-weight: 800;
    text-transform: uppercase;
    font-family: "Inter", sans-serif;
    color: #4169e1;
    span {
      display: block;
      font-size: 50%;
      font-weight: 400;
      color: #dc143c;
      margin-left: -0.5rem;
    }
    @media (max-width: 768px) {
      font-size: 5rem;
      span {
        margin-left: 0rem;
      }
    }
  }
  p {
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    margin: 2rem 0;
    text-align: justify;
    @media (max-width: 768px) {
      span {
        display: none;
      }
    }
  }
  a {
    font-size: 2rem;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    transition: all 0.25s ease-out;
    position: relative;
    svg {
      rotate: -45deg;
      position: absolute;
      top: 50%;
      right: -3rem;
      transform: translateY(-50%);
      transition: all 0.25s ease-out;
    }
    &:hover {
      svg {
        scale: 1.3;
      }
    }
  }
`;

const illustratoinWaveOne = keyframes`
  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translate(-5px ,-4px);
    
    
  }
  50%{
    transform: translate(-10px ,-8px);

  }
  75%{
    transform: translate(-10px ,12px);

    
  }
  100%{
    transform: translateY(0px);

  }

`;

const illustratoinWaveTwo = keyframes`
  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translate(5px ,4px);
    
  }
  50%{
    transform: translate(10px ,8px);

  }
  75%{
    transform: translate(-10px ,12px);
    
  }
  100%{
    transform: translateY(0px);

  }

`;

const Illustration = styled.section`
  position: relative;
  width: 50rem;
  height: 48rem;

  @media (max-width: 768px) {
    height: 35rem;
    width: 35rem;
    margin-top: 5rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 500px;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
      height: inherit;
      width: inherit;
    }
  }

  #first_banner {
    animation: 3s ${illustratoinWaveOne} linear infinite;
  }
  filter: drop-shadow(8px 8px 10px #c8c8c8);
  #second_banner {
    animation: 3s ${illustratoinWaveTwo} linear infinite;
  }
`;
