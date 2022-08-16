import styled from "styled-components"
import React, { useRef, useState } from "react"
import { defaultEditorText } from "./constants"

const Container = styled.div`
    padding:2rem;
    height: calc(100vh - 2rem);
    background-color:whitesmoke;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr;
    border-radius:0.25rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`

const Header = styled.header`
    padding: 1rem;
    color:deeppink;
`

const StyledEditor = styled.textarea`
  width:100%;
  outline:none;
  font-size:1.3rem;
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
        setEditorValue(event.target.value)
        previewWorker.postMessage(event.target.value)
    }

    previewWorker.onmessage = function onMessage({ data }) {
        setPreview(data);
    }

    return <Container>
        <Header><h1>Editor</h1></Header>
        <StyledEditor onChange={onEditorChange} value={editorValue} />
    </Container>
}

export default React.memo(Editor)