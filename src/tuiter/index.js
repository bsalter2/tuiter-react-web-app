import React from "react";
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer,tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
        <div>
          <Nav />
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-0 col-sm-0">
              <NavigationSidebar />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
              <Routes>
                <Route path="/home" element={<HomeScreen/>} />
                <Route path="/explore" element={<ExploreScreen/>} />
                <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                <Route path="/profile" element={<ProfileScreen/>}/>
              </Routes>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-0 col-md-0 col-sm-0">
              <WhoToFollowList/>
            </div>
          </div>
        </div>
        </Provider>
      );     
 }
 export default Tuiter
 