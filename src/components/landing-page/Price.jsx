import React, { useState } from 'react'

import Heading from '../ui/Heading'

import JoinDiscordModal from './JoinDiscordModal'


const Price = () => {
  const preBookOffer= [
    "Best Bot In The Market",
    "Advance Proxy Support",
    "Advance Captcha Support",
    "Exclusive Discord Group",
    "Bult In Chat App",
    "24/7 Support",
    "Money Back"
  ]
  const normalLaunchOffer = [
    {
      status :true,
      title: "Best Bot in the market"
    },
    {
      status: false,
      title: "Advance Proxy Support",
    },
    {
      status: false,
      title: "Advance Captcha Support"
    },
    {
      status: false,
      title: "Exclusive Discord Group",
    },
    {
      status: false,
      title: "Bult In Chat App",
    },
    {
      status: true,
      title: "24/7 Support"
    }
  ]

  const [showDiscordModal, setShowDiscordModal] = useState(false)
  return (
    <div>
        <div className="bg-black py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <Heading heading={"Pre Launch"} textColor="secondary"/>
    </div>
    {/* <!-- text - end --> */}

    <div className="flex flex-wrap justify-center items-center gap-4  sm:gap-0">
      {/* <!-- left side - start --> */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-secondary-100 md:rounded-r-lg rounded-lg sm:rounded-r-none p-6 sm:p-8">
        <div className="mb-4">
          <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">After Pre Launch</h3>
          <p className="text-xs text-red-500">* If the bot runs out of stock during the pre-booking period, we may never offer our subscription to new users again.</p>
        </div>

        <div className="space-x-2 mb-4">
          <span className="text-gray-100 text-4xl font-bold">$500</span>
          <span className="text-gray-300 text-2xl ">$90 /month</span>
        </div>

        <ul className="text-gray-300 space-y-2 mb-6">
          {/* <!-- feat - start --> */}
          {normalLaunchOffer.map((offer, key)=>(
            <li key={key} className="flex items-center gap-1.5">
            {offer.status ? (<i className="ri-checkbox-circle-fill ri-lg text-white"></i>) : (<i className="ri-close-circle-fill ri-lg text-red-500"></i>)}
              <span>{offer.title}</span>
            </li>
          ))}
          {/* <!-- feat - end --> */}
        </ul>

        <a  className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 delay-100 ease-in">
          Closed
        </a>
      </div>
      {/* <!-- left side - end --> */}

      {/* <!-- right side - start --> */}
      <div className="w-full sm:w-1/2 bg-gradient-to-tr from-secondary to-green-500 rounded-lg shadow-xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-semibold">Pre Launch Offer</h3>
            <p className="text-green-100">One time offer</p>
          </div>

          <span className="inline-block order-first lg:order-none bg-green-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">Best value</span>
        </div>

        <div className="space-x-2 mb-4">
          <span className="text-white text-4xl font-bold">$399</span>
          <span className="text-secondary-100 text-2xl ">$59 /month</span>
        </div>

        <ul className="text-gray-100 space-y-2 mb-6">
          {/* <!-- feat - start --> */}
          {preBookOffer.map((offer, key)=>(
            <li key={key} className="flex items-center gap-1.5">
            <i className="ri-checkbox-circle-fill ri-lg "></i>
              <span className='text-white'>{offer}</span>
            </li>
          ))}
          
          {/* <!-- feat - end --> */}

        </ul>

        <a 
        onClick={()=>setShowDiscordModal(true)}
        className="block bg-green-200 bg-opacity-50 hover:bg-green-800 hover:text-white active:bg-green-800 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 delay-100 ease-in">
          <span className='cursor-pointer'>PRE BOOK NOW</span>
          </a>
      </div>
      {/* <!-- right side - end --> */}
    </div>
  </div>

  <div className="bg-black mt-10 ">
  {/* <!-- banner - start --> */}
  <div className="max-w-screen-md px-4 md:px-8  mx-auto">
    <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-secondary-100 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
      <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-red-500 text-sm  mb-2 sm:mb-0">There is a 14-day refund policy. If you don't like this bot for any reason, you can get your pre-booking amount back.</div>
    </div>
  </div>
  {/* <!-- banner - end --> */}
</div>
</div>
{showDiscordModal ? <JoinDiscordModal setShowModal={setShowDiscordModal}/> : null}
    </div>
  )
}

export default Price