import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";
import TuitStats from "./tuit-stats";


const TuitList = () => {
    const { tuits } = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
          <li className="list-group-item">
         <TuitItem key={tuit._id} tuit={tuit}/> 
         </li>
         )
     }
   </ul>
 );
};
export default TuitList;