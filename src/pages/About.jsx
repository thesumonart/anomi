import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="container"></div>
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
