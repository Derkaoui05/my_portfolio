import React, { useState } from 'react'
import log from '../assets/hero-img.png'
import logo1 from '../assets/Logo.png'
import logo from '../assets/Logo1.png'
import { BiLogoBehance, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex bg-white dark:bg-dark w-full items-center">
        <div className="container mt-2">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full">
                <img
                  src={logo1}
                  alt="logo"
                  className="w-full dark:hidden "
                />
                <img
                  src={logo}
                  alt="logo"
                  className="w-full hidden dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                    } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/">Home</ListItem>
                    <ListItem NavLink="/about">About</ListItem>
                    <ListItem NavLink="/projects">Projects</ListItem>
                    <ListItem NavLink="/skills">Skills</ListItem>
                    <ListItem NavLink="/testimonial">Testimonials</ListItem>
                    <ListItem NavLink="/contact">Contact</ListItem>
                  </ul>
                </nav>
              </div>
              <div className=" justify-end pr-16 sm:flex lg:pr-0">
                <DropDown />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Menu

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
const DropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <button className="focus:outline-none" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <img src={log} alt="Avatar" className="rounded-full w-11 h-11 shadow-2 shadow-sky-300 cursor-pointer" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-14 w-48 bg-white dark:bg-dark  rounded-md shadow-lg z-20">
          <a href="https://github.com/Derkaoui05" className="flex gap-3 items-center px-4 py-2 text-xl text-white hover:text-dark dark:hover:text-body-color"><BiLogoGithub /> Derkaoui05  </a>
          <a href="https://www.linkedin.com/in/derkaoui-yassir-497b5a298/" className="flex gap-3 items-center px-4 py-2 text-xl text-white hover:text-dark dark:hover:text-body-color"><BiLogoLinkedin /> derkaoui yassir </a>
          <a href="https://www.behance.net/derkaoui-yassir" className="flex gap-3 items-center px-4 py-2 text-xl text-white hover:text-dark dark:hover:text-body-color"><BiLogoBehance /> Derkaoui Yassir </a>
        </div>
      )}
    </>
  )
}