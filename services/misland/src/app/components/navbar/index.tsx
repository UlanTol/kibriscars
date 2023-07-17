import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`flex flex-row items-center justify-between max-w-screen-xl min-w-full lg:pl-12 lg:pr-12`}
`;
const LogoContainer = styled.div``;
export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
