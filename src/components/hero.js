import React from 'react';
import logo from '../images/MM.png'

const Hero = () => {

  return (
    <h1>
      <div className="image animate">
        <a href="#"><img src={logo} alt="murraymac records logo" /></a>
      </div>
      <div className="text">
        <div className="animate delay">MurrayMac</div>
      </div>
      <div className="text">
        <div className="animate delay2">Records</div>
      </div>
    </h1>
  )
}

export default Hero

