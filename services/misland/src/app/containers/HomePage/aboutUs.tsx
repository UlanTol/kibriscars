import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import Jeep from "../../../assets/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full pt-4 pb-4 bg-white md:pl-0 md:pr-0 pl-7 pr-7`}
`;
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;
  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;
const InfoContainer = styled.div`
  ${tw`flex flex-col md:w-1/2 md:ml-6 2xl:ml-16`}
`;

const Title = styled.h2`
  ${tw`text-2xl font-extrabold leading-normal text-black md:text-5xl md:font-black`}
`;

const InfoText = styled.p`
  ${tw`max-w-2xl mt-4 text-sm font-normal text-gray-500 md:text-base`}
`;
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={Jeep} />
      </CarContainer>
      <InfoContainer>
        <Title>Be very motivated with your cars!</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi
          suscipit nesciunt praesentium dicta labore dolor ratione vel tempora
          rerum. Ducimus corrupti nostrum perspiciatis praesentium dolorum
          repellat nam aliquid ipsum?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
