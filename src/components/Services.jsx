import styled from "styled-components";
import { FaLaptopCode, FaWordpress } from "react-icons/fa";
import { DesignServices, Draw, QueryStats } from "@mui/icons-material/";
import { IoIosArrowRoundForward } from "react-icons/io";
const Services = () => {
  const serviceList = [
    {
      icon: <DesignServices />,
      serviceTitle: "Web Design",
      serviceDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam sunt laborum consectetur eos sed ipsa excepturi ab optio quod?",
    },
    {
      icon: <FaLaptopCode />,
      serviceTitle: "Web Application",
      serviceDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam sunt laborum consectetur eos sed ipsa excepturi ab optio quod?",
    },
    {
      icon: <Draw />,
      serviceTitle: "Graphic Design",
      serviceDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam sunt laborum consectetur eos sed ipsa excepturi ab optio quod?",
    },
    {
      icon: <FaWordpress />,
      serviceTitle: "WordPress Web Development",
      serviceDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam sunt laborum consectetur eos sed ipsa excepturi ab optio quod?",
    },
    {
      icon: <QueryStats />,
      serviceTitle: "SEO & Keyword Research",
      serviceDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nam sunt laborum consectetur eos sed ipsa excepturi ab optio quod?",
    },
  ];

  return (
    <ServicesSection>
      <h4 className="heading">our services</h4>
      <TextBox>
        <p className="subHeading">
          Manage your finance with
          <span>Anomi</span>
        </p>
        <p className="innerText">
          Services ranging from widely available homecare nurses and medical
          devices are accessible throughout international markets.
        </p>
      </TextBox>
      <ServicesInfo>
        {serviceList.map((v, i) => {
          return (
            <>
              <div key={i} className="serviceBox">
                {v.icon}
                <span className="serviceTitle">{v.serviceTitle}</span>
                <span className="serviceDescription">
                  {v.serviceDescription}
                </span>
                <button className="readMoreBtn">
                  <span>Read More</span>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </>
          );
        })}
      </ServicesInfo>
    </ServicesSection>
  );
};

export default Services;

const ServicesSection = styled.section``;
const TextBox = styled.div`
  padding: 2rem 0;
  text-align: center;
  font-family: "Inter", sans-serif;
  width: 40%;
  margin: 0 auto;
  p.subHeading {
    font-size: 4rem;
    font-weight: 500;
    text-transform: capitalize;
    span {
      display: block;
      text-transform: uppercase;
      color: #4169e1;
    }
  }
  p.innerText {
    margin-top: 2rem;
    line-height: 3rem;
    font-size: 1.6rem;
  }
`;

const ServicesInfo = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 0 auto;
  div.serviceBox {
    height: 30rem;
    padding: 2rem;
    flex-basis: 30%;
    text-align: center;
    background-color: #f5f5f5;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 0.5rem;
    position: relative;
    & > * {
      display: block;
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
      font-family: "Poppins", sans-serif;
    }
    svg {
      height: 4rem;
      width: 4rem;
      margin-left: auto;
      margin-right: auto;
    }
    span.serviceTitle {
      font-size: 3rem;
      font-weight: 500;
    }
    span.serviceDescription {
      font-size: 1rem;
      font-weight: 500;
    }
    button.readMoreBtn {
      padding: 0.5rem 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      border: 2px solid #4169e1;
      border-radius: 0.5rem;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      height: 3.5rem;
      transition: all 0.25s ease-out;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      svg {
        opacity: 0;
        position: absolute;
        transform: translateX(-180%);
        transition: all 0.25s ease-out;
      }
      &:hover {
        background-color: #4169e1;
        color: #f5f5f5;
        span {
          display: none;
        }
        svg {
          opacity: 1;
          transform: translateX(0%);
        }
      }
    }
  }
`;
