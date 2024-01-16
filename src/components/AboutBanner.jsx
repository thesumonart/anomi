import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutBanner = () => {
  return (
    <>
      <AboutBg>
        <TextBox className="container">
          <h1>Elevating Creativity,Transforming Visions</h1>

          <p>
            Welcome to Anomi Nexus, the nexus of creativity and technology where
            we weave digital dreams into reality. At the core of our identity is
            a dynamic team of experts dedicated to elevating your brand across
            the digital landscape.
          </p>

          <Button
            variant="contained"
            size="large"
            sx={{
              fontSize: "1.6rem",
              letterSpacing: "0.2rem",
            }}
          >
            <Link className="aboutBtn" to={"/contact"}>
              COLLABORATE NOW
            </Link>
          </Button>
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
  height: 90vh;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    bottom: 0;
    border-radius: 50%;
  }
`;

const TextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 7rem;
    font-family: "Inter", sans-serif;
    span {
      display: block;
    }
  }
  p {
    font-family: "Inter", sans-serif;
    color: #c8c8c8;
    padding: 5rem;
    font-size: 1.6rem;
    line-height: 3rem;
  }
  .aboutBtn {
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  }
`;
