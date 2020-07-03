import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component{
   state = {
      isOpen:false
   }
  
   toggle = () =>{
       this.setState({
         isOpen:!this.state.isOpen
       });
   }

   render(){
       return(
        <div>
        <Navbar color="dark" dark expands="sm" className="mb-5">
         <Container>
            <NavbarToggler onClick={this.toggle} />
             <NavbarBrand href='/'>ShoppingList</NavbarBrand>
             <Collapse isOpen={this.state.isOpen} navbar>
                 <Nav className="ml-auto" navbar>
                     <NavItem> 
                        <NavLink href="https://github.com/milindbajaj">
                             Created by Milind Bajaj
                         </NavLink>
                     </NavItem>
                 </Nav>    
             </Collapse>
         </Container>
        </Navbar>
    </div>
    );
   }
}

export default AppNavbar;