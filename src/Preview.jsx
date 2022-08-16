import React from "react"
import { marked } from "marked"
import styled from "styled-components"
import { defaultEditorText } from "./constants"

const StyledPreview = styled.section`
    padding:1rem;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom:1rem;
    overflow-y: scroll;
`

const Container = styled.div`
    border-radius:0.25rem;
    padding:2rem;
    height: calc(100vh - 2rem);
    width:100%;
    background-color:grey;
    color:white;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

const Header = styled.header`
    padding:1rem;
`

export default function Preview({ preview }) {

    console.log(preview)

    return <Container>
        <Header><h1>Preview</h1></Header>
        <StyledPreview dangerouslySetInnerHTML={{ __html: preview }}>
        </StyledPreview>
    </Container>
}