import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Menu from "../Components/Menu"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Skills from "./Skills"
import Testimonial from "./Testimonial"

function Home() {

  return (
    <>
    <Menu />
    <Hero />
    <About />
    <Project />
    <Skills />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}

export default Home