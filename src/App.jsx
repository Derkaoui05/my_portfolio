import {  Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
// import Footer from "./Components/Footer";
import Testimonial from "./pages/Testimonial";
import Error from "./Components/Error";
// import Signin from "./Components/Sign";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
// import Cookie from "./Components/Cookie";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      offset: 100,
    });
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />o
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/sign" element={<Signin />} /> */}
      </Routes>
      {/* <Cookie /> */}
    </>
  )
}
