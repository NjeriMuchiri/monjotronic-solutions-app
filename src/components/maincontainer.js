import React from 'react';
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWrench} from '@fortawesome/free-solid-svg-icons';


function MainContainer(){

    return(
     <>
     <header className="container-div">
         <div className="container-banner">
            <div className="sect container-title"> Electronic Appliance <br/>Hardware & Software Repair.
                <p className="container-about">
                          Computer,laptop,printers and projectors.<br/>
                          Home Hi-Fi & Tv screens.
                          <br/>
                            < FontAwesomeIcon className="icon" icon={faWrench}/>
                         </p>
                         </div>
                         <div className="sector container-title">Internet Services
                <p className="container-about">
                          LAN & WLAN installation,support<br/>
                          and maintenance.<br/>
                          Structured cabling.<br/>
                          <button className="service-btn">
                            <a href="/networking/lanwlan">read more</a></button>
                         </p>
            </div>
                 <div className="sector1 container-title">ICT Equipment.
                <p className="container-about">
                          We got you covered,<br/>
                          for any equipment<br/>
                          you may need.<br/>
                          <button className="service-btn">
                            <a href="/serviceandmaintenance/ictequipment">read more</a></button>
                         </p>
                     </div>
                     <div className="sector2 container-title">CCTV Installation.
                <p className="container-about">
                          We offer cctv,<br/>
                          surveillance installation both<br/>
                          at offices and home.<br/>
                          <button className="service-btn">
                            <a href="/security/cctv">read more</a></button>
                         </p>
                     </div>
                     <div className="sector3 container-title">Electric-Fence.
                <p className="container-about">
                          Installation and maintenance,<br/>
                          of electric fences,<br/>
                          available.<br/>
                          <button className="service-btn">
                            <a href="/security/electricfence">read more</a></button>
                         </p>
                     </div>
                     <div className="sector4 container-title">Prev-Maintenance.
                <p className="container-about">
                          Maintenance of any,<br/>
                          Ictequipment available<br/>
                          just for you.<br/>
                          <button className="service-btn">
                            <a href="/serviceandmaintenance/preventivemaintenance">read more</a></button>
                         </p>
                     </div>
         </div>
     </header>
             </>
    )
};

export default MainContainer;