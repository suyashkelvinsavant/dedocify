import React, { useState } from 'react';
import "./ScrollToTop.scss";

function ScrollToTop() {

    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <button
        type="button"
        className="btn btn-floating btn-lg"
        id="btn-back-to-top"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          display: visible ? 'inline' : 'none',
          backgroundColor: "#212529",
          border: "1px solid #32efe7",
          borderRadius: "50%",
        }}
      >
        <i style={{ fontSize: "25px", }} >👆🏻</i>
      </button>
  )
}

export default ScrollToTop