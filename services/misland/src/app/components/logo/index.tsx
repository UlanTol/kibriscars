import React from "react";
import CarLogoImg from "../../../assets/car-logo-dark.png";
import styled from "styled-components";
import tw from "twin.macro";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}
const LogoContainer = styled.div`
  ${tw`flex items-center `}
`;

const LogoText = styled.div`
  ${tw`mt-6 text-xl font-bold text-black md:text-2xl`};

  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`h-2 md:h-5`};

  img {
    width: auto;
    heigth: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} />
      </Image>
      <LogoText color={color || "dark"}>Rental ...</LogoText>
    </LogoContainer>
  );
}
