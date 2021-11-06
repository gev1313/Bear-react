import React from "react";
import {Link} from "react-router-dom";
import styles from "./Cards.module.css"

const Cards = ({items, type}) => {
    return (
            items.map(item => (
              <div className ={styles.cards} >
                  <Link to={`${type}/${item.id}`} >
                    <img src={item.image_url} alt="User img" className={styles.img}/>
                  </Link>
                  <p className={styles.name}>{item.name}</p>
                  <p className = {styles.tagline}>{item.tagline}</p>
                  <svg className={styles.star}
                      stroke="green"
                      id={item.id}
                  // style="fill:{favorites.some(el => el.id === randomData.randomBear[0]?.id) ? "yellow" : "green"}"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                     >
                      <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"/>
                  </svg>
               </div>
             
            )) 
          
    )
     
}

export default Cards