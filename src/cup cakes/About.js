import React from 'react';
import {
    Container,Row,Col
} from 'reactstrap';

import './styles/LandingPage.scss';


export default function About(){


    return (
        <>
    
    <section className="about py-5" id="about">
       <Container>
          <Row>
         <Col xs="10" className="mx-10 my-5" md="6">
         <h1 class="text-capitalize">about <strong class="banner-title">us</strong></h1>
                    <p class="my-4 text-muted w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
                            beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                            porro at dolorum! Ad!</p>
                            <a href="#" classs="btn btn-outline-secondary btn-black text-uppercase">explore</a>
                </Col>

                <Col xs="10" className=" mx-auto align-self-center my-5" md="6">
                    <div className="about-img__container">
                    <img src={require('./img/sweets-1.jpeg')} className="img-fluid" alt="About img" />
                    </div>
                </Col>
              </Row>
           </Container>
        </section>
        </>
    )
}