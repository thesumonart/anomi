import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
const Header = () => {
  return (
    <HeaderBar>
      <div className="container">
        <nav className="NavBar">
          <Link to={"/"}>
            <LogoImg src="/temp_logo.svg"></LogoImg>
          </Link>
          <MenuList>
            <MenuItems>
              <NavLink to={"/"}>Home</NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink to={"/about"}>About</NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink to={"/protfolio"}>portfolio</NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink to={"/blog"}>blog</NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink to={"/contact"}>contact</NavLink>
            </MenuItems>
          </MenuList>
          <button>
            <CiBoxList />
          </button>
        </nav>
      </div>
    </HeaderBar>
  );
};
const HeaderBar = styled.header`
  background: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  height: 7.5rem;
  position: sticky;
  top: 0;
  .container nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      cursor: pointer;
      border: 0;
      outline: 0;
      height: 2.2rem;
      width: 2.2rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const LogoImg = styled.img`
  height: 7.5rem;
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
const MenuItems = styled.li`
  margin: 0 2.5rem;

  a {
    color: #000;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      left: -1.2rem;
      background-color: #4169e1;
      height: 0rem;
      border-radius: 50%;
      width: 0rem;
      transition: all 0.25s ease-out;
    }
    &:hover::before {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
`;
export default Header;
