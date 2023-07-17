import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { HomePage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`flex flex-col items-center h-full overflow-x-hidden `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
