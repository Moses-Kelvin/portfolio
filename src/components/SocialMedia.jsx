import React from "react";
import { BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/tanishka__yadav">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://wa.me/08108989321">
               <BsWhatsapp />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/kelvin-moses-90538023a">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:moseskelvin683@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
