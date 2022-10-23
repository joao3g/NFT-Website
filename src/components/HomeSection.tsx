import React from "react"
import styled, { keyframes } from "styled-components"
import { Card } from "./Card"

import Avatar1 from "../assets/nft1.png"
import Avatar2 from "../assets/nft2.png"
import Avatar3 from "../assets/nft3.png"
import Avatar4 from "../assets/nft4.png"

import { Button } from "./Button"


const animationLeftToRight = keyframes`
    from{
        left: -1500px;
    }   
    to{
        left: 0px;
    }
`

const animationRightToLeft = keyframes`
    from{
        right: -1500px;
    }   
    to{
        right: 0px;
    }
`

const Section = styled.section`
    height: 100vh;
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
    position: relative;
    animation: ${animationLeftToRight} 0.5s;

    flex: 1;

    display: flex;
    flex-direction: column;

    justify-content: center;

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

    div{
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: start;
    }
`

const CardsContainer = styled.div`
    position: relative;
    animation: ${animationRightToLeft} 0.5s;

    flex: 1;
    display: grid;

    grid-template-columns: auto auto;

    justify-content: center;
    align-content: center;

    row-gap: 62px;
    column-gap: 71px;
`

export const HomeSection = () => {
    return(
        <Section>
            <MainContainer>
                <DescribeContainer>
                    <h1>Make Learning <br /> Rewarding & simple</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices felis metus, eu condimentum mi vehicula in. Etiam purus dolor, porttitor sed cursus quis, tempus vitae leo. Nullam ac sapien. </p>

                    <div>
                        <Button
                            size="large"
                            fillBackground={2}
                        >
                            Get Started
                        </Button>

                        <Button
                            size="large"
                            fillBackground={1}
                            marginLeft={40}
                        >
                            Learn More
                        </Button>
                    </div>
                </DescribeContainer>

                <CardsContainer>
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
                        backgroundImage={Avatar2}
                    />
                    <Card 
                        id="1267"
                        title="Super Influencers"
                        price={6.64}
                        likes={2}
                        backgroundImage={Avatar3}
                    />
                    <Card 
                        id="1267"
                        title="Super Influencers"
                        price={6.64}
                        likes={2}
                        backgroundImage={Avatar4}
                    />
                </CardsContainer>
            </MainContainer>
        </Section>
    )
}