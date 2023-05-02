import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";


const About = () => {
   const abouts = [
      {
         title: "Myself",
         description:
         "i have always loved the field of natural sciences since i was little. Mathematics and physics are my favourites, i love and enjoy solving problems related to these fields. Duiring my secondary school years, i discovered programming and it's math-like structure and logic. Through the help of online recoures such as programming bootcamps, documentations, e.t.c and  my developer friends, i have been able to cultivate my programming skill. I must affirm that programming is one of the best thing that that ever occured to me.",
         imageUrl: images.avatar,
      },
      {
         title: "Frontend Developer",
         description:
            "Love developing web applications/websites with smooth and great UI. i collaborate with my twin brother and other co-developer friends to provide solutions to problems, which comes easy for me, because i love thinking through a problem and coming up with an efficient solution. i'm concerned with the constant development and improvment of  my skill.",
         imageUrl: images.about02,
      },
      {
         title: "Education",
         description:
             "i'm a student of the department of Geomatics (Bsc Geomatics), at the university of Benin (uniben), as of 2021 till present. I have a current cgpa of 4.54 on a 5.0 scale.",
         imageUrl: images.uniben,
      },
      {
         title: "Web Development BootCamp",
         description:
            "Completed a web development bootcamp course by Angela Yu, and also a React complete guide course by Maxmillian Schwarzmuller, which i learnt and developed the following skills: react.js, redux, redux-toolkit, state management in react apps, using context-api, useReducer method and redux/redux-toolkit, optimization of react applications, debuging react applications, and typeScript.",
         imageUrl: images.about04,
      },
     
   ];
   return (
      <>
         <h2 className="head-text">
            About
            <span> Me!</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title}></img>
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg"
);
