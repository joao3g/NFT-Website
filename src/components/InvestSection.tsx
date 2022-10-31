import React from "react"
import styled, { keyframes } from "styled-components"

import { Button } from "./Button"

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
    flex: 1;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    color: #FFF;
    font-family: 'Inter', sans-serif;

    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 64px;

        text-align: center;
    }

    p{
        color: #898CA9;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        margin-bottom: 45px;

        text-align: center;
    }
`

export const InvestSection = () => {
    return(
        <Section>
            <Main>
                <h1>A crypto NFT platform that <br /> rewards you for reading</h1>
                <p>We invest more resources than any other platrom in making sure great <br />support from real people is a click away, whenever you need it.</p>
                <Button 
                    fillBackground={2}
                    size="large"
                >
                    Get Started
                </Button>
            </Main>
        </Section>
    )
}