import React, { useEffect, useState ,useMemo} from "react";
import { useLocation } from "react-router-dom";
import Cards from "../sherd/Cards";
import styles from "./Bears.module.css"
import { getBearsRequest } from "../../store/action-creaters/bearsActionsCreator";
import { useDispatch, useSelector } from "react-redux";
import urlParams from "../../utils/utils";


  
const Bears = () => {
    const { search } = useLocation();
    const params = useMemo(()=> urlParams(search),[search]);
    const bearsData = useSelector(state => state.bearsReducer)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        if(params?.value){
            dispatch(getBearsRequest(params?.value,page))
        }
    },[params?.value,page] )

    useEffect(()=> {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        localStorage.setItem('favorites', JSON.stringify(favorites || []));
    },[])



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






// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         alert("you're at the bottom of the page");
//     }
// };



// let scroolPage = 1
// let isFatched = true


// if(window.location.search.includes("favorite") == false){
//     window.addEventListener('scroll', function(e) {
//       const params =  urlParams(window.location.search)

//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             if(isFatched){
//               isFatched = false
//                 setTimeout(()=>{
//                    scroolPage = scroolPage + 1
//                    Bears(params?.name,scroolPage)
//                 },1000)
//             }
//         }
//     });
// }


export default Bears
