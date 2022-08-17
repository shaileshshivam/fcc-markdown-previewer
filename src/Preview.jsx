import React from "react"
import styled from "styled-components"
import { Presentation } from 'tabler-icons-react';
import "highlight.js/styles/github.css";
import { sanitizeAndParse } from "./utils/sanitizeAndParse";


const StyledPreview = styled.section`
    padding:1rem;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom:1rem;
    overflow-y: scroll;
`

const Text = styled.h2`
    padding: 1rem;
    align-self:center;
    font-size: 1.4rem;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
    display:flex;
    align-items:center;
    gap:0.5rem;
`

const Container = styled.div`
    background-color: #e3f5e4;
    border-radius:0.25rem;
    padding:2rem;
    min-height:100vh;
    width:100%;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem 10fr;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

export default function Preview({ preview }) {

    console.log({ preview })

    return <Container>
        <Text><Presentation size={32} /> Preview</Text>
        <StyledPreview id="preview" dangerouslySetInnerHTML={{ __html: sanitizeAndParse(preview) }} />
    </Container>
}