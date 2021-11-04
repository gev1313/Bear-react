import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { urlParams } from "../../utils/utils";
import Cards from "../sherd/Cards";
import styles from "./Users.module.css"
import { getBearsRequest } from "../../store/action-creaters/bearsActionsCreator";
import { useDispatch, useSelector } from "react-redux";


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
  
  
const Bears = () => {
    const { search } = useLocation();
    const params = urlParams(search);
    const bearsData = useSelector(state => state.bearsReducer)
    const [page, setPage] = useState(1)
  
    const dispatch = useDispatch()
 console.log(bearsData,121212)
    useEffect(() => {
       
        if(params?.value){
            dispatch(getBearsRequest(params?.value,page))
        }
    },[params?.value,page] )


    return (
        <div>
            {!bearsData.resultsFlag ? 
            <div className={styles.kontainer}>
            <Cards items={bearsData.bears.items} type="bears"/>
            </div> :  <div>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXv2CnDyvkyhiBLXYcreFhuw9QRQk7l7nog&usqp=CAU' />
              </div>}
        </div>
    )
}

export default Bears

