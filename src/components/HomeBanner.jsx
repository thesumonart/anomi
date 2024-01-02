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
          Sed consequatur repellat et harum saepe et odio nemo qui minima nemo
          est aspernatur quibusdam sit officiis blanditiis eaque voluptatem ea
          quia quaerat quatur.
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
  flex-basis: 60%;
  h1 {
    font-size: 10rem;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Big Shoulders Text", sans-serif;
    span {
      display: block;
    }
    @media (max-width: 768px) {
      font-size: 8rem;
    }
  }
  p {
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    margin: 2rem 0;
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
  width: 500px;
  height: 480px;

  @media (max-width: 768px) {
    height: 400px;
    width: 384px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 500px;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
      height: 400px;
      width: 400px;
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
