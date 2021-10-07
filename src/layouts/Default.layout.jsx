import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.jsx";

const DefaultLayout = (props) => {
  return (
    
      <>
      <Navbar/>
      <HeroCarousal />
      {props.children}
      </>
      
    
  );
};

export default DefaultLayout;