import React from "react";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faComment, faShareSquare } from '@fortawesome/fontawesome-free-regular'
import {  faRetweet } from '@fortawesome/fontawesome-free-solid'
const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {

    const dispatch = useDispatch();

    return (
        <div className="row text-center ">

            <span className="col-3">
                <FontAwesomeIcon icon={faComment} />
                &nbsp;

                {tuit.replies}

            </span>
            <span className="col-3">
                <FontAwesomeIcon icon={faRetweet} />
                &nbsp;


                {tuit.retuits}

            </span>
            <span className="col-3">
                {tuit.liked ?
                <FontAwesomeIcon icon="fa-solid fa-heart" onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: !tuit.liked}))
                  } style={{color: "#f44343",}}/>
                :
                <FontAwesomeIcon onClick={() =>
                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: !tuit.liked}))
                  } icon="fa-regular fa-heart"/>
                }
                                &nbsp;
                {tuit.likes}

            </span>
            <span className="col-3">
                <FontAwesomeIcon icon={faShareSquare} />

            </span>
        </div>
    );
};
export default TuitStats;