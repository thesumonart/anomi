import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import MenuBarIcon from "./MenuBarIcon";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderBar>
      <div className="container">
        <nav className="NavBar">
          <Link to={"/"}>
            <LogoImg src="/images/anomilogo.svg"></LogoImg>
          </Link>
          <MenuList
            className={menuOpen ? "mobile_menu_list" : "nonMobile_menu_list"}
            menuOpen={menuOpen}
          >
            <MenuItems>
              <NavLink
                onClick={() => {
                  setMenuOpen(false);
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink
                onClick={() => {
                  setMenuOpen(false);
                }}
                to={"/about"}
              >
                About
              </NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink
                onClick={() => {
                  setMenuOpen(false);
                }}
                to={"/protfolio"}
              >
                portfolio
              </NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink
                onClick={() => {
                  setMenuOpen(false);
                }}
                to={"/blog"}
              >
                blog
              </NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink
                onClick={() => {
                  setMenuOpen(false);
                }}
                to={"/contact"}
              >
                contact
              </NavLink>
            </MenuItems>
          </MenuList>
          {
            <span id="menuToggleBar">
              <MenuBarIcon setMenuOpen={setMenuOpen} />
            </span>
          }
        </nav>
      </div>
    </HeaderBar>
  );
};
const HeaderBar = styled.header`
  z-index: 1;
  background: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  height: 10rem;
  position: sticky;
  top: 0;
  .container {
    height: 100%;
  }
  .container nav {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
const LogoImg = styled.img`
  width: 10rem;
  margin-left: 1.5rem;
`;
const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  transition: all 300ms linear;
  @media (max-width: 768px) {
    li {
      display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
    }
  }
`;
const MenuItems = styled.li`
  margin: 0 2.5rem;

  a {
    color: #000;
    @media (max-width: 768px) {
      color: #ffff;
    }
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
      background-color: #dc143c;

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
