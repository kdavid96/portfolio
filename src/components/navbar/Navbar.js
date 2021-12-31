import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #01bf71;
        border-bottom: 5px solid #FFFFFF;
    }

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: -100vw;
        top: -5vh;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media only screen and (max-width: 470px) {
        display: block;
        position: absolute;
        right: -100vw;
        top: -5vh;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`