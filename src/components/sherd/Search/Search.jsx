import React, { useState } from "react";

import styles from "./Search.module.css"

import { Link, useLocation } from "react-router-dom";
// import { urlParams } from "../../../utils/utils";
const urlParams = (url) => {
    const params = {}
      if(url.indexOf("?") !== -1){
        const arr = url.slice(1).split('&')
          for(let i = 0; i<arr.length; i++){
             let el =  arr[i].split("=")
             params[el[0]] = el[1]
          }
      }
     return params
  }

const Search = ({type}) => {
    const { search } = useLocation();
    const params = urlParams(search)
    const [inputValue, setInputValue] = useState(params.value || "")

    return (
        <div >
           
            <Link to={type ==="bears" ? `/bears?value=${inputValue}` : `/bears?value=${inputValue}`}>
             <input type="text" className={styles.input} placeholder="Search for beer name"  value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            </Link>

        </div>
    )
}





export default Search