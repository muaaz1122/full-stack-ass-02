import React from "react";
import MyProjects from "./components/views/HeroSection";
import CardSection from "./components/views/CardSection";
import RandomContent from "./components/views/RandomContent";
import ContactUs from "./components/views/ContactUs";
import Footer from "./components/views/Footer";
import HeroSection from "./components/views/HeroSection";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import About from "./components/pages/About";
import ContactPage from "./components/pages/ContactPage";
const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
  
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>

     


    </>
  );
};
export default App;
