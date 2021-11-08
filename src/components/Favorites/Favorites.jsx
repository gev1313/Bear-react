import React, { useState } from "react";
import Cards from "../sherd/Cards";
import styles from "./Favorites.module.css"

const Favorites=()=>{
   return (
     <div className={styles.kontainer}>
        <Cards items={JSON.parse(localStorage.getItem('favorites'))} type="bears"/>
     </div>
    )
}
export default Favorites  
