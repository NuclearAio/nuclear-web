import React from 'react'
import botImg from '../bot.png'
import partnerImg from '../assests/images/frittzImg.png'

import Heading from '../components/ui/Heading'

import HeroSecondary from '../components/landing-page/HeroSecondary'
import Hero from '../components/landing-page/Hero'

const LandingPage = () => {
    const menuItems = ['Home', 'Patners', 'Features', 'Timeline', 'Pricing', 'Faq']
    const features = [
      {
        title: 'Advance Proxy Support',
        description: "There's no need to spend money on proxies. You can operate this bot without a proxy thanks to our sophisticated proxy support, and we'll take care of the proxy on the backend, but you will also have the option to use your own proxy if you want.",
        iconClass : 'ri-route-line '
      },
      {
        title: 'Unlimited Tasks',
        description: 'Execute any number of tasks It is not necessary to set up the server in order to run a large number of tasks. We built our own task engine that is extremely powerful and robust. It is capable of handling thousands of tasks at once.',
        iconClass : 'ri-rocket-2-line'
      },
      {
        title: 'Advance Analytics',
        description: 'Good analytics tools help you understand how your efforts are paying off. You can learn what’s working and what’s not. Then you move on to the refinement portion of the strategy, tweaking your efforts to boost your results and improve your ROI.',
        iconClass : 'ri-line-chart-line'
      },
      {
        title: 'No Captcha/Advance Captcha Option',
        description: "There's no need to waste time completing pointless and annoying captchas. We've got this. Our backend team will take care of all captchas for you.",
        iconClass : 'ri-shield-cross-line'
      },
      {
        title: 'Lightning Fast',
        description: 'Thanks to our powerful and robust task engine, you can now hit any pair of sneakers at lightning speed.',
        iconClass : 'ri-flashlight-line'
      },
      {
        title: 'Simplicity',
        description: 'We believe in keeping things simple. Nuclear Bot is designed in such a way that it can be operated by a five-year-old.',
        iconClass : 'ri-mickey-line'
      }
    ]
  return (
    <div>
{/* <!-- hero - start --> */}
<div className="bg-base pb-6 sm:pb-8 lg:pb-12 ">
  <div className="max-w-screen-xl  px-4 md:px-8 mx-auto">
    <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
      {/* <!-- logo - start --> */}
      <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Flowrift
      </a>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden lg:flex gap-10">
        {menuItems.map((item, keys)=>(
          <a href="#" className="hover:bg-hover  p-0.5 rounded transition delay-100 ease-in">
          {item}
        </a>
        ))}
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <a href="#" className="hidden lg:inline-block bg-primary hover:bg-hover  text-sm  font-semibold text-center rounded-lg outline-none transition delay-100 ease-in px-8 py-3">
        Login
      </a>

      <button type="button" className="inline-flex items-center lg:hidden bg-primary hover:bg-hover   text-sm  font-semibold rounded-lg gap-2 px-2.5 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        {/* Menu */}
      </button>
      {/* <!-- buttons - end --> */}
    </header>

    <Hero/>
  </div>
</div>
{/* <!-- hero - end --> */}

{/* <!-- team - start --> */}
<div className="bg-primary py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-sm px-4 md:px-8 mx-auto">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <Heading heading="Partner"/>

      <p className="max-w-screen-md md:text-lg text-center mx-auto tracking-tighter">
        He is our exclusive partner, You must obtain your <span className='p-1 bg-secondary text-white rounded md:p-0 md:px-1 mr-1'> <span className='text-secondary'>.</span>invite code </span> from our partner in order to <strong>reserve</strong> your bot.
      </p>
    </div>
    {/* <!-- text - end --> */}

    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-0 ">
      {/* <!-- person - start --> */}
      <div className="flex flex-col items-center bg-base rounded-lg p-4 lg:p-8 ">
        <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
          <img src={partnerImg}  alt="Partner" className="w-full h-full object-cover object-center " />
        </div>

        <div>
          <div className=" md:text-lg font-bold text-center">Fritz Heisen</div>
          <p className="text-sm  text-center mb-3 md:mb-4">Youtuber / Reseller</p>

          {/* <!-- social - start --> */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              <a href="https://www.youtube.com/channel/UCn_6itapY2_ckUz9KCUm_qw" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
              <i class="ri-youtube-fill ri-xl md:2xl"></i>
              </a>

              <a href="https://twitter.com/FritzHeisenb3rg" target="_blank" className=" hover:text-gray-500 active:text-gray-600 transition duration-100">
              <i class="ri-twitter-fill ri-xl md:2xl"></i>
              </a>
            </div>
          </div>
          {/* <!-- social - end --> */}
        </div>
      </div>
      {/* <!-- person - end --> */}

      {/* <!-- person - start --> */}
      
      {/* <!-- person - end --> */}

    </div>
  </div>
</div>
{/* <!-- team - end --> */}


{/* <!-- features - start --> */}
<div className="bg-gradient-to-b  from-secondary to-green-500  py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <Heading heading="Features" textColor="white"/>

      <p className="max-w-screen-md text-white md:text-lg text-center mx-auto tracking-tighter">
      With the highest accuracy rate, Nuclear will be one of the most advanced and reliable bot on the market.
      </p>
    </div>
    {/* <!-- text - end --> */}

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
      {/* <!-- feature - start --> */}
      {features.map((feature, key)=>(
     <div key={key} className="flex gap-4 md:gap-6">
     <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-green-700 text-white rounded-lg md:rounded-xl shadow-lg">
     <i className={`${feature.iconClass} ri-xl`}></i>
     </div>

     <div>
       <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
       <p className="text-gray-50 mb-2">{feature.description}</p>

     </div>
   </div>   
      ))}
      {/* <!-- feature - end --> */}

    
    </div>
  </div>
</div>
{/* <!-- features - end --> */}





{/* <!-- footer - start --> */}
<div className="bg-gray-900">
  <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
      <div className="col-span-full lg:col-span-2">
        {/* <!-- logo - start --> */}
        <div className="lg:-mt-2 mb-4">
          <a href="/" className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" className="w-5 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>

            Flowrift
          </a>
        </div>
        {/* <!-- logo - end --> */}

        <p className="text-gray-400 sm:pr-8 mb-6">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

        {/* <!-- social - start --> */}
        <div className="flex gap-4">
          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        {/* <!-- social - end --> */}
      </div>

      {/* <!-- nav - start --> */}
      <div>
        <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Products</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Overview</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Solutions</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Pricing</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Customers</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="text-gray-100 font-bold tracking-wider uppercase mb-4">Company</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Investor Relations</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Jobs</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Press</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Blog</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Support</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Documentation</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Chat</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">FAQ</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Legal</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}
    </div>

    <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">© 2021 - Present Flowrift. All rights reserved.</div>
  </footer>
</div>
{/* <!-- footer - end --> */}
    </div>
  )
}

export default LandingPage