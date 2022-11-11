import React from "react"
import styled from "styled-components"

import { HiArrowRight } from "react-icons/hi"

interface InputProps {
    placeholder: string;
    icon: 'none' | 'arrow';

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

const Main = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;

    background-color: blue;

    width: 300px;

    background-image: linear-gradient(#0B0B0F, #0B0B0F),
    linear-gradient(10.09deg, rgba(147, 63, 254, 1) 30%, rgba(24, 200, 255, 1));

    border: 1px solid transparent;
    border-radius: 10px;

    background-origin: border-box;
    background-clip: padding-box, border-box;
`

const InputStyled = styled.input<InputProps>`
    flex: 1;

    padding: 20px 16px;

    background: transparent;
    border: 0;

    color: #565976;

    :focus{
        outline: none;
    }

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;

    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `0px` };
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : `0px` };
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : `0px` };
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : `0px` };
`

const Icon = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    color: #565976;
`

export const Input = (props:InputProps) => {
    return(
        <Main>
            <InputStyled
                type="email"
                icon={props.icon}
                placeholder={props.placeholder}
    
                marginTop={props.marginTop}
                marginRight={props.marginRight}
                marginBottom={props.marginBottom}
                marginLeft={props.marginLeft}
            />
            <Icon>
                <HiArrowRight />
            </Icon>
        </Main>
    )
}