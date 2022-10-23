import React from "react"
import styled from "styled-components"

import { HiArrowRight } from "react-icons/hi"

interface CardProps {
    icon: string;
    title: string;
    description: string;
    link: string;
}

const Main = styled.div`
    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    background: #1A1B23;

    padding: 32px 24px;
    margin: 0;

    width: 376px;

    overflow: hidden;

    border-radius: 25px;

    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;

        color: #FFF;
    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        color: #898CA9;
        text-align: center;
    }

    span{
        cursor: pointer;

        margin-top: 32px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;

        color: #B982FF;
        text-align: center;

        display: flex;
        align-items: center;

        i{
            margin-left: 6px;
            text-align: center;

            display: flex;
            align-items: center;
        }
    }
`

const IconDiv = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    border-radius: 999px;
    border: 1px solid transparent;

    background-image: radial-gradient(111.14% 111.14% at 8.37% 0%, #6A6A70, #2E2F36),
    linear-gradient(52.09deg, #982DEC -11.18%, #DC8DF8 58.92%, #A9C4F3 98.44%);

    background-origin: border-box;
    background-clip: content-box, border-box;
`


export const Card = (props:CardProps) => {
    return(
        <Main>
            <IconDiv>
                <img src={props.icon} />
            </IconDiv>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <span>{props.link} <i><HiArrowRight /></i></span>
        </Main>
    )
}