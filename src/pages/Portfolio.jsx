import styled from "styled-components";
import PortfolioBanner from "../components/PortfolioBanner";
import PortfolioGellery from "../components/PortfolioGellery";

const Portfolio = () => {
  return (
    <Wrapper>
      <PortfolioBanner />
      <PortfolioGellery />
    </Wrapper>
  );
};

export default Portfolio;
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
