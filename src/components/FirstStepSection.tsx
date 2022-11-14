import React from "react"
import styled, { keyframes } from "styled-components"
import { Card } from "./NFTCard"

import Avatar1 from "../assets/nft3.png"
import Avatar2 from "../assets/nft5.png"
import Avatar3 from "../assets/nft6.png"

import { Button } from "./Button"

const Section = styled.section`
    height: 70vh;
    width: 100%;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`

const MainContainer = styled.div`
    width: 80%;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`

const DescribeContainer = styled.div`
    flex: 2;

    display: flex;
    flex-direction: column;

    justify-content: center;

    color: #FFF;

    font-family: 'Inter', sans-serif;

    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 50px;
    }

    p{
        color: #898CA9;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        margin-bottom: 32px;
    }
`

const CardsContainer = styled.div`
    flex: 3;
    display: grid;

    grid-template-columns: auto auto;
    grid-auto-flow: column;

    justify-content: center;
    align-content: center;

    column-gap: 71px;
`

export const FirstStepSection = () => {
    return(
        <Section>
            <MainContainer>
                <DescribeContainer>
                    <h1>Take your first step into safe, secure NFT investing</h1>

                    <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast. </p>

                    <Button
                        size="large"
                        fillBackground={2}
                    >
                        Get Started
                    </Button>
                </DescribeContainer>

                <CardsContainer>
                    <Card 
                        id="1267"
                        title="Super Influencers"
                        price={6.64}
                        likes={2}
                        backgroundImage={Avatar2}
                    />
                    <Card 
                        id="1267"
                        title="Super Influencers"
                        price={6.64}
                        likes={2}
                        backgroundImage={Avatar1}
                    />
                    <Card 
                        id="1267"
                        title="Super Influencers"
                        price={6.64}
                        likes={2}
                        backgroundImage={Avatar3}
                    />
                </CardsContainer>
            </MainContainer>
        </Section>
    )
}