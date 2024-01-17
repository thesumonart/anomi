import styled from "styled-components";
import { Button, ImageList, ImageListItem } from "@mui/material";
import { data as galleryArray } from "../config/data";
const PortfolioGellery = () => {
  return (
    <div className="container">
      <Wrapper>
        <ul className="action_list">
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
        <ImageList variant="quilted" cols={4}>
          {galleryArray &&
            galleryArray.map((item) => (
              <>
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img src={item.img} alt={item.title} loading="lazy" />
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
    margin-bottom: 5rem;
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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #4169e1;
      height: 0px;
      width: 0px;

      border-radius: 50%;
      transition: all 0.4s linear;
      z-index: -2;
    }
    &:hover {
      color: #fff;
      &::before {
        height: 200px;
        width: 200px;
        /* scale: 3; */
      }
    }
  }
`;

const Gallery = styled.div``;
