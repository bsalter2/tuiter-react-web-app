import React from "react";
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import authReducer from "./reducers/auth-reducer";
import RegisterScreen from "./user/register-screen";

const store = configureStore(
    {
        reducer: {
            who: whoReducer, tuits: tuitsReducer,
            user: authReducer
        }
    });

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
                        <NavigationSidebar />
                    </div>
                    <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-9 col-sm-9">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                        </Routes>
                    </div>
                    <div className="col-xxl-3 col-xl-3 d-none d-xl-block">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter
