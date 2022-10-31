import React from "react"
import styled, { keyframes } from "styled-components"

import { Button } from "./Button"

import Support from "../assets/supportIcon.png"

const Section = styled.section`
    height: 80vh;
    width: 80%;

    margin: auto;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 700px;

    justify-content: center;

    margin-left: 125px;

    color: #FFF;
    font-family: 'Inter', sans-serif;

    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
    }

    p{
        color: #898CA9;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        margin-bottom: 45px;
    }
`

export const SupportSection = () => {
    return(
        <Section>
            <img 
                src={Support}
            />
            <Main>
                <h1>24/7 access to full service customer support</h1>
                <p>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
                <Button 
                    fillBackground={0}
                    size="large"
                >
                    Get Started
                </Button>
            </Main>
        </Section>
    )
}