import styled from "styled-components";

const MenuIcon = () => {
  return (
    <MenuIconButton>
      <svg>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="plate plate2" onClick="this.classList.toggle('active')">
        <svg
          className="burger"
          version="1.1"
          height={100}
          width={100}
          viewBox="0 0 100 100"
        >
          <path
            className="line line1"
            d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
          />
          <path
            className="line line2"
            d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
          />
          <path
            className="line line3"
            d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
          />
          <path
            className="line line4"
            d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
          />
          <path
            className="line line5"
            d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
          />
          <path
            className="line line6"
            d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
          />
        </svg>
        <svg
          className="x"
          version="1.1"
          height={100}
          width={100}
          viewBox="0 0 100 100"
        >
          <path className="line" d="M 34,32 L 66,68" />
          <path className="line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </MenuIconButton>
  );
};

export default MenuIcon;

const MenuIconButton = styled.div`
  svg {
    height: 80px;
    position: absolute;
    width: 80px;
  }
  .plate {
    height: 80px;
    width: 80px;
  }
  .burger {
    filter: url(#gooeyness);
  }
  .x {
    transform: scale(0);
    transition: transform 400ms;
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms;
  }
  .x .line {
    stroke-width: 5.5px;
  }
  /* First plate */
  .plate1 .line2 {
    stroke-dasharray: 40 200;
    stroke-dashoffset: 0px;
  }
  .plate1 .line3 {
    stroke-dasharray: 40 179;
    stroke-dashoffset: 0px;
  }
  .active .line {
    transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;
  }
  .active.plate1 .line1 {
    transform: scale(0, 1);
    transition: transform 500ms 100ms;
  }
  .active.plate1 .line2 {
    stroke-dasharray: 5px 200;
    stroke-dashoffset: -164px;
  }
  .active.plate1 .line3 {
    stroke-dasharray: 5px 179;
    stroke-dashoffset: -142px;
  }
  .active .x {
    transform: scale(1);
    transition: transform 400ms 350ms;
  }
  /* El segundo plato */
  .plate2 .line1 {
    stroke-dasharray: 21 185.62753295898438;
    transition-delay: 0;
  }
  .plate2 .line2 {
    stroke-dasharray: 21 178.6514129638672;
    transition-delay: 30ms;
  }
  .plate2 .line3 {
    stroke-dasharray: 21 197.92425537109375;
    transition-delay: 60ms;
  }
  .plate2 .line4 {
    stroke-dasharray: 21 190.6597137451172;
    transition-delay: 90ms;
  }
  .plate2 .line5 {
    stroke-dasharray: 21 208.52874755859375;
    transition-delay: 120ms;
  }
  .plate2 .line6 {
    stroke-dasharray: 21 186.59703063964844;
    transition-delay: 150ms;
  }
  .active.plate2 .line1 {
    stroke-dasharray: 5 185.62753295898438;
    stroke-dashoffset: -141px;
  }
  .active.plate2 .line2 {
    stroke-dasharray: 5 178.6514129638672;
    stroke-dashoffset: -137px;
  }
  .active.plate2 .line3 {
    stroke-dasharray: 5 197.92425537109375;
    stroke-dashoffset: -176px;
  }
  .active.plate2 .line4 {
    stroke-dasharray: 5 190.6597137451172;
    stroke-dashoffset: -159px;
  }
  .active.plate2 .line5 {
    stroke-dasharray: 5 208.52874755859375;
    stroke-dashoffset: -139px;
  }
  .active.plate2 .line6 {
    stroke-dasharray: 5 186.59703063964844;
    stroke-dashoffset: -176px;
  }
  .active.plate2 .x {
    transition: transform 400ms 250ms;
  }

  /* O terceiro prato */
  .plate3 .line {
    transition: stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms,
      transform 300ms 200ms;
  }
  .plate3 .line1 {
    stroke-dasharray: 21 109;
  }
  .plate3 .line2 {
    stroke-dasharray: 21 112;
  }
  .plate3 .line3 {
    stroke-dasharray: 21 102;
  }
  .plate3 .line4 {
    stroke-dasharray: 21 103;
  }
  .plate3 .line5 {
    stroke-dasharray: 21 110;
  }
  .plate3 .line6 {
    stroke-dasharray: 21 115;
  }
  .plate3 .x {
    transition: transform 400ms 50ms;
  }

  .active.plate3 .line {
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
  }
  .active.plate3 .line1 {
    stroke-dasharray: 5 109;
    stroke-dashoffset: -95px;
  }
  .active.plate3 .line2 {
    stroke-dasharray: 5 112;
    stroke-dashoffset: -96px;
  }
  .active.plate3 .line3 {
    stroke-dasharray: 5 102;
    stroke-dashoffset: -79px;
  }
  .active.plate3 .line4 {
    stroke-dasharray: 5 103;
    stroke-dashoffset: -78px;
  }
  .active.plate3 .line5 {
    stroke-dasharray: 5 110;
    stroke-dashoffset: -63px;
  }
  .active.plate3 .line6 {
    stroke-dasharray: 5 115;
    stroke-dashoffset: -64px;
  }
  .active.plate3 .x {
    transition: transform 400ms 100ms;
  }
  /* Die vierte teller */
  .plate4 .x {
    transition: transform 400ms;
  }
  .plate4 .line {
    transform-origin: 50%;
    transition: transform 400ms 100ms;
  }
  .active.plate4 .line {
    transition: transform 400ms;
  }
  .active.plate4 .line1 {
    transform: translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7);
  }
  .active.plate4 .line2 {
    transform: translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7);
  }
  .active.plate4 .line3 {
    transform: translateY(0px) rotate(45deg) scale(0.7);
  }
  .active.plate4 .line4 {
    transform: translateY(0px) rotate(-45deg) scale(0.7);
  }
  .active.plate4 .line5 {
    transform: translateX(18px) translateY(3px) rotate(45deg) scale(0.7);
  }
  .active.plate4 .line6 {
    transform: translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7);
  }
  .active.plate4 .x {
    transition: transform 400ms 100ms;
    transform: scale(1);
  }
  /* Den femte rätten */
  .plate5 .line {
    transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms,
      transform 400ms 100ms;
  }
  .plate5 .line1 {
    stroke-dasharray: 40 40;
  }
  .plate5 .line2 {
    stroke-dasharray: 21 39;
  }
  .plate5 .line3 {
    stroke-dasharray: 21 39;
  }
  .plate5 .line4 {
    stroke-dasharray: 40 40;
  }
  .plate5 .x {
    transition: transform 400ms 50ms;
  }

  .active.plate5 .line {
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
  }
  .active.plate5 .line1 {
    stroke-dasharray: 1 40;
    stroke-dashoffset: -33px;
  }
  .active.plate5 .line2 {
    stroke-dasharray: 5 39;
    stroke-dashoffset: -37px;
  }
  .active.plate5 .line3 {
    stroke-dasharray: 5 39;
    stroke-dashoffset: -37px;
  }
  .active.plate5 .line4 {
    stroke-dasharray: 1 40;
    stroke-dashoffset: -33px;
  }
  .active.plate5 .x {
    transition: transform 400ms 50ms;
  }
  /* Шестая пластина */
  .plate6 .line {
    transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms,
      transform 400ms 100ms;
  }
  .plate6 .line1 {
    stroke-dasharray: 21 127;
  }
  .plate6 .line2 {
    stroke-dasharray: 21 106;
  }
  .plate6 .line3 {
    stroke-dasharray: 21 106;
  }
  .plate6 .line4 {
    stroke-dasharray: 21 126;
  }
  .plate6 .x {
    transition: transform 400ms 50ms;
  }

  .active.plate6 .line {
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
  }
  .active.plate6 .line1 {
    stroke-dasharray: 2 127;
    stroke-dashoffset: -94px;
  }
  .active.plate6 .line2 {
    stroke-dasharray: 2 106;
    stroke-dashoffset: -91px;
  }
  .active.plate6 .line3 {
    stroke-dasharray: 2 106;
    stroke-dashoffset: -91px;
  }
  .active.plate6 .line4 {
    stroke-dasharray: 2 127;
    stroke-dashoffset: -94px;
  }
  .active.plate6 .x {
    transition: transform 400ms 50ms;
  }
  /* 제 7 판 */
  .plate7 .line {
    transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms,
      transform 400ms 100ms;
  }
  .plate7 .line1 {
    stroke-dasharray: 21 102;
  }
  .plate7 .line2 {
    stroke-dasharray: 21 92;
  }
  .plate7 .line3 {
    stroke-dasharray: 21 97;
  }
  .plate7 .line4 {
    stroke-dasharray: 21 97;
  }
  .plate7 .line5 {
    stroke-dasharray: 21 92;
  }
  .plate7 .line6 {
    stroke-dasharray: 21 102;
  }
  .plate7 .x {
    transition: transform 400ms 50ms;
  }

  .active.plate7 .line {
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
  }
  .active.plate7 .line1 {
    stroke-dasharray: 2 102;
    stroke-dashoffset: -102px;
  }
  .active.plate7 .line2 {
    stroke-dasharray: 2 92;
    stroke-dashoffset: -92px;
  }
  .active.plate7 .line3 {
    stroke-dasharray: 2 97;
    stroke-dashoffset: -97px;
    transition-delay: 20ms;
  }
  .active.plate7 .line4 {
    stroke-dasharray: 2 97;
    stroke-dashoffset: -97px;
    transition-delay: 20ms;
  }
  .active.plate7 .line5 {
    stroke-dasharray: 2 92;
    stroke-dashoffset: -90px;
    transition-delay: 40ms;
  }
  .active.plate7 .line6 {
    stroke-dasharray: 2 102;
    stroke-dashoffset: -100px;
    transition-delay: 40ms;
  }
  .active.plate7 .x {
    transition: transform 400ms 50ms;
  }
  /* Όγδοο πιάτο */
  .plate8 .line {
    transition: stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms,
      transform 400ms 100ms;
  }
  .plate8 .line1 {
    stroke-dasharray: 21 201;
  }
  .plate8 .line2 {
    stroke-dasharray: 21 201;
    transition-delay: 20ms;
  }
  .plate8 .line3 {
    stroke-dasharray: 21 201;
    transition-delay: 40ms;
  }
  .plate8 .line4 {
    stroke-dasharray: 21 201;
    transition-delay: 60ms;
  }
  .plate8 .line5 {
    stroke-dasharray: 21 201;
    transition-delay: 80ms;
  }
  .plate8 .line6 {
    stroke-dasharray: 21 201;
    transition-delay: 100ms;
  }
  .plate8 .x {
    transition: transform 400ms 50ms;
  }

  .active.plate8 .line {
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms, transform 400ms;
  }
  .active.plate8 .line1 {
    stroke-dasharray: 5 201;
    stroke-dashoffset: -158px;
  }
  .active.plate8 .line2 {
    stroke-dasharray: 5 201;
    stroke-dashoffset: -158px;
    transition-delay: 20ms;
  }
  .active.plate8 .line3 {
    stroke-dasharray: 5 201;
    stroke-dashoffset: -158px;
    transition-delay: 40ms;
  }
  .active.plate8 .line4 {
    stroke-dasharray: 5 201;
    stroke-dashoffset: -158px;
    transition-delay: 60ms;
  }
  .active.plate8 .line5 {
    stroke-dasharray: 5 201;
    stroke-dashoffset: -158px;
    transition-delay: 80ms;
  }
  .active.plate8 .line6 {
    stroke-dasharray: 5 201;
    stroke-dashoffset: -158px;
    transition-delay: 100ms;
  }
  .active.plate8 .x {
    transition: transform 400ms 50ms;
  }
`;
