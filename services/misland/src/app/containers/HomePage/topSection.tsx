import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PorcheCarImg from "../././../../assets/mclaren-orange-big.png";
import BlobImg from "../././../../assets/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/buttons/buttons";

const TopSectionContainer = styled.div`
  min-height: 500px;
  margin-top: 6em;
  ${tw`flex justify-between w-full pl-20 pr-20 max-w-screen-2xl lg:pl-16 lg:pr-16 `};
`;

const LeftContainer = styled.div`
  ${tw`flex flex-col w-1/2 `}
`;
const RightContainer = styled.div`
  ${tw`relative flex flex-col w-1/2 mt-20 `}
`;
const Slogan = styled.h1`
  ${tw`mb-4 text-xl font-bold text-black xl:text-6xl sm:text-3xl md:text-5xl lg:font-black md:font-extrabold sm:leading-snug sm:leading-normal sm:leading-relaxed`}
`;

const Description = styled.p`
  ${tw`overflow-hidden text-xs text-gray-800 lg:text-sm xl:text-lg sm:max-h-full max-h-12`}
`;

const BlobContainer = styled.div`
  position: absolute;
  width: 20em;
  height: 10em;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.md}) {
    width: 40em;
    max-height: 20em;
    right: -7em;
    top: -15em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    /* display: none; */
    width: 60em;
    max-height: 40em;
    right: -5em;
    top: -21em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    /* display: none; */
    height: 21em;
    right: -5em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -10em;
    top: -9em;
  }
`;

const ButtonContainer = styled.div`
  ${tw`flex flex-wrap justify-center mt-4`}
`;
export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car With Us</Slogan>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab
          repudiandae dolore, esse, aspernatur tempora ea consequatur deleniti
          eveniet assumenda accusamus eum id nesciunt iste soluta necessitatibus
          ipsum odit? Praesentium.
        </Description>
        <ButtonContainer>
          <Button theme="filled" text="Rent" />
          <Button theme="outlined" text="Rent" />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
          <img src={PorcheCarImg} />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
