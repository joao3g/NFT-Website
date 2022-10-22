import React from "react"
import styled from "styled-components"
import Book from "../assets/logo.svg"
import { Button } from "./Button"

const Nav = styled.nav`
    color: white;

    padding-left: 8%;
    padding-right: 8%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    cursor: pointer;

    width: 72px;
    height: 72px;
`

const Links = styled.ul`
    list-style: none;

    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    
    li{
        cursor: pointer;
        
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
        
        margin-left: 32px; 
    }
    
    li:first-child{
        margin-left: 0px;
    }
`

export const Navbar = () => {
    return(
        <Nav>
            <Row>
                <Logo src={Book} />
                <Links>
                    <li> Buy / Sell </li>
                    <li> Grow </li>
                    <li> Markets </li>
                    <li> Business </li>
                    <li> Support </li>
                </Links>
                <div>
                    <Button
                        fillBackground={false}
                    >Sign in</Button>
                    
                    <Button
                        fillBackground={true}
                        marginLeft={16}
                    >Sign up</Button>
                </div>
            </Row>
        </Nav>
    )
}