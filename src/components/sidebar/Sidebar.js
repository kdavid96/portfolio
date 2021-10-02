import styled from "styled-components"
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: absolute;
    left: -22rem;
    top: -5vh;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: -1.4rem;
    right: -19.9rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    position: relative;
    width: 30%;
    height: 100%;
    top: -5vh;
    left: 86vw;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: no-wrap;
    padding: 16px 64px;
    color: #0100606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const SidebarMenu = styled.ul`
    position: absolute;
    width: 100vw;
    height: 100vw;
    left: 0vw !important;
    top: 5vh;
    background-color: rgb(8, 12, 31, 0.96);
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    left: 6.5rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`