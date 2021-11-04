import React from "react";
import { Link } from "react-router-dom";
import Search from "../sherd/Search";
import styles from "./Header.module.css";


const Header = () => {
  return (
   <div className={styles.header}>
      <div className = {styles.pageName}>
         <p className = {styles.theBeerBank}>The Beer Bank</p>
         <p className = {styles.findYourFavourite} >Find your favourite beer here</p>
         <Search/>

 <a className={styles.home} href="file:///C:/Users/Home/Desktop/Bear/index.html">HOME</a>
<a className={styles.favourite} href="file:///C:/Users/Home/Desktop/Bear/index.html?favorite" >FAVOURITE</a> 

      </div>
    </div>
 )
}

export default Header


