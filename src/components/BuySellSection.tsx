import React from "react"
import styled, { keyframes } from "styled-components"

import Coins from "../assets/coins.png"

import { HiArrowRight } from "react-icons/hi"

const Section = styled.section`
    height: 90vh;
    width: 80%;

    margin: auto;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

const UpperDiv = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

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

    }

    span{
        cursor: pointer;

        margin-top: 32px;

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

const BottomDiv = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`

const CoinDiv = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    color: #FFF;
    font-family: 'Inter', sans-serif;

    p{
        color: #898CA9;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;

    }

    p:first-child{
        margin-bottom: 42px;
    }
`

export const BuySellSection = () => {
    return(
        <Section>
            <UpperDiv>
                <h1>Buy and sell with the lowest fees in the industry</h1>
                <p>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
                <span>Learn More <i><HiArrowRight /></i></span>
            </UpperDiv>
            <BottomDiv>
                <CoinDiv>
                    <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast. </p>

                    <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast. </p>
                </CoinDiv>
                <img 
                    
                    src={Coins}
                />
            </BottomDiv>
        </Section>
    )
}