import React,{ useState } from 'react'
import {
    Container,Row,Col,Navbar,Nav,Collapse,NavbarBrand,NavItem,NavLink
} from 'reactstrap';

/**
* @author marvel miles
* @function Header
**/

const Header = (props) => {
   
     const [isOpen, setIsopen] = useState(false);
         
            const toggle = ()=>{
            setIsopen(!isOpen);
        }
        return (
       
      <Navbar expand="sm" id="navbar" className="fixed-top nav-top">
            
            <NavbarBrand className="text-muted"><img className="ml-2 ml-sm-3" src={require("../image/logo.png")} width="80" height="30" alt="Image" /></NavbarBrand>
               
        
            <button className="d-block d-sm-none navbar-toggler" onClick={toggle} data-toggle="collapse" data-target="nav-collapse"> 
            <span className="sr-only">Toggle Navigation</span>
            <i className="fas fa-bars"></i>
            </button>    
    
        <Collapse isOpen={isOpen}  navbar>
        
        <Nav className="text-capitalize ml-auto" id="nav-collapse" navbar>
            <NavItem><NavLink href="#header" className="text-muted mx-2 text-capitalize">Product</NavLink> </NavItem>
            <NavItem><NavLink href="#features" className="text-muted mx-2 text-capitalize">features</NavLink> </NavItem> 
            <NavItem><NavLink href="#testimonial" className="text-muted mx-2 text-capitalize">reviews</NavLink></NavItem> 
            <NavItem><NavLink href="#pricing" className="text-muted mx-2 text-capitalize">  pricing</NavLink></NavItem> 
            <NavItem><NavLink href="#contact" className="text-muted mx-2 text-capitalize">contact</NavLink></NavItem> 
        </Nav>
    
        </Collapse>
    </Navbar>
     
    
     
        );
    }
    

export default Header;