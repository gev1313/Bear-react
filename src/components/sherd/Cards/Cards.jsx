import React from "react";
import {Link} from "react-router-dom";
import styles from "./Cards.module.css"

const Cards = ({items, type}) => {
    return (
            items.map(item => (
               <Link to={`${type}/${item.id}`} className ={styles.cards}>
                 <div >
                    <img src={item.image_url} alt="User img" className={styles.img}/>
                    <p className={styles.name}>{item.name}</p>
                    <p className = {styles.tagline}>{item.tagline}</p>
                 </div>
              </Link>
            )) 
          
    )
     
}

export default Cards