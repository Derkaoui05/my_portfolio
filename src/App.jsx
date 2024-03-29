import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Testimonial from "./pages/Testimonial";
import Service from "./pages/Service";
import Error from "./Components/Error";
import Signin from "./Components/Sign";
export default function App() {
 
  return (
    <>
        
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Service />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />}  />
        <Route path="/sign" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  )
}
