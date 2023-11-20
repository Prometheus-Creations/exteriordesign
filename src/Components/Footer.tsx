/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import '../css-styling/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>Locate Us</h4>
                        <a href="https://www.google.com/maps?q=3917+W+1187th+st+Torrance,+ca+90504" target="_blank" rel="noopener noreferrer">
                            <p>3917 W 1187th st Torrance, CA 90504</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Contact Us</h4>
                        <p >Call: <a href="tel:+13105085523">(310)-508-5523</a></p>
                        <p >Email: <a href="mailto:akbarsauto310@gmail.com">akbarsauto310@gmail.com</a></p>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Social Media</h4>
                            <a href="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                    </div>
        
                    <hr />

                    <div className= "sb_footer-below">
                        <div className="sb_footer-copyright">
                            <p>
                                @{new Date().getFullYear()} AkbarsAuto. All right reserved.
                            </p>
                        </div>
                    </div>
                    <div className="sb_footer-copyright">
                            <div>
                                <Link to="/privacy" className="nav-link">Privacy Policy</Link>
                            </div>
                            <div>
                                <Link to="/disclaimer" className="nav-link">Disclaimer Notice</Link>
                            </div>    
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Footer