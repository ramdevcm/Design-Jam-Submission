import React from 'react';
import logo from '../img/logo.png';
import award from '../img/award.png'



const Footer = () => {
  return (
    <div id="dk-footer" class="dk-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                        <a href="/" className="footer-logo">
                            <img src={logo} alt="footer_logo" className="img-fluid" />
                        </a>
                        <p className="footer-info-text">
                           Best Donut company  in the world..
                        </p>
                        <div className="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                          
                    </div>
                     
                    <div className="footer-awarad">
                        <img src={award} alt="cc" />
                        <p>Best Seller 2019</p>
                    </div>
                </div>
                    
                <div className="col-md-12 col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-us">
                                <div className="contact-icon">
                                    <i className="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                                    
                                <div className="contact-info">
                                    <h3>Kerala India</h3>
                                    <p>Payyavur Kannur</p>
                                </div>
                                    
                            </div>
                             
                        </div>
                   
                        <div className="col-md-6">
                            <div className="contact-us contact-us-last">
                                <div className="contact-icon">
                                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                  
                                <div className="contact-info">
                                    <h3>91 88 034166</h3>
                                    <p>Give us a call</p>
                                </div>
                                    
                            </div>
                                
                        </div>
                             
                    </div>
                      
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>Useful Links</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                </ul>
                              
                                <ul>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                </ul>
                                
                            </div>
                               
                        </div>
                          
                                                
                    </div>
                        
                </div>
               
            </div>
             
        </div>
        

        <div className="copyright">
            <div className="made">
                <span>Made with <i className="fa fa-heart"></i> in India</span>
                <br />
                <span> Copyright © 2021, All Right Reserved </span>
                <br />
                <span>Designed &amp; Developed By</span>
                <br />
              
                <span>&lt;/&gt;Ramdev C M&lt;/&gt;</span>
            </div>
        </div>
      
</div>


  )
}

export default Footer