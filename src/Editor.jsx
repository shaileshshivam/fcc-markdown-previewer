import styled from "styled-components"
import React, { useRef, useState } from "react"
import { defaultEditorText } from "./constants"

const Container = styled.div`
    padding:2rem;
    min-height: 100vh;
    background-color:whitesmoke;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr;
    border-radius:0.25rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Text = styled.h2`
    padding: 1rem 0;
    font-size: 1.4rem;
    align-self:center;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
`

const StyledEditor = styled.textarea`
  width:100%;
  outline:none;
  font-size:1.1rem;
  border:none;
  padding:1rem;
  background:none;
  resize: none;
  font-family: 'Roboto', sans-serif;
`

const previewWorker = new Worker(new URL("./markdown-preview-worker.js", import.meta.url), {
    type: "module"
});


function Editor({ setPreview }) {

    const [editorValue, setEditorValue] = useState(defaultEditorText)

    function onEditorChange(event) {
        const { value } = event.target
        previewWorker.postMessage(value)
        setEditorValue(value)
    }

    previewWorker.onmessage = function onMessage({ data }) {
        setPreview(data);
    }

    return <Container>
        <Text>Markdown</Text>
        <StyledEditor onChange={onEditorChange} value={editorValue} />
    </Container>
}

export default React.memo(Editor)