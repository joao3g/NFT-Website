import React from "react"
import styled, { keyframes } from "styled-components"

import { Input } from "./Input";

const Section = styled.section`
    height: 60vh;
    width: 100%;

    margin: auto;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    h1{ 
        color: #fff;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 50px;
    }

    p{
        color: #898CA9;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }

    span{
        color: #fff;

        cursor: pointer;
    }

`

export const ReceiveTransmissionSection = () => {
    return(
        <Section>
            <h1>Receive Transmissions</h1>
            <p>Unsubscribe at any time. <span>Privacy policy↗</span></p>
            <Input 
                marginTop={32}
            
                placeholder="Email address"
                icon="none"
            />
        </Section>
    )
}