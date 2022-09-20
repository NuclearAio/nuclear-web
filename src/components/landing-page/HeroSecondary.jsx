import React from 'react'
import botImg from '../../bot.png'

const HeroSecondary = () => {
  return (
    <div>
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 tracking-tighter ">
      {/* <!-- content - start --> */}
      <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
        <p className="text-secondary md:text-lg xl:text-xl font-semibold mb-4 md:mb-6 ">Get them before they are gone</p>

        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Blazingly Fast Checkout Bot </h1>

        <p className="lg:w-4/5  xl:text-lg  mb-8 md:mb-12 leading-relaxed">
        Checkout software that is lightning fast with an incredibly advanced set of features, made with
          <strong> cutting-edge teachnology </strong>, which makes hitting each and every pair of sneaker 
          faster than ever before. <span className='p-1 md:p-0 md:px-0.5 md:text-sm rounded bg-primary bg-opacity-80 text-white'>Pre Book your Nuclear Bot now.</span>
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
          <a href="#" className="inline-block bg-secondary hover:bg-green-700 text-white text-sm  font-semibold text-center rounded-lg outline-none transition delay-100 ease-in px-8 py-3">BOOK NOW</a>

          <a href="#" className="inline-block bg-primary hover:bg-hover text-sm  font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">JOIN DISCORD</a>
        </div>
      </div>
      {/* <!-- content - end --> */}

      {/* <!-- image - start --> */}
      <div className="xl:w-7/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
        <img src={botImg} loading="lazy" alt="Nuclear bot image" className="w-full h-full object-cover object-center" />
      </div>
      {/* <!-- image - end --> */}
    </section>
    </div>
  )
}

export default HeroSecondary