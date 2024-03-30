import Hero from "../Components/Hero"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Service from "./Service"
import Skills from "./Skills"
import Testimonial from "./Testimonial"

function Home() {

  return (
    <>
    <Hero />
    <About />
    <Project />
    {/* <Service /> */}
    <Skills />
    <Testimonial />
    <Contact />
    </>
  )
}

export default Home