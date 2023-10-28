import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import React from "react";
import PostWrap from "./components/PostWrap";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route element={<Layout />}>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/post'} element={<PostWrap />} />
                  <Route path={'/profile'} element={<Profile />} />
              </Route>
          </Routes>
      </div>
  );
}

export default App;
