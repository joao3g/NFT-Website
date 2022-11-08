import React from "react"
import styled from "styled-components"

const Section = styled.section`
    background-color: red;
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

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    color: #FFF;

    font-family: 'Inter', sans-serif;

    img{
        width: 72px;
        height: 72px;
    }

    p{
        color: rgba(255, 255, 255, 0.3);

        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        margin-bottom: 32px;
    }

    span{
        color: rgba(255, 255, 255, 0.3);

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
`



export const HomeSection = () => {
    return(
        <Section>
            <MainContainer>
                <DescriptionContainer>
                    
                </DescriptionContainer>
            </MainContainer>
        </Section>
    )
}