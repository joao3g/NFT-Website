import React from "react"
import styled from "styled-components"

interface ButtonProps {
    children?: JSX.Element | string;

    fillBackground: 0 /* Transparent background with white text */ 
    | 1 /* Transparent background with gradient color text */ 
    | 2 /* Linear gradient background with white text */;

    size: 'small' | 'large';

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonStyled = styled.button<ButtonProps>`
    cursor: pointer;
    background: ${props => props.fillBackground == 0 ? 'transparent' : 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)'};

    width: ${props => props.size == 'large' ? '156' : '96'}px;
    height: ${props => props.size == 'large' ? '56' : '40'}px;

    border: ${props => props.fillBackground == 2 ? '0px' : '1px solid #FFF'};
    border-radius: 10px;

    -webkit-text-fill-color: ${props => props.fillBackground == 1 ? 'transparent' : 'color'};
    background-clip: ${props => props.fillBackground == 1 ? 'text' : 'initial'};

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

            size={props.size}
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