import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const TopCars = () => {
  const testCar: ICar = {
    name: "Audi S3",
    thumbnailSrc:
      "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",
    mileage: "10k",
    gearType: "Auto",
    dailyPrice: 70,
    monthlyPrice: 1500,
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "Honda City Seater Car S3",
    thumbnailSrc:
      "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",

    mileage: "20k",
    gearType: "Auto",
    dailyPrice: 90,
    monthlyPrice: 1700,
    gas: "Petrol",
  };
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  let cars = [
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
    <Car {...testCar} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
};
const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:pr-0 `}
`;

const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black lg:text-4xl`}
`;

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

export {};
export default TopCars;
