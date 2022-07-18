import React from 'react';
import "./Logo.css"
import logo from "../../assets/img/logo2.png"
const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt="logo" className='logo__img'/>
    </div>
  );
}

export default Logo;
