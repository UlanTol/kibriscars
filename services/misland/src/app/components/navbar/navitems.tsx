import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { scaleRotate as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { textDecoration } from "@chakra-ui/react";

const ListContainer = styled.ul`
  ${tw`flex list-none `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`mr-1 text-sm font-medium text-white transition duration-300 ease-in-out cursor-pointer md:text-base md:mr-5 hover:text-gray-700`}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`mb-3 text-xl text-white focus:text-white`}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Home
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Cars
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Services
            </a>
          </NavItem>
          <NavItem menu>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Contact Us
            </a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  return (
    <ListContainer>
      <NavItem>
        <a style={{ textDecoration: "none", color: "black" }} href="#">
          Home
        </a>
      </NavItem>
      <NavItem>
        <a style={{ textDecoration: "none", color: "black" }} href="#">
          Cars
        </a>
      </NavItem>
      <NavItem>
        <a style={{ textDecoration: "none", color: "black" }} href="#">
          Services
        </a>
      </NavItem>
      <NavItem>
        <a style={{ textDecoration: "none", color: "black" }} href="#">
          Contact Us
        </a>
      </NavItem>
    </ListContainer>
  );
}
