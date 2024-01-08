import styled from "styled-components";
import AboutBanner from "../components/AboutBanner";
import AboutSubDesOne from "../components/AboutSubDes";

const About = () => {
  return (
    <Wrapper>
      <AboutBanner />
      <AboutSubDesOne />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .container > section {
    padding: 10rem 0;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    .container > section {
      padding: 1rem 0;
    }
  }
`;

export default About;
