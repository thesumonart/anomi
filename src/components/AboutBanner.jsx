import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutBanner = () => {
  return (
    <>
      <AboutBg>
        <TextBox className="container">
          <h1>Elevating Creativity,Transforming Visions</h1>
          <Link className="aboutBtn" to={"/contact"}>
            Collaborate Now
          </Link>
        </TextBox>
        <img src="./images/downArrow.gif" alt="Go Down" />
      </AboutBg>
    </>
  );
};

export default AboutBanner;
const AboutBg = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("./images/aboutbg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 85vh;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    bottom: -2%;
    border-radius: 50%;
  }
`;

const TextBox = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  h1 {
    color: #fff;
    font-size: 7rem;
    font-family: "Inter", sans-serif;
    span {
      display: block;
    }
  }
  .aboutBtn {
    display: inline-block;
    width: 25rem;
    text-align: center;
    text-decoration: none;
    background-color: #4169e1;
    color: #fff;
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    letter-spacing: 0.3rem;
  }
`;
