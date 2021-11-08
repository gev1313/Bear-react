import React, { useState } from "react";
import {Link} from "react-router-dom";
import Star from "../../../img/svg/star";
import styles from "./Cards.module.css"

const Cards = ({items, type}) => {
  const [isLocaleChanged,setIsLocaleChanged] = useState(false)

  const onStarClick = item => {
    let newFavoritesList
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const isHaveItem = favorites.some(el => el.id === item.id)

    if(isHaveItem) {
      newFavoritesList = favorites.filter(el => el.id !== item.id)
    }else{
      newFavoritesList = [item,...favorites]
    }
    localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
    setIsLocaleChanged(!isLocaleChanged)
  }

    return (
            items.map(item => (
              <div className ={styles.cards} >
                  <Link to={`${type}/${item.id}`} >
                    <img src={item.image_url} alt="User img" className={styles.img}/>
                  </Link>
                  <p className={styles.name}>{item.name}</p>
                  <p className = {styles.tagline}>{item.tagline}</p>
                  <Star className={styles.star} onStarClick={onStarClick} item={item} color={JSON.parse(localStorage.getItem('favorites')).some(el => el.id === item.id) ? "yellow" : "green"}/>
               </div>
            )) 
    )
}

export default Cards


