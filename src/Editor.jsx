import styled from "styled-components"
import React from "react"
import { Markdown, Eraser } from 'tabler-icons-react';

const Container = styled.div`
    padding:2rem;
    min-height: 100vh;
    background-color:whitesmoke;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem 10fr;
    border-radius:0.25rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Text = styled.h2`
    padding: 1rem 0;
    font-size: 1.4rem;
    align-self:center;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
    display:flex;
    align-items:center;
    gap:0.5rem;
`

const EraseButton = styled.button`
    border:none;
    outline:none;
    min-width:3rem;
    background:none;
    margin-left:auto;
    display:flex;
    align-items:center;

    :active {
        transform:scale(0.95) translate(-5px) translate(1px) translate(-5px);
        transition: transform 0.2s ease-in-out;
    }
`

const StyledEditor = styled.textarea`
  width:100%;
  outline:none;
  font-size:0.9rem;
  border:none;
  padding:1rem;
  background:none;
  resize: none;
  min-height: 90vh;
`

function Editor({ editorValue, onEditorChange, clearContent }) {

    console.log({
        editorValue
    })

    return <Container>
        <Text>
            <Markdown size={32} /> Markdown <EraseButton onClick={clearContent}><Eraser size={24} /></EraseButton>
        </Text>
        <StyledEditor id="editor" onChange={onEditorChange} value={editorValue} />
    </Container>
}

export default Editor