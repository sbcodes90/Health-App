import React from 'react'
import logo from '../images/newlogo.png'
import logoBackground from '../images/logobackground.png'
import { Link } from 'react-router-dom';

export const Welcome = () => {

  return (
    <>
      <div className="flex justify-center">
        <img src={logoBackground} alt={"logo"} />
      </div>
      <div className="h-screen bg-[#f97316] text-white">
        <h1 className="text-4xl font-extrabold text-center p-20">
          Welcome Back
        </h1>
        <div id="button-container" className="flex justify-around">
        <button className="bg-white text-[#f97316] px-20 py-5 rounded-full font-bold">Spice it Up</button>
        <button className="bg-white text-[#f97316] px-10 py-5 rounded-full font-bold"><Link to={'/options'}>Go to Food Categories</Link></button>
        </div>
      </div>
 
    </>
  );
}

