import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getRandomBearRequest } from "../../../../store/action-creaters/bearsActionsCreator"
import styles from "./RandomBear.module.css"
import { useParams } from "react-router"
import Cards from "../../Cards"
import Star from "../../../../img/svg/star"

const RandomBear=({rand})=>{
  const { id } = useParams()
  const dispatch = useDispatch()
  const randomData = useSelector(state => state.bearsReducer)
console.log(randomData,454545)
  useEffect( ()=> {
    dispatch(getRandomBearRequest())
},[id])

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
         <div>
          <Link to={`${randomData.randomBear[rand]?.id}`}>
             <img className={styles.img} src={randomData.randomBear[rand]?.image_url} /> 
          </Link>
          <p className={styles.name}>{randomData.randomBear[rand]?.name} </p>
          <p className={styles.tagline}>{randomData.randomBear[rand]?.tagline}</p>
          <Star className={styles.star} onStarClick={onStarClick} item={randomData.randomBear} color={JSON.parse(localStorage.getItem('favorites')).some(el => el.id === randomData.randomBear[rand]?.id) ? "yellow" : "green"}/>
        </div>
      ) 

   
}
export default RandomBear



