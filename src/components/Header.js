import React from 'react';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className='banner'>
            <Navbar/>
            <div className="banner__content">
               <div className='container'>
                   <div className="banner__text">
                   <h3>#1 Sold Donuts in the world</h3>
                   <h1>LaMar's Donuts</h1>
                   <p>
                   To eat is a necessity, but to eat intelligently is an art..
                   </p>
                   <div className="banner__btn">
                       <a href="" className='btn btn-smart'>Grab now @45% OFF</a>
                   </div>
                   </div>
                  
               </div>
            </div>
        </div>
    )
}

export default Header
