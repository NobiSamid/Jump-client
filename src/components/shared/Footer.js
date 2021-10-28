import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBlog,faPhone, faRegistered} from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare, faFacebookSquare, faGooglePlay, faAppStore, faMicrosoft, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
 


const Footer = () => {
    return (
        <div>
            <div className="elements">

             {/************************* Footer Headings **********************/}
                <div className="element">
                    <h1>Web</h1>
                </div>
                <div className="element">
                    <h1>Social</h1>
                </div>
                <div className="element">
                    <h1>App</h1>
                </div>

            {/************************* Footer Elements **********************/}
                <div className="element">
                    <h1><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faYoutubeSquare}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faGooglePlay}></FontAwesomeIcon></h1>
                </div>
                
                <div  className="element">
                    <h1><FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faAppStore}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faBlog}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></h1>
                </div>
                <div className="element">
                    <h1><FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon></h1>
                </div>
            </div>
            <div className='credit'><span>Developed by Khoundokar Sami un nobi Samid <FontAwesomeIcon icon={faRegistered}></FontAwesomeIcon></span></div>
        </div>
        
    );
};

export default Footer;