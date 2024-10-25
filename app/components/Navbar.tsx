import React from "react";
import Link from "next/link"
import style from "/styles/global.module.css";
import Blogs from "./blogs";

export default function Navbar(){
    return(
    
      <nav className={style.nav}>
        
          
        <a href="#"> Work</a> 
            
        <a href="#"> Blogs</a>
            
          
          
            <a href="#"> Contact</a>
          
  
        
      </nav>
      
    )
  }