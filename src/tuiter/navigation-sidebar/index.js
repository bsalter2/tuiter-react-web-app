import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "more"];
    return (
        <>
            <div className="list-group">
                {links.map((link) =>
                    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                        {link}
                    </Link>
                )}
            </div>
            <div className="list-group">
                {!currentUser && <Link className="list-group-item" to="/tuiter/login">   Login   </Link>}
                {!currentUser && <Link className="list-group-item" to="/tuiter/register">Register</Link>}
                {currentUser && <Link className="list-group-item" to="/tuiter/profile"> Profile </Link>}
            </div>
        </>

    );
};
export default NavigationSidebar;