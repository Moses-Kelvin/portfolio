import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import Header from "./container/Header/Header";
import Contact from "./container/Contact/Contact";
import About from "./container/About/About";
import Work from "./container/Work/Work";
import Skills from "./container/Skills/Skills";

const App = () =>  {
   return (
      <div className="app">
         <Navbar />
         <Header />
         <Contact />
         <About />        
         <Work />
         <Skills />         
      </div>
   );
}

export default App;
