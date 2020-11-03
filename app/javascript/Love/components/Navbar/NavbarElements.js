import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    `
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `;    
export const NavLogo = styled(LinkR)`
    color: #fff;
    font-family: Fondamento, cursive;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.9rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #fff;
        transform: scale(1.1);
        transition: transform .3s;
    }
`;

export const MobileIcon = styled.div`
    display: none;

 @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
 }
 `;

 export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    
    @media screen and (max-width: 768px) {
        display: none;
    }
    `;

export const NavItem = styled.li`
        height: 80px;
`;

export const NavLinks = styled(LinkS)`

    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Roboto Slab;
    font-size: 20px;

    &.active {
       color: white;
        border-bottom: 6px solid #ac1010;
        transform: scaleX(1);
        transition: transform 950ms ease-in-out;
    }
    &:hover {
        color: white;
        transform: scale(1.1);
        transition: transform .3s;
    }`;

    export const NavBtn = styled.nav`
        display: flex;
        align-items: center;
        
        @media screen and (max-width: 768px) {
            display: none;
        }
        `
    export const NavBtnLink = styled(LinkR)`
        border-radius: 20px;
        background: #ac1010;
        white-space: nowrap;
        padding: 8px 22px;
        color: #fff;
        font-family: Roboto Slab;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-zoom-out;
        text-decoration: none;
        
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        } `   
