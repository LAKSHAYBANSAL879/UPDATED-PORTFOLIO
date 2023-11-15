import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import Resume from "./Components/Portfolio/Resume";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    
      <div className= "mainBg overflow-hidden">
        <Navbar />
       <Home/>
       <About/>
       <Projects/>
       <Resume/>
       <Contact/>

      </div>
    
  );
}

export default App;
