import React from "react";
import Search from "../sherd/Search";
import styles from "./Header.module.css";

const Header = () => {
  return (
   <div className={styles.header}>
      <div className = {styles.pageName}>
         <p className = {styles.theBeerBank}>The Beer Bank</p>
         <p className = {styles.findYourFavourite} >Find your favourite beer here</p>
         <Search/>
         <a className={styles.home} href="http://localhost:3000/">HOME</a>
         <a className={styles.favourite} href="https://www.youtube.com/" >FAVOURITE</a> 
      </div>
    </div>
 )
}
export default Header


