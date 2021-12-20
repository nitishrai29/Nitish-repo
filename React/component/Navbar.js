
import { NavLink } from 'react-router-dom';

import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";
function NavBar() {
  return (
    <Navbar color="light" dark style={{marginBottom:'1rem'}}>
      <Container style={{height:"7rem"}}> 
        <NavbarBrand href="/" style={{marginLeft:"36rem" ,color:"black", fontWeight:"bolder"}}>User List</NavbarBrand>
        <Nav>
          <NavItem>
           <button style={{cursor: 'pointer',border: 'none', width: '108%', marginLeft:'-46px'}}> 
           <Link className="btn btn-light" to="/add" style={{marginLeft:"64rem",marginTop:"3rem", width:"8rem"}}>Add User</Link> </button>
          </NavItem>

          <NavItem>
           <button style={{cursor: 'pointer',border: 'none', width: '108%', marginLeft:'-46px'}}> 
           <Link className="btn btn-light" to="/all" style={{marginLeft:"64rem",marginTop:"3rem", width:"8rem"}}>All users</Link> </button>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>

)}

export default NavBar