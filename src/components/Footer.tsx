import React from "react"
import styled from "styled-components"
import Book from "../assets/logo.svg"

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

    margin-top: 10px;
    margin-bottom: 30px;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex: 1;
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
        font-size: 12px;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    ul{
        list-style:none;
        
        color: #FFF;
        
        font-family: 'Inter', sans-serif;
        
        li{
            color: rgba(255, 255, 255, 0.3);
            text-decoration: none;
            
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
    
            margin-bottom: 24px;
        }
    }
`

const PolicyContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    ul{
        list-style:none;
        
        color: #FFF;
        
        font-family: 'Inter', sans-serif;
        
        li{
            color: rgba(255, 255, 255, 0.3);
            text-decoration: none;
            
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
    
            margin-bottom: 24px;
        }
    }
`

export const Footer = () => {
    return(
        <Section>
            <MainContainer>
                <DescriptionContainer>
                    <img src={Book} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem elit ipsum neque, donec justo viverra viverra ac. Nulla non massa, sed nibh proin dui nec, erat est. Placerat feugiat integer amet gravida. Quis diam suspendisse nulla dignissim malesuada eget purus turpis.</p>
                    <span>© 2021 Elite</span>
                </DescriptionContainer>
                <MenuContainer>
                    <ul>
                        <li>
                            Company
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Press
                        </li>
                        <li>
                            News
                        </li>
                        <li>
                            Merch
                        </li>
                    </ul>
                </MenuContainer>
                <PolicyContainer>
                    <ul>
                        <li>
                            Privacy Policy and Terms of Service
                        </li>
                        <li>
                            Elite Policy
                        </li>
                        <li>
                            Elite Biometrics Privacy Policy
                        </li>
                        <li>
                            Elite Financial Privacy Notice
                        </li>
                        <li>
                            Elite Terms of Service
                        </li>
                        <li>
                            Elite Trade Desk Terms of Service
                        </li>
                    </ul>
                </PolicyContainer>
            </MainContainer>
        </Section>
    )
}