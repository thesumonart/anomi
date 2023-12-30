import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <Wrapper>
      <div className="container hero_section">
        <TextBox>
          <h1>RENIX CREATIVE</h1>
          <div>
            <span className="agency">AGENCY</span>

            <div className="inner_text">
              <p>
                Sed consequatur repellat et harum saepe et odio nemo qui minima
                nemo est aspernatur quibusdam sit officiis blanditiis eaque
                voluptatem ea quia quaerat quatur.
              </p>
              <Link to="about">
                <span>Discover More</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </TextBox>
        <Illustration>
          <img src="/images/home1-pattern1.jpg" alt="illustration" />
        </Illustration>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 20rem 0;
  display: grid;
  place-items: center;
  .hero_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
const TextBox = styled.section`
  flex-basis: 70%;
  h1 {
    font-size: 14rem;
    font-weight: 400;
    line-height: 13.5rem;
    font-family: "Big Shoulders Text", sans-serif;
  }
  div {
    display: flex;
    margin-top: 2rem;
    span.agency {
      font-size: 14rem;
      font-weight: 400;
      line-height: 13.5rem;
      font-family: "Big Shoulders Text", sans-serif;
    }
    .inner_text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: start;
      margin-left: 2rem;
      p {
        color: rgb(85, 85, 85);
        font-size: 1.7rem;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
        line-height: 2.96rem;
      }
      a {
        font-size: 1.7rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        color: #000;

        font-weight: 500;
        svg {
          margin-left: 0.5rem;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
const Illustration = styled.section``;

export default Home;
