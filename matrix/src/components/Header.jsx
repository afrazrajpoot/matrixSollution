import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link"; // Import HashLink from react-router-hash-link
import { Nav } from "./Nav";
// import { useGlobalContext } from "../../context/GlobalContext";
import { useGlobalContext } from "../context/GlobalContext";
import Contact from "./Contact";

const Header = () => {
  const { state, setState, contactState, setContactState } = useGlobalContext();

  const toggleNav = () => {
    setState(true);
    setContactState(false);
  };

  const toggleContact = () => {
    setState(false);    
    setContactState(true);
  };

useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>300){
      document.querySelector("header").classList.add("sticky")
    }else{
      document.querySelector("header").classList.remove("sticky")
    }
  }
window.addEventListener("scroll",handleScroll);
return ()=>{
  window.removeEventListener("scroll",handleScroll)
}
},[])
  return (
    <>
      {state && state ? (
        <Nav />
      ) : (
        <header  className="sticky">
          <div className="header">
            {/* Use HashLink component instead of regular anchor element */}
            <HashLink
              smooth
              to="/"
              title="Matrix Solutions"
              className="logo ir"
            >
              Matrix
            </HashLink>
            <div className="menu ir" onClick={toggleNav}>
              Menu
            </div>
            <div className="contact-icon ir" onClick={toggleContact}>
              contact-icon
            </div>

            {contactState ? <Contact /> : ""}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
