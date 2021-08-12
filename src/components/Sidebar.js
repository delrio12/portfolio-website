import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import { Link as LinkScroll } from 'react-scroll'

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <Close fontSize="large" />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" isOpen={ isOpen } onClick={ toggle }>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" isOpen={ isOpen } onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to="project" isOpen={ isOpen } onClick={ toggle }>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" isOpen={ isOpen } onClick={ toggle }>
                        Contact Me
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--color-background2);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: all 0.5s ease;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};
`
const Close = styled(CloseIcon)`
    color: #fff;
    margin-right: 11px;
    margin-top: 5px;
`

const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div `
    color: #fff;
`

const SidebarMenu = styled.ul `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`

const SidebarLink = styled(LinkScroll) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--color-subtitle);
    cursor: pointer;
    transition-duration: 0.2s;
    transition-property: transform; 

    &:hover {
        color: var(--color-borders);
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
`