import React from 'react'
import styled from 'styled-components'
import { FaBitcoin } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
      <>
    <Nav>
       <NavMenu>
        <a>
            <Link to="/">
                <span style={{color:'darkorange'}}>Home</span>
            </Link>
        </a>
        <a>
            <Link to="/crypto">
                <span>Crypto</span>
            </Link>
        </a>
        <a>
            <Link to="/bitcoin">
                <span>Bitcoin</span>
            </Link>
        </a>
       </NavMenu>
        <Icon>
            <FaBitcoin style={{color: 'orange', fontSize: '40px'}}/>
        </Icon>
    </Nav>
    <Outlet />
    </>
  )
}

export default Header;



const Nav = styled.nav`
    height: 60px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    width: 100%;
`


const NavMenu = styled.div`  
    flex: 1;
    display: flex;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 8px;
        cursor: pointer;
        text-decoration: none;

        span {
            font-size: 19px;
            letter-spacing: 1.32px;
            position: relative;
            color: #cc0759;
        }
        
    }
`

const Icon = styled.div`
    display: flex;
    margin-right: 60px;
`
