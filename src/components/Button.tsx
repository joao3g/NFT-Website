import React from "react"
import styled from "styled-components"

interface ButtonProps {
    children?: JSX.Element | string;

    fillBackground: boolean

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonStyled = styled.button<ButtonProps>`
    cursor: pointer;
    background: ${props => props.fillBackground ? 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)' : 'transparent'};

    width: 96px;
    height: 40px;

    border: ${props => props.fillBackground ? '0px' : '1px solid #FFF'};
    border-radius: 10px;

    color: #FFF;

    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;

    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `0px` };
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : `0px` };
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : `0px` };
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : `0px` };
`

export const Button = (props:ButtonProps) => {
    return(
        <ButtonStyled
            onClick={props.onClick}
            fillBackground={props.fillBackground}

            marginTop={props.marginTop}
            marginRight={props.marginRight}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
        >
            {props.children}
        </ButtonStyled>
    )
}