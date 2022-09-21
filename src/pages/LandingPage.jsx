import React, { useState } from 'react'
import partnerImg from '../assests/images/frittzImg.png'
import nuclearLogo from '../assests/images/nuclear-logo.png'

import { twitter, discord } from '../socials'
import JoinDiscordModal from '../components/landing-page/JoinDiscordModal'

import MobileMenu from '../components/landing-page/MobileMenu'
import Heading from '../components/ui/Heading'
import Hero from '../components/landing-page/Hero'
import TimeLine from '../components/landing-page/Timeline'
import Price from '../components/landing-page/Price'

const LandingPage = () => {
    const menuItems = ['Home', 'Patners', 'Features', 'Timeline', 'Pricing', 'Faq']
    const features = [
      {
        title: 'Advance Proxy Support',
        description: "There's no need to spend money on proxies. You can operate this bot without a proxy thanks to our sophisticated proxy support, we'll take care of the proxy on our end, but you will also have the option to use your own proxy if you want.",
        iconClass : 'ri-route-line '
      },
      {
        title: 'Unlimited Tasks',
        description: 'Execute any number of tasks at once. It is not necessary to set up the server in order to run a large number of tasks. We built our own task engine that is extremely powerful and robust which capable of handling thousands of tasks at once.',
        iconClass : 'ri-rocket-2-line'
      },
      {
        title: 'Advance Analytics',
        description: 'Good analytics tools help you understand how your efforts are paying off. You can learn what’s working and what’s not. Then you move on to the refinement portion of the strategy, tweaking your efforts to boost your results and improve your ROI.',
        iconClass : 'ri-line-chart-line'
      },
      {
        title: 'No Captcha/Advance Captcha Support',
        description: "There's no need to waste time completing pointless and annoying captchas. We've got this. Our backend team will take care of all captchas for you.",
        iconClass : 'ri-shield-cross-line'
      },
      {
        title: 'Lightning Fast',
        description: 'Thanks to our powerful and robust task engine , you can now hit any pair of sneakers at lightning speed.',
        iconClass : 'ri-flashlight-line'
      },
      {
        title: 'Simplicity',
        description: 'We believe in keeping things simple. Nuclear Bot is designed in such a way that it can be operated by a five-year-old.',
        iconClass : 'ri-mickey-line'
      },
      {
        title: 'Exclusive Discord Community',
        description: "We believe in our members' success, and we will help them succeed by providing them with an exclusive Discord group.",
        iconClass: "ri-discord-line"
      },
      {
        title: "Built In Chart App",
        description: "Get a built-in chat application and access our exclusive community directly from the Nuclear Bot itself.",
        iconClass: "ri-message-3-line"
      }
    ]
    const faqs = [
      {
        question: "What operating system does Nuclear support ?",
        answer: "Nuclear supports both MacOS and Windows."
      },
      {
        question: "How does I participate in the pre-launch ?",
        answer: "To participate in the pre-launch, you must have got an invite code from our exclusive partner."
      },
      {
        question: "Which website will you support ?",
        answer: "We will support all the major sites, starting with Shopify, and we'll release new site modules every month. You can see our launch and update timeline for this."
      },
      {
        question: "Where can I receive support ?",
        answer: "Nuclear members will get help from our discord server, which will include a large number of support members eager to answer any questions."
      },
      {
        question: "How much is a license and renewal fee ?",
        answer: "If you purchase the bot through pre-launch, then the price will be $399 and then $59/month."
      },
      {
        question: "Is there any refund policy ?",
        answer: "Yes, there is a 14-day refund policy If you don't like the bot for any reason, you can get your pre-booking amount back."
      }
      
    ]
    const [showMobMenu, setShowMobMenu] = useState(false)

    const handleMobileMenu = () => {
      return showMobMenu ? setShowMobMenu(false) : setShowMobMenu(true)
    }

  return (
    <div>
{/* <!-- hero - start --> */}
<div className="bg-base pb-6 sm:pb-8 lg:pb-12 ">
  <div className="max-w-screen-lg  px-4 md:px-8 mx-auto">
    <header className="flex justify-between items-center py-4  mb-8 md:mb-12 xl:mb-16">
      {/* <!-- logo - start --> */}
      <a href="/" className="inline-flex w-16 h-16 items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <img src={nuclearLogo} alt="Nuclear logo"/>

        <span className="-ml-4 font-bold text-4xl tracking-tighter md:-mt-2 -mt-1">nuclear</span>
      </a>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden lg:flex gap-8  ml-36 ">
        {menuItems.map((item, key)=>(
          <a key={key} href="#" className="hover:bg-hover  p-0.5 rounded transition delay-100 ease-in">
          {item}
        </a>
        ))}
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <a href="#" className="hidden lg:inline-block bg-primary hover:bg-hover  text-sm  font-semibold text-center rounded-lg outline-none transition delay-100 ease-in px-8 py-3">
        Dashboard
      </a>

      <div className='inline-flex items-stretch flex-col '>
      <button
      onClick={handleMobileMenu}
       type="button" className="inline-flex items-center lg:hidden bg-primary hover:bg-hover active:bg-hover  text-sm  font-semibold rounded-lg gap-2 px-2.5 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        {/* Menu */}
      </button>
      {showMobMenu ? <MobileMenu/> : null}
      </div>
      
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
              <i className="ri-youtube-fill ri-xl md:2xl"></i>
              </a>

              <a href="https://twitter.com/FritzHeisenb3rg" target="_blank" className=" hover:text-gray-500 active:text-gray-600 transition duration-100">
              <i className="ri-twitter-fill ri-xl md:2xl"></i>
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
<div className="bg-gradient-to-b  from-green-500 to-secondary  py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
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

<TimeLine/>
<Price/>

{/* Faq */}
<section className="bg-secondary-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<Heading heading={"Faq"}/>
		<div className="flex flex-col  sm:px-8 lg:px-12 xl:px-32  text-center">
      {faqs.map((faq, key)=>(
        <details key={key}>
				<summary className="py-2 outline-none cursor-pointer focus:underline tracking-tighter ">{faq.question}</summary>
				<div className="px-4 pb-4 tracking-tighter">
					<p>{faq.answer}</p>
				</div>
			</details>
      ))}
		</div>
	</div>
</section>

{/* <!-- footer - start --> */}
<div className="bg-base pt-4 sm:pt-10 lg:pt-12">
  <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center  gap-4 py-6 ">
      {/* <!-- nav - start --> */}
      <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
        {menuItems.map((item, key)=>(
        <a key={key} className=" transition  active:text-blue-500 duration-100">{item}</a>
        ))}
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- social - start --> */}
      <div className="flex gap-4 mt-4">
        <a href={twitter} target="_blank">
          <i className="ri-twitter-fill ri-xl"></i>
        </a>
        
        <a href={discord} target="_blank">
        <i className="ri-discord-fill ri-xl"></i>
        </a>

      </div>
      {/* <!-- social - end --> */}
    </div>

    <div className=" text-sm text-center py-8 border-t border-gray-700">© 2022 - Present Nuclear. All rights reserved.</div>
  </footer>
</div>
{/* <!-- footer - end --> */}

    </div>
  )
}

export default LandingPage