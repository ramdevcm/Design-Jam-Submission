import React from 'react';
import donuts from '../img/donuts.jpg'

const About = () => {
    return (
        <div className='about'>
        <div className="container">
           <div className="row-custom">
               <div className="col-6 p-25">
               
                <h3>About Us</h3>
                <h1>WELCOME TO DONUT HUT</h1>
                <p>
                Year 2020 is all about making the difference! Making a difference in health & hygiene, working & living style; and also a difference in cooking. We, at The Donut Company, are trying to do our part in making some difference in people’s lives - difference in terms of our delicious home-made food prepared in very hygienic conditions, in terms of taste, flavor & style of our food products and in terms of our customizable products. We hope that our products make some difference in your lives, or at the least bring some sweetness to your day!
Enjoy the difference!
</p>
                <div className="about__btn">
                    <a href="" className='btn btn-smart'>
                        READ MORE
                    </a>
                </div>
               
           
            </div>
               

               <div className="col-6">
           <div className="about__img">
               <img src={donuts} alt="donuts"/>
           </div>
           </div>
               </div>
           </div>
        </div>
    )
}

export default About
