import React from "react"
import styled from "styled-components"

import Ethereum from "../assets/ethereum.svg"
import Heart from "../assets/heart.svg"

interface CardProps {
    backgroundImage: string;

    price: number;
    id: string;
    title: string;
    likes: number;
}

interface CardImageProps{
    backgroundImage: string;
}

const Main = styled.div`

    padding: 0;
    margin: 0;

    height: 224px;
    width: 156px;

    overflow: hidden;

    border-radius: 20px;
`

const CardImage = styled.div<CardImageProps>`
    background: url(${props => props.backgroundImage});
    background-size: cover;

    position: relative;

    padding: 0;
    margin: 0;

    border-radius: 20px 20px 0 0;

    height: 100%;
    width: 100%;

    max-height: 159px;
    max-width: 156px;
`

const CardHeartIcon = styled.img`
    width: 12px;
    height: 12px;

    margin-right: 2px;
`

const CardFeedback = styled.div`
    cursor: pointer;

    background-color: rgba(47, 47, 52, 0.2);
    color: #161616;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    position: absolute;
    right: 10px;
    top: 6px;

    padding: 0 4px;

    height: 17px;

    border-radius: 20px;

    font-family: 'Urbanist', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;

`

const CardInfo = styled.div`
    background-color: rgba(42, 53, 71, 0.3);
    color: #FFF;

    font-family: 'Urbanist', sans-serif;
    font-style: normal;

    border-radius: 0 0 20px 20px;

    padding: 0;
    margin: 0;

    height: 100%;
    width: 100%;
`

const CardTitle = styled.p`
    padding: 10px 0 0 10px;
    margin: 0;
    margin-bottom: 6px;

    font-weight: 600;
    font-size: 12px;
`

const CardLegend = styled.div`
    padding: 0 10px;
    margin: 0;

    display: flex;
    flex-direction: row;

    justify-content: space-between;
`

const CardId = styled.p`
    padding: 0;
    margin: 0;

    font-weight: 700;
    font-size: 14px;
`

const CardEthereumIcon = styled.img`
    width: 12px;
    height: 12px;

    margin-right: 3px;
`

const CardPrice = styled.p`
    padding: 0;
    margin: 0;

    font-weight: 600;
    font-size: 14px;
`

export const Card = (props:CardProps) => {
    return(
        <Main>
            <CardImage
                backgroundImage={props.backgroundImage}
            >
                <CardFeedback>
                    <CardHeartIcon src={Heart} />
                    {props.likes}
                </CardFeedback>
            </CardImage>
            <CardInfo>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardLegend>
                    <CardId> #{props.id} </CardId>
                    <CardPrice> 
                        <CardEthereumIcon src={Ethereum}/>    
                        {props.price} 
                    </CardPrice>
                </CardLegend>
            </CardInfo>
        </Main>
    )
}