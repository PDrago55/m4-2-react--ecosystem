import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
// import {
//     Link} from 'react-router-dom'

const StyledContainer = styled.div`
display: flex;
justify-content: space-between;`
const StyledHeader = styled.h1`
    font-size: 2.5rem;
    text-decoration: bold;
    margin: 0;
`
const StyledLinks = styled.div`
    a {
        text-decoration: none;
        display: flex;
        margin: 7px;
        color: black;
    }
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
`
function Header (props) {
    return <header>
        <StyledContainer>
        <StyledHeader>Fruits BRUHporium</StyledHeader>
        <StyledLinks>
        <Link to="/">Home Page</Link>
    
        <Link to="/about">About Us</Link>
        </StyledLinks>
        </StyledContainer>
    </header>
}

export default Header;