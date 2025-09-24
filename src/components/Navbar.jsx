import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <div className="w-full top-0 left-0 z-10">
      <div className="">
        <div className="absolute top-0 right-0 h-[50%] w-[50%] bg-cloud-blue rounded-bl-[70px]"></div>
      </div>
      <nav className="relative  px-9 mx-auto flex justify-between container w-full py-7 md:py-12 md:px-8 lg:px-18 items-center font-[Barlow Condensed]">
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
        <ul
          className={`md:hidden flex-col ${
            showMobileMenu ? 'flex ' : 'hidden '
          }  gap-5 absolute left-[50%] translate-x-[-50%] z-[500]  top-20 shadow-[-8px_-8px_16px_rgba(0,0,0,0.03),8px_8px_16px_rgba(0,0,0,0.05)] p-5 rounded-sm w-3/4 mx-auto justify-center items-center bg-white `}
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
      </nav>
    </div>
  )
}

export default Navbar
