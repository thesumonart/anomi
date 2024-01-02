import styled from "styled-components";
import HomeBanner from "../components/HomeBanner";
import Services from "../components/Services";

const Home = () => {
  return (
    <Wrapper>
      <div className="container" id="page-wrap">
        <HomeBanner />
        <Services />
      </div>
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
      padding: 10rem 0;
    }
  }
`;

export default Home;
