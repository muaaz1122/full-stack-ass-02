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
import FormPage from "./components/pages/FormPage";
import MuaazPage from "./components/pages/MuaazPage";
import IoTDeviceForm from "./components/pages/IoTDeviceForm";
const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/form" element={<FormPage/>}/>
      <Route path="/muaaz-page" element={<MuaazPage/>}/>
      <Route path="/iot-page" element={<IoTDeviceForm/>}/>
    </Routes>

     


    </>
  );
};
export default App;
