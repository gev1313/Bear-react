import React from "react";
import Search from "../sherd/Search";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
   <div className={styles.header}>
      <div className = {styles.pageName}>
         <p className = {styles.theBeerBank}>The Beer Bank</p>
         <p className = {styles.findYourFavourite} >Find your favourite beer here</p>
         <Search/>
         <a className={styles.home} href="http://localhost:3000/">HOME</a>
         <Link className={styles.favourite} to="/favorites" >FAVOURITE</Link> 
      </div>
    </div>
 )
}
export default Header


