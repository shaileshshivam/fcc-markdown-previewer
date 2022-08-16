import styled from "styled-components";
import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const Container = styled.div`
  padding:1rem;
  display:grid;
  min-height: 100vh;
  grid-template-columns:repeat(2, 1fr);
  gap: 1rem;
`



function App() {

  const [preview, setPreview] = useState("")

  return (
    <Container>
      <Editor setPreview={setPreview} />
      <Preview preview={preview} />
    </Container>
  );
}

export default App;
