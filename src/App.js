import React from "react";
import { Router } from "./Routes/routes";
import styled from"styled-components"

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  font-family: Roboto;
`

function App() {
  return (
    <AppStyles>
      <Router />
    </AppStyles>
  );
}

export default App;
