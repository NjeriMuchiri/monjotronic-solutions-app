import React from "react";
import '../App.css';
import MainFooter from '../components/mainfooter';

const AboutUs = () =>{
    return(
        <>
        <body>
            <div className="about-container">
                <article className="about-banner">
                    <h2 className="about-title">About us</h2>
                    <div className="about-part">
                        <p className="aboutus-info">
                          <span>M</span>onjotronic solutions is an IT based company that was established back in the year 2016. It's 
                          purpose was to fill the gap 
                          of some of the IT needs amongst people.
                          Our main goal is to have a great customer service whereby, if any 
                          of our clients is in need we deliver.
                          We have partnered with a number of big,medium sized and small companies throughout Kenya whom 
                          we work with hand in hand to deliver a great customer experience 
                          through prompt, professional and high end service by our own abled skilled,team of experts.We believe that we have filled the unemployment gap by employing youths to work with and for our company.
                          </p>
                        <p className="aboutus-info-2"> 
                            Our services are proactive so as to avoid bad customer experience,for a happy customer 
                            is a successful business.We look forward to dealing with new clients whom we believe will have the best services delivered to you by us. Contact us and get a quotation for any of our services,and we will be happy to get back to you as soon as possible. 
                        </p>


                    </div>
                </article>

            </div>
          
            </body>  
            <MainFooter/>
          </>
          
    );
   
};
 
export default AboutUs;
