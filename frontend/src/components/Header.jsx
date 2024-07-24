import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";


const Header = () => {
  return (
    <nav>
        <h1>DODO</h1>
        <main>
            
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#skills"}>Skills</HashLink>
            <HashLink to={"/#about"}>About </HashLink>
            <HashLink to={"/#services"}>Services</HashLink>
            <HashLink to={"/#contact"}>Contact</HashLink>
           
            
        </main>
    </nav>
  );
}

export default Header;