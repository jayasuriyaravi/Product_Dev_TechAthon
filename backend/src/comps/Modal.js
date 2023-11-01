/*
this is the popup image
*/


import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <div>
      {/* <div style={{}}> */}
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      {/* <button style={{width:'100vw',justifyContent:'center'}}>delete</button> */}
    </motion.div>
    
    
    </div>
  )
}

export default Modal;