import React from 'react'
import botImg from '../bot.png'
import partnerImg from '../assests/images/frittzImg.png'

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
        title: 'No Captcha/Advance Captcha Option',
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
      }
    ]
    const faqs = [
      {
        question: "What operating system does Nuclear support ?",
        answer: "Nuclear supports both MacOS and Windows."
      },
      {
        question: "How i participate in pre-launch ?",
        answer: "In order to enter in pre-launch you need to have invite link provided by out partner."
      },
      {
        question: "What site will you support ?",
        answer: "We will support all the mazor sites, starting from shopify and we'll release new site module every month, you can se our launch and update timeline timeline section."
      },
      {
        question: "Where can I receive support ?",
        answer: "Members of trickle can recieve support through our discord server, which has many support members ready to answer all questions!"
      },
      {
        question: "How much is a license and renewal fee ?",
        answer: "If you purchase a bot through pre-launch than the price is $399 and then it is $59/month."
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
        Dashboard
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
<div className="bg-base trackin ">
  <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
      <div className="col-span-full lg:col-span-2">
        {/* <!-- logo - start --> */}
        <div className="lg:-mt-2 mb-4">
          <a href="/" className="inline-flex items-center text-xl md:text-2xl font-bold gap-2" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" className="w-5 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>

            Nuclear
          </a>
        </div>
        {/* <!-- logo - end --> */}

        <p className="sm:pr-8 mb-6 tracking-tighter">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

        {/* <!-- social - start --> */}
        <div className="flex gap-4">
          <a href="#" target="_blank" className="text-gray-400 hover:text-hover active:text-hover transition duration-100 delay-100 ease-in">
          <i class="ri-twitter-fill ri-xl"></i>
          </a>

          <a href="#" target="_blank" className="text-gray-400 hover:text-hover active:text-hover transition duration-100 delay-100 ease-in">
          <i class="ri-discord-fill ri-xl"></i>
          </a>

        </div>
        {/* <!-- social - end --> */}
      </div>

      {/* <!-- nav - start --> */}
      <div>
        <div className=" font-bold tracking-tighter uppercase mb-4">Products</div>
        <nav className="flex flex-col gap-4">
          <div>
            <a  className=" hover:text-secondary active:text-secondary transition duration-100 delay-100 ease-in">Nuclear Bot</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="font-bold tracking-tighter uppercase mb-4">Company</div>

        <nav className="flex flex-col gap-4">
          {menuItems.map((item, key)=>(
            <div key={key}>
            <a  className=" hover:text-secondary active:text-secondary transition duration-100 delay-100 ease-in tracking-tighter">{item}</a>
          </div>
          ))}
          
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="font-bold tracking-tighter uppercase mb-4">Support</div>

        <nav className="flex flex-col gap-4">
        <div>
            <a  className=" hover:text-secondary active:text-secondary transition duration-100 delay-100 ease-in tracking-tighter">support@nuclearbot.co</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="font-bold tracking-tighter uppercase mb-4">Legal</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="hover:text-secondary active:text-secondary transition duration-100 delay-100 ease-in tracking-tighter">Terms of Service</a>
          </div>

          <div>
            <a href="#" className="hover:text-secondary active:text-secondary transition duration-100 delay-100 ease-in tracking-tighter">Privacy Policy</a>
          </div>

          <div>
            <a href="#" className="hover:text-secondary active:text-secondary transition duration-100 delay-100 ease-in tracking-tighter">Cookie settings</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}
    </div>

    <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">© 2021 - Present Nuclear. All rights reserved.</div>
  </footer>
</div>
{/* <!-- footer - end --> */}
    </div>
  )
}

export default LandingPage