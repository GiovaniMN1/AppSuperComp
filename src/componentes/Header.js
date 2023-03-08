import React from "react"
import styled from "styled-components"

const Header=()=>{
    return(
        <BoxNav>
            <Nav>
                
                <NavItems>
                <Items><Itemsa>Home</Itemsa></Items>
                <Items><Itemsa>Personajes</Itemsa></Items>
                <Items><Itemsa>Buscar</Itemsa></Items>
                </NavItems>
            </Nav>
        </BoxNav>
    )
}

const BoxNav=styled.header`
    display: flex;
    height: 50px;
    width: 100%;
    
`
const Nav=styled.nav`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`
const NavItems=styled.ul`
    display: flex;
    width: 50%;
    height: 60px;
    justify-content: space-evenly;
    align-items: center;
    
`
const Items=styled.li`
    list-style: none;
    height: 60px;
    line-height: 60px;
    padding-right: 5px;
    padding-left: 5px;
    &:hover {
        background-color: #E94560;
            }
`
const Itemsa=styled.a`
    font-size: 1rem;
`
export default Header