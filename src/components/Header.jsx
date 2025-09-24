import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <header className="container min-h-screen mx-auto">
      <Navbar />
      <section className="md:px-8 lg:px-18 px-5 relative   mt-[4rem] flex flex-col md:flex-row md:justify-between md:items-start justify-center items-center md:gap-0 gap-10 ">
        <section className="md:order-1 order-2 md:basis-1/2">
          <p className="font-bold text-gray-500 uppercase tracking-widest font-[Barlow Condensed] mb-4">
            <span className="tracking-normal font-bold text-white bg-storm-blue rounded-full py-1 px-3 mr-2">
              New
            </span>
            Monograph Dashboard
          </p>
          <h1 className="text-storm-blue uppercase  font-bold text-[3rem]">
            Powerful Insights <br /> Into Your Team
          </h1>
          <p className="text-storm-blue mb-5">
            Project planning and time tracking for agile teams
          </p>
          <button className="bg-red text-white font-bold uppercase rounded-sm py-2 px-4 text-[.9rem] hover:opacity-50 cursor-pointer transition duration-300">
            Schedule A Demo
          </button>
          <span className="uppercase text-gray-500 ml-5">To see a preview</span>
        </section>
        <div className=" ml-auto translate-x-[15%] md:translate-x-[39%] md:order-2 order-1">
          <img src={assets.illustration} alt="An Illustration" />
        </div>
      </section>
    </header>
  )
}

export default Header
