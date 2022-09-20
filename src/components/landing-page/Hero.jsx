import React from 'react'
import botImg from '../../bot.png'

import Heading from '../ui/Heading'

const Hero = () => {
  return (
    <div>
        <section>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-16">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
        <p className="text-secondary md:text-lg xl:text-xl font-semibold mb-4 md:mb-6 tracking-tighter">Get them before they are gone</p>
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter  md:text-5xl lg:text-6xl lg:max-w-7xl">
            Blazigly fast checkout bot <br className="hidden lg:block"/>
            with robust task engine
          </h1>
          <p className="max-w-xl mx-auto mt-8  leading-relaxed tracking-tighter">
          Checkout software that is lightning fast with an incredibly advanced set of features, made with
          <strong> cutting-edge teachnology </strong>, which makes hitting each and every pair of sneaker 
          faster than ever before. <span className='p-1 md:p-0 md:px-0.5 md:text-sm rounded bg-primary bg-opacity-30 text-white'>Pre Book your Nuclear Bot now.</span>
          </p>
          <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button className="px-5 py-4  font-semibold text-center text-white transition duration-500 ease-in-out transform ring-secondary bg-secondary lg:px-10 rounded-xl hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-green-500">BOOK NOW</button>
            </div>
            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button className="items-center block px-5 lg:px-10 py-3.5  font-semibold text-center  transition duration-500 ease-in-out transform bg-primary  border-2 border-primary shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary">JOIN DISCORD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="intro">
      <div className="flex flex-col items-center justify-center shadow mt-16  mx-auto rounded-xl  max-w-7xl border-2  border-primary ">
        <img className="object-cover object-center w-full rounded-xl" alt="" src={botImg}/>
      </div>
    </section>
  </div>
</section>
    </div>
  )
}

export default Hero