import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
const PortfolioGellery = () => {
  const [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    const getGellaryData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        );
        return data;
      } catch (error) {
        console.log(`gellary add error ${error}`);
      }
    };
    const result = getGellaryData();
    console.log(result);
  }, []);

  return (
    <div className="container">
      <Wrapper>
        <ul
          className="action_list"
          onMouseMove={(e) => {
            setHoverCursorValue({
              x: e.clientX,
              y: e.clientY,
            });
          }}
        >
          <List>
            <Button className="gellery_action_btns">Show All</Button>
          </List>
          <List>
            <Button className="gellery_action_btns">websites</Button>
          </List>
          <List>
            <Button className="gellery_action_btns">ui/ux</Button>
          </List>
          <List>
            <Button className="gellery_action_btns">graphic design</Button>
          </List>
        </ul>
        {/* ================= gallery ======================*/}
        <ImageList cols={4} variant="quilted">
          {galleryArray &&
            galleryArray.map((item) => (
              <>
                <ImageListItem key={item.id}>
                  <img src={item.url} alt={item.title} loading="lazy" />
                </ImageListItem>
              </>
            ))}
        </ImageList>
        {/* ================= gallery ======================*/}
      </Wrapper>
    </div>
  );
};

export default PortfolioGellery;
const Wrapper = styled.div`
  padding: 10rem 0;
  .action_list {
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
`;

const List = styled.li`
  .gellery_action_btns {
    padding: 0.5rem 1.5rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #4169e1;
    border: 0.1rem solid #4169e1;
    border-radius: 3rem;
    position: relative;
    transition: all 0.3s ease-out;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      bottom: 0%;
      left: 0%;
      /* transform: translate(-50%, -50%); */
      background-color: #4169e1;

      height: 0px;
      width: 0px;
      border-radius: 50%;
      transition: all 0.3s linear;

      z-index: -2;
    }
    &:hover {
      color: #fff;
      &::before {
        height: 200px;
        width: 200px;
        scale: 3;
      }
    }
  }
`;

const Gallery = styled.div``;
