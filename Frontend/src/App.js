import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Test from "./Pages/Admin_Management/test";
import Login from "./Pages/Admin_Management/Login";
import RegisterUser from "./Pages/Admin_Management/RegisterUser";
import Blog from "./Pages/Blog_Management/Blog";
import BloggerPage from "./Pages/Blog_Management/BloggerPage";
import BlogView from "./Pages/Blog_Management/BlogView";
import ViewBlogDetails from "./Pages/Blog_Management/ViewBlogDetails";
import UpdateBlog from "./Pages/Blog_Management/UpdateBlog";
import "antd/dist/reset.css";
import AdminDashboard from "./Pages/Admin_Management/AdminDashboard";

import ContactUs from "./Pages/Admin_Management/ContactUs";
import Profile from "./Pages/Admin_Management/Profile";

import Booking from "./Pages/Booking/PBooking";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Blogs" element={<Blog />} />

        <Route exact path="/Test" element={<Test />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<RegisterUser />} />
        <Route exact path="/BloggerManagement" element={<BloggerPage />} />
        <Route exact path="/BlogView" element={<BlogView />} />
        <Route exact path="/ViewBlogDetails" element={<ViewBlogDetails />} />
        <Route exact path="/UpdateBlogDetails" element={<UpdateBlog />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Booking" element={<Booking />} />
        {localStorage.getItem("userRole") === "admin" && (
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        )}

      </Routes>
      <Footer />
      {/* <div className="App">
      <ContactForm />
      </div> */}
    </>
  );
}

export default App;
