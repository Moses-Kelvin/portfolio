import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import images from "../../constants/images";
import "./Contact.scss";

const Contact = () => {

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} alt="email-img" />
               <a href="mailto:moseskelvin683@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="app__footer-card">
            
               <img src={images.twitter} alt="twitter-img" />
               <a href="https://twitter.com/Kelvin_2323"  target="_blank" className="p-text">
               Twitter
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} alt="linkedin-img" />
               <a
                  href="https://www.linkedin.com/in/kelvin-moses-90538023a"
                  target="_blank"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} alt="Github-img" />
               <a href="https://github.com/Moses-Kelvin"  target="_blank" className="p-text">
                 GitHub
               </a>
            </div>
            <div className="app__footer-card">
            
            <img src={images.whatsapp} alt="whatsApp-img" />
            <a href="https://wa.me/+2348108989321" target="_blank" className="p-text">
            WhatsApp
            </a>
         </div>
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
