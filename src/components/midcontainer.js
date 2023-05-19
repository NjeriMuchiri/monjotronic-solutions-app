import React from 'react';
import '../App.css';
import dahua from '../images/dahua.png';
import hp from '../images/HP.png';
import dell from '../images/dell.png';
import microtik from '../images/microtik.png';
import netis from '../images/netis.png';
import ubiquiti from '../images/ubiquiti.png';
import tronic from '../images/tronic.png';
import microsoft from '../images/microsoft.png';
import zkteco from '../images/ZKTeco.png';


function MidContainer(){
    return(
        <>
           <div className="section-logo">
      
       <div className="logo-container">
         <img src={dahua} alt="dahua brand logo" className="logo-img" height="100" width="100"/>
         <img src={hp} alt="Hp brand logo" className="logo-img" height="100" width="100" />
         <img src={dell} alt="dell brand logo" className="logo-img" height="40" width="50" />
         <img src={microtik} alt="microtick brand logo"  className="logo-img" height="100" width="100"/>
         <img src={netis} alt="netis brand logo"  className="logo-img" height="100" width="100"/>
         <img src={ubiquiti} alt="ubiquiti brand logo"  className="logo-img" height="100" width="100"/>
         <img src={tronic} alt="tronic brand logo"  className="logo-img" height="100" width="100"/>
         <img src={microsoft} alt="microsoft brand logo"  className="logo-img" height="100" width="100"/>
         <img src={zkteco} alt="ZKTeco brand logo" className="logo-img" height="100" width="100"/>
       </div>
          </div>

        </>

    );
};

export default MidContainer;