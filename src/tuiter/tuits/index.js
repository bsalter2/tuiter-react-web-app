import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

const TuitList = () => {
    const { tuits, loading } = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return (
        <ul className="list-group">
            {loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit =>
                    <li className="list-group-item">
                        <TuitItem key={tuit._id} tuit={tuit} />
                    </li>
                )
            }
        </ul>
    );
};
export default TuitList;