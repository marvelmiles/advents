import React, { useState,useEffect,useContext } from 'react';
import styled from 'styled-components'; 
import {
 Container,Row
} from 'reactstrap';
import Context from './components/functions';
import './styles/LandingPage.scss';



export default function Banner(){

 const [isOpen, setIsopen] = useState(false);
  

 const appContext = useContext(Context);
 const { items,updates }  = appContext;

 const [cartItems,setCarts] = useState([]);
 

useEffect(()=>{
          
    setCarts(cartItems => cartItems.concat(items) );
       console.log(items);

},[updates]);
  
 const toggle = () =>{
     setIsopen(!isOpen);
 }
 

//  const BannerTitle = styled.strong`
//  color:#ef7998;
//  font-size:4rem;
//  `;

//  const BannerLink = styled.a.attrs( props =>(
//     {
//         className:props.className,
//         href:props.href
//     }
//  ))`
//  font-size:1.5rem;
//  color: #333;
//  border: 0.2rem solid #333;
//  &:hover{
//     background:#333;
//     color:#ef7998; 
//  }
//  `;


//  const Cart = styled.div.attrs(props => (
//      {
//     id:props.id,
//     className:props.className
//      }
// ))` 
// `;

const getItems = _=>{
    
  return  cartItems.map((item,i)=>{
         
        return (
            <>
         
         <div className="cart-item text-capitalize my-3 d-flex justify-content-between" key={i} >
                   {/* <img src={require(`./img-cart/${item.src}`)} className="img-fluid rounded-circle" id="item-img" alt="" /> */}
                      
                   <div className="item-text">

          <p id="cart-item-title" className="font-weight-bold mb-0">{item.name}</p>
          <span>$</span>
            <span id="cart-item-price" className="cart-item-price" class="mb-0">{item.amount}</span>
         </div>
     <a href="#" id='cart-item-remove' className="cart-item-remove">
         <i class="fas fa-trash"></i>
         </a>
                       </div>
            </>
        )
    })

}
 
    return(
        <>
   
      { /* Banner */ }
        
        <Container fluid={true} >
       <Row className="max-height justify-content-center align-items-center">

          <div className="col-10 mx-auto banner text-center">
              <h1 className="text-capitalize">Welcome to <strong className="banner-title">Cup Cakes</strong></h1>
              <a href="#store" className="btn text-uppercase my-2 banner-link">explore</a>
              </div>  
               
               <div id="cart" >
                  {  items.hasOwnProperty('src') && getItems() }

                    {/* cart total */}
          <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
            <h5>total</h5>
            <h5> &#8358; <strong id="cart-total" class="font-weight-bold">00.00</strong> </h5>
          </div>
      {/* end cart total */}


          {/* cart buttons */}

          <div class="cart-buttons-container my-3 d-flex justify-content-around">
            <a href="#" id="clear-cart" className="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
            <a href="#" id="checkout" className="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
          </div>

        {/* end of  cart buttons */}

               </div>
             
            </Row>
            </Container>



            
        </>
    )
}