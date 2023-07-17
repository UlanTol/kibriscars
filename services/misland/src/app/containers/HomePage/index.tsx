import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard/bookCard";
import Footer from "../../components/footer/index";
import { Mariner } from "../../components/marginer/marginer";
import { Navbar } from "../../components/navbar";
import AboutUs from "./aboutUs";
import BookingSteps from "./bookingSteps";
import TopCars from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden`};
`;

export function HomePage(): JSX.Element {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Mariner direction="vertical" margin="4em" />

      <BookCard />
      <Mariner direction="vertical" margin="10em" />

      <BookingSteps />
      <Mariner direction="vertical" margin="5em" />

      <AboutUs />
      <Mariner direction="vertical" margin="5em" />

      <TopCars />

      <Footer />
    </PageContainer>
  );
}
