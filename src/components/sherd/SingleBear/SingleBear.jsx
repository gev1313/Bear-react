import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router"
import styles from "./SingleBear.module.css"
import { getSinglBearsRequest } from "../../../store/action-creaters/bearsActionsCreator"


const SingleBear=()=>{
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const bearData = useSelector(state => state.bearsReducer)
    console.log(bearData,999999999)
  
useEffect( ()=> {
    dispatch(getSinglBearsRequest(id))
},[])

const onBack = () => {
    history.goBack()
}

 return (
     <div >
        {bearData.resultsFlag ? 
          <div>
            <div className={styles.wrap}>
                  <div className={styles.conternerr}>   
                    <div className={styles.imageInfoContayner}>
                      <img className={styles.singleImg}src={bearData.singleBear[0]?.image_url} />
                      <div className={styles.beerInfo}>
                      <p className={styles.x} onClick={()=>onBack()}>X</p>
                      <p className={styles.namePopap}>
                              {bearData.singleBear[0]?.name}
                            </p> 
                            <p className={styles.taglinePopap}>
                              {bearData.singleBear[0]?.tagline}
                            </p> 
                            <div className={styles.ibuAbvEbcConteiner}>
                                <div className={styles.ibuAbvEbc}>IBU: {bearData.singleBear[0]?.ibu}</div> 
                                <div className={styles.ibuAbvEbc}>ABV: {bearData.singleBear[0]?.abv}%</div> 
                                <div className={styles.ibuAbvEbc}>EBC: {bearData.singleBear[0]?.ebc}</div> 
                            </div>            
                            <p className={styles.description} >
                                {bearData.singleBear[0]?.description}
                            </p>
                            <p>
                                <h2 className={styles.bestServedWith}>Best served with:</h2>
                            </p> 
                            <ul>
                              <li className={styles.li}>
                                {bearData.singleBear[0]?.food_pairing[0]}
                              </li>
  
                              <li className={styles.li}>
                                {bearData.singleBear[0]?.food_pairing[1]}
                              </li>
  
                              <li className={styles.li}>
                                {bearData.singleBear[0]?.food_pairing[2]}
                              </li>
                         
                              <li className={styles.li}>
                                {bearData.singleBear[0]?.food_pairing[3] || '---'}
                              </li>
                            </ul> 
                          
                      </div>
                    </div> 
                       <div className={styles.random}> 'kov</div>   
                   </div>           
                </div>           
          </div>: 
          
            <div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXv2CnDyvkyhiBLXYcreFhuw9QRQk7l7nog&usqp=CAU' />
            </div>
          }
      </div>
 )
}
export default SingleBear










