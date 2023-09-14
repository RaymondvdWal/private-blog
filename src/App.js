import React, { useState } from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import BlogPosts from "./pages/blogposts/BlogPosts";
import MyBlog from "./components/blog/MyBlog";
import Login from "./pages/login/Login";
import Logout from "./components/Logout/Logout";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>

      <Navigation
      succes={isAuthenticated}
      />
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/login"} element={
        <Login
            succes={isAuthenticated}
            setSucces={toggleIsAuthenticated}
      />}/>
      <Route path={"/logout"} element={
        <Logout
            succes={isAuthenticated}
            setSucces={toggleIsAuthenticated}
      />}/>
      <Route path={"/blogposts"} element={
        <BlogPosts
        succes={isAuthenticated}
        />} />
      <Route path={"/blogpost/:blogId"} element={
        <MyBlog
        succes={isAuthenticated}
        />}/>
    </Routes>
    </div>
  );
}

export default App;