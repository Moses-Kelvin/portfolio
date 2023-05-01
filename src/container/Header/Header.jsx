import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import images from "../../constants/images";

const scaleVariants = {
   whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transform: {
         duration: 1,
         ease: "easeInOut",
      },
   },
};
const Header = () => {
   return (
      <div className="app__header app__flex">
         <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__header-info"
         >
            <div className="app__header-badge">
               <div className="badge-cmp app-flex">
                  <span> <IconContext.Provider value={{ color: '#2D283E' }}>
                     <BsFillEmojiSmileUpsideDownFill />
                  </IconContext.Provider></span>
                  <div style={{ marginLeft: 20 }}>
                     <p className="p-text">Hello, I am </p>
                     <h1 className="head-text">Kelvin</h1>
                  </div>
               </div>

               <div className="tag-cmp app-flex">
                  <p className="p-text ">Frontend Developer</p>
               </div>
               <div className="tag-cmp app-flex">
                  <p className="p-text ">Bsc Geomatics</p>
               </div>
            </div>
         </motion.div>

         <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delayChildren: 0.5 }}
            className="app__header-img"
         >
            <img alt="" src={images.kelvin}/>
            <motion.img
               whileInView={{ scale: [0, 1] }}
               transition={{ duration: 1, ease: "easeInOut" }}
               src={images.circle}
               alt="profile circle"
               className="overlay_circle"
            />
         </motion.div>

         <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
         >
            {[images.react, images.redux, images.firebase].map((circle, index) => (
               <div className="circle-cmp app__flex" key={`circle-${index}`}>
                  <img src={circle} alt="circle"></img>
               </div>
            ))}
         </motion.div>
      </div>
   );
}

export default AppWrap(Header, "home");
