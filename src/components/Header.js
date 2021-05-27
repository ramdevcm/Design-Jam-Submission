import React, {useState} from 'react';
import { AccountBox } from './accountBox';
import Navbar from './Navbar';



const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    function togglePopup() {
        setIsOpen(!isOpen);
      }
  
    return (
        <div className='banner'>
            <Navbar/>
            <div className="banner__content">
          
                {isOpen &&
                <div className="login-container">
                  
             <AccountBox />
             <div className='container-custom-login'>
                   <div className="banner__text">
                   <h3>#1 Sold Donuts in the world</h3>
                   <h1>LaMar's Donuts</h1>
                   <p>
                   To eat is a necessity, but to eat intelligently is an art..
                   </p>
            </div>
            </div>
            </div>
          
                     }
                     {!isOpen &&
               <div className="container">
               <div className="banner__text">
               <h3>#1 Sold Donuts in the world</h3>
               <h1>LaMar's Donuts</h1>
               <p>
               To eat is a necessity, but to eat intelligently is an art..
               </p>
                   <div className="banner__btn">
                     
                       <button type="button" onClick={togglePopup} className='btn btn-smart'>Login to Grab now @45% OFF</button>
                      
                   </div>
                     
                   </div>
                  
               </div>
}
            </div>
        </div>
    )
}

export default Header
