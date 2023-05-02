import React from "react";
import { BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/Kelvin_2323" target="_blank">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://wa.me/+2348108989321" target="_blank">
               <BsWhatsapp />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/kelvin-moses-90538023a" target="_blank">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:moseskelvin683@gmail.com" target="_blank">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
