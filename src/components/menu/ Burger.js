// Burger.js
import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Burger = () => {
        return(


          <Navbar color="faded" light>
          <NavbarToggler onClick=""className="test">
            <img className='toto' src="https://www.hcss.nl/themes/hcss/images/mobile-menu.png(5 ko)
   https://www.hcss.nl/themes/hcss/images/mobile-menu.png
   " alt="" style = {{width: 100, height:100}} />
            </NavbarToggler>
          <NavbarBrand className="mr-auto">
          </NavbarBrand>
          <Collapse>
            <Nav navbar >
              <NavItem>
                <NavLink className='items' href="./">Homepage</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='items' href="/AllMovie">All Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='items' href="/Charlist">Characters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='items' href="/bio">Biography</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='items' href="/quizz">Quiz</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        



        )
}

export default Burger;