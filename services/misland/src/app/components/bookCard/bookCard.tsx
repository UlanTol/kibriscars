import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../buttons/buttons";
import { Mariner } from "../marginer/marginer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4em;
  box-shadow: 1px 1px 13px 3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-between pt-1 pb-1 pl-1 pr-1 bg-white rounded-md md:pt-2 md:pb-2 md:pl-9 md:pr-5`};
`;

const ItemContainer = styled.div`
  ${tw`relative flex`}
`;
const Icon = styled.span`
  ${tw`text-xs text-red-500 fill-current md:text-base md:mr-2`}
`;

const Name = styled.span`
  ${tw`mt-0.5 text-xs text-gray-600 cursor-pointer md:text-sm`}
`;

const LineSeparator = styled.div`
  width: 2px;
  height: 45%;

  ${tw`ml-2 mr-1 bg-gray-300 md:ml-5 md:mr-5`}
`;

const DateCalendar = styled(Calendar)`
  max-width: 500px;
  position: absolute;
  user-select: none;
  top: 3.5em;
  left: -2em;

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;
const SmallIcon = styled.span`
  ${tw`mt-0 ml-1 text-xs text-gray-500 fill-current md:text-base`}
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  console.log(startDate);

  const toggleCalendarStartOpen = () => {
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
    setStartCalendarOpen(!isStartCalendarOpen);
  };
  const toggleCalendarReturnOpen = () => {
    if (isStartCalendarOpen) setStartCalendarOpen(false);
    setReturnCalendarOpen(!isReturnCalendarOpen);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleCalendarStartOpen}>Pick Up Date </Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
      </ItemContainer>
      <LineSeparator />{" "}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleCalendarReturnOpen}>Return Date</Name>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
      </ItemContainer>
      <LineSeparator /> <Button theme="filled" text="Book Now" />
      <Mariner direction="horizontal" margin="2em" />
    </CardContainer>
  );
};

export default BookCard;
