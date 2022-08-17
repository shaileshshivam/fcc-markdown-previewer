import styled from "styled-components";
import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { defaultEditorText } from "./utils/constants";

const Container = styled.div`
  padding:1rem;
  display:grid;
  min-height: 100vh;
  grid-template-columns:repeat(2, 1fr);
  gap: 1rem;
`

function App() {

  const [editorValue, setEditorValue] = useState(defaultEditorText)

  function onEditorChange(event) {
    const { value } = event.target
    setEditorValue(value);
  }

  function clearContent() {
    setEditorValue("")
  }

  return (
    <Container>
      <Editor editorValue={editorValue} onEditorChange={onEditorChange} clearContent={clearContent} />
      <Preview preview={editorValue} />
    </Container>
  );
}

export default App;
