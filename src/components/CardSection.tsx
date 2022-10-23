import React from "react"
import styled, { keyframes } from "styled-components"
import { Card } from "./Card"

import iconCard1 from "../assets/iconCard1.svg"
import iconCard2 from "../assets/iconCard2.svg"
import iconCard3 from "../assets/iconCard3.svg"

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

const CardGrid = styled.div`
    display: grid;
    grid-template: 400px / auto auto auto;
    gap: 32px;
`

export const CardSection = () => {
    return(
        <Section>
            <CardGrid>
                <Card 
                    icon={iconCard1}
                    title="Trade Desk"
                    description="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
                    link="Get started"
                />

                <Card 
                    icon={iconCard2}
                    title="Elite ATMs"
                    description="We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
                    link="Find an ATM"
                />

                <Card 
                    icon={iconCard3}
                    title="Elite Wallet"
                    description="Store your growing investments in our
                    non-custodial wallet that gives you access to a full suite of DeFi services in one place"
                    link="Download the App"
                />
            </CardGrid>
        </Section>
    )
}