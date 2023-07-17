import React from "react";
import styled from "styled-components";

export interface IMarinerProps {
  margin: number | string;
  direction?: "horizontal" | "vertical";
}

const HorizontalMargin = styled.span<IMarinerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMarinerProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function Mariner(props: IMarinerProps) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Mariner.defaultProps = {
  direction: "horizontal",
};

export { Mariner };
