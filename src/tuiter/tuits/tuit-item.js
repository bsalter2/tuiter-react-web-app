import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import { BiX } from "react-icons/bi";
import TuitStats from "./tuit-stats";

const TuitItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.png"
   }
 }
) => {

  const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

 return(
  <>
   <div className="row align-items-center">
   <div className="col-auto">
       <img width={70} className="float-end rounded-3" src={`../images/${tuit.image}`} alt=""/>
     </div>
     <div className="col-10">
       <div>
        <span>
            {tuit.userName} {tuit.handle} . {tuit.time} 
            <BiX class="float-end" onClick={() => deleteTuitHandler(tuit._id)} />
            </span>
        </div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
   </div>
   <br/>
   <TuitStats key={tuit._id} tuit={tuit}/>
   </>
 );
};
export default TuitItem;