import React from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import sectionData from "./datas/sectionData";

const App = ()=>{
    return (
        <div>
            <NavBar/>
            <AboutMe/>
            {
                sectionData.map((value)=>(
                       <Section  title={value.title} description={value.description} />
                ))
             }
        </div>
    )
}

export default App;