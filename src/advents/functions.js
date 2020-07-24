
import React from 'react'

/**
* @author marvel miles
* @function Totop
**/



export const debounce = function(fn,wait=200,immediate=true){
    let timeout;
    return function(){
      let context = this, args=arguments;
      let later = function(){
        timeout = null;
        if(!immediate) fn.apply(context,args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later,wait);
      if(callNow) fn.apply(context,args);
    }
  }


const Totop = (props) => {
  return(

    <div id="to-top" className="fixed-bottom to-top d-flex justify-content-center align-items-center font-weight-lighter ml-auto m-5">
    <i className="fas fa-arrow-up text-white" style={{cursor:'pointer'}} onClick={_=> window.scrollTo(0,0)}></i> 
  </div>
   )

 }

export default Totop;