import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <div className="w-full absolute top-0 left-0 z-10">
      <nav className="px-5 mx-auto flex justify-between container w-full py-7 md:py-12 md:px-8 lg:px-18 items-center font-[Barlow Condensed]">
        <img src={assets.logo} alt="Logo" className=" " />
        <ul className="hidden md:flex gap-5">
          <li>
            <a
              href="#"
              className="uppercase font-bold text-storm-blue hover:underline"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase font-bold text-storm-blue hover:underline"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase font-bold text-storm-blue hover:underline"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase font-bold text-storm-blue hover:underline hover:text-cloud-blue transition duration-300"
            >
              Login
            </a>
          </li>
        </ul>

        <img
          src={showMobileMenu ? assets.close_icon : assets.hamburger_icon}
          alt="Menu Icon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden cursor-pointer w-6"
        />
      </nav>
      <ul
        className={`md:hidden flex-col ${
          showMobileMenu ? 'flex ' : 'hidden '
        }  gap-5 relative top-10 shadow-md p-3 rounded-sm max-w-3/4 mx-auto justify-center items-center bg-white `}
      >
        <li>
          <a
            href="#"
            className="uppercase font-bold text-storm-blue hover:underline"
          >
            Product
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase font-bold text-storm-blue hover:underline"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase font-bold text-storm-blue hover:underline"
          >
            Pricing
          </a>
        </li>
        <li className="border-t border-gray-300 pt-3 w-full text-center">
          <a
            href="#"
            className="uppercase font-bold text-gray-500 hover:underline"
          >
            Login
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
