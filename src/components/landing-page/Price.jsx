import React from 'react'
import Heading from '../ui/Heading'

const Price = () => {
  const preBookOffer= [
    "Best Bot In The Market",
    "Advance Proxy Support",
    "Advance Captcha Support",
    "Premium Discord Group",
    "In Built Chat Application only for user who will participat in pre-launch",
    "24/7 Support"
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
      title: "Premium Discord Group",
    },
    {
      status: false,
      title: "In Built Chat Application only for user who will participat in pre-launch",
    },
    {
      status: true,
      title: "24/7 Support"
    }
  ]
  return (
    <div>
        <div class="bg-black py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <Heading heading={"Pre Launch"} textColor="secondary"/>
    </div>
    {/* <!-- text - end --> */}

    <div class="flex flex-wrap justify-center items-center gap-4  sm:gap-0">
      {/* <!-- left side - start --> */}
      <div class="w-full sm:w-1/2 lg:w-1/3 bg-secondary-100 md:rounded-r-lg rounded-lg sm:rounded-r-none p-6 sm:p-8">
        <div class="mb-4">
          <h3 class="text-gray-100 text-2xl sm:text-3xl font-semibold">After Pre Launch</h3>
          <p class="text-xs text-red-500">* If we get out of stock in pre-lauch than this plan will never nbe released</p>
        </div>

        <div class="space-x-2 mb-4">
          <span class="text-gray-100 text-4xl font-bold">$500</span>
          <span class="text-gray-300 text-2xl ">$90 /month</span>
        </div>

        <ul class="text-gray-300 space-y-2 mb-6">
          {/* <!-- feat - start --> */}
          {normalLaunchOffer.map((offer, key)=>(
            <li key={key} class="flex items-center gap-1.5">
            {offer.status ? (<i class="ri-checkbox-circle-fill ri-lg text-white"></i>) : (<i class="ri-close-circle-fill ri-lg text-red-500"></i>)}
              <span>{offer.title}</span>
            </li>
          ))}
          {/* <!-- feat - end --> */}
        </ul>

        <a  class="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 delay-100 ease-in">
          Closed
        </a>
      </div>
      {/* <!-- left side - end --> */}

      {/* <!-- right side - start --> */}
      <div class="w-full sm:w-1/2 bg-gradient-to-tr from-secondary to-green-500 rounded-lg shadow-xl p-6 sm:p-8">
        <div class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h3 class="text-white text-2xl sm:text-3xl font-semibold">Pre Launch Offer</h3>
            <p class="text-green-100">One time offer</p>
          </div>

          <span class="inline-block order-first lg:order-none bg-green-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">Best value</span>
        </div>

        <div class="space-x-2 mb-4">
          <span class="text-white text-4xl font-bold">$399</span>
          <span class="text-secondary-100 text-2xl ">$59 /month</span>
        </div>

        <ul class="text-gray-100 space-y-2 mb-6">
          {/* <!-- feat - start --> */}
          {preBookOffer.map((offer, key)=>(
            <li key={key} class="flex items-center gap-1.5">
            <i class="ri-checkbox-circle-fill ri-lg "></i>
              <span className='text-white'>{offer}</span>
            </li>
          ))}
          
          {/* <!-- feat - end --> */}

        </ul>

        <a class="block bg-green-200 bg-opacity-50 hover:bg-green-800 active:bg-green-800 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 delay-100 ease-in">PRE BOOK NOW</a>
      </div>
      {/* <!-- right side - end --> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Price