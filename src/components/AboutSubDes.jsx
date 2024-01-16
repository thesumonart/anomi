import { Box } from "@mui/material";
import styled from "styled-components";

const AboutSubDesOne = () => {
  const temImg =
    "https://img.freepik.com/free-vector/business-people-entrepreneur_24877-63426.jpg?size=626&ext=jpg&uid=R23667841&ga=GA1.1.998266162.1701576252&semt=ais";
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      border={"1px solid"}
    >
      <TextBox>
        <h5>sdfasd</h5>
      </TextBox>
      <Image>
        <img src={temImg} alt="" />
      </Image>
    </Box>
  );
};

export default AboutSubDesOne;
const TextBox = styled.div``;
const Image = styled.div`
  img {
    width: 100%;
  }
`;
