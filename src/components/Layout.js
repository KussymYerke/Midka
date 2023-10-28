import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
export default Layout;
