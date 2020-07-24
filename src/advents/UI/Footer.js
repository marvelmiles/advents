import React from 'react';
import { Container,Row,Col } from 'reactstrap';

/**
* @author marevl miles
* @function Footer
**/

const Footer = (props) => {
  return(
 
    <section id="footer">

    <Container fluid={true}>
    
    <Row className="py-5 cus-bg-sec" id="contact">
    <Col className="" xs="12" md="6" >
    <img className="mb-2" src={require("../image/logo.png")} width="80" height="30" alt="Image" />
                 <p className="small text-muted my-3 font-weight-light">
                   A technology startup based somewhere in the world.  making the finest <br className="d-none d-sm-block d-md-none" />  bluetooth
                   speakers ever made.  You'll know our location if you really love us.
                 </p>
    
               <div className="footer-text">
                 <p className="small font-weight-normal cus-text-pri">
                   Copyright © {new Date().getFullYear()} Advent Inc. All Rights Reserved.
                 </p>
               </div>
    </Col>
    
    <Col  xs="12" md="6">
    
    <div id="contact" className="contact">
                 <i className=" my-2 fas fa-comment-alt cus-text-pri fa-2x"></i>
                 <h3 className="cus-text-pri">Need Help ?</h3>
                 <p className="small text-muted my-3 font-weight-light">
                   Contact our 24/7 customer support if you have any <br className="d-sm-none d-md-block" /> questions. We'll help you out.
                 </p>
                 <a href="mailto:support@gmail.com" className="small font-weight-normal cus-text-pri ">support@gmail.com</a>
               </div>
    
    </Col>
       </Row>      
       </Container>        
           </section>
    
   )

 }

export default Footer;