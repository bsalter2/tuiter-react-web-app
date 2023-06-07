import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "username": "SpaceX",
     "time": "2h",
     "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.png",
     "handle": "@example"
   }
 }
) => {
 return(
  <li className="list-group-item ">
   <div className="row align-items-center">
     <div className="col-10">
       <div>{tuit.username} . {tuit.time} </div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} length={200} className="float-end rounded-3" src={`../images/${tuit.image}`} alt=""/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;