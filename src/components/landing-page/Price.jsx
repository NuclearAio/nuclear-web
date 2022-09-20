import React from 'react'

const Price = () => {
  return (
    <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Choose a Bundle</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
      {/* <!-- left side - start --> */}
      <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
        <div class="mb-4">
          <h3 class="text-gray-100 text-2xl sm:text-3xl font-semibold">Basic Bundle</h3>
          <p class="text-gray-300">Ebook</p>
        </div>

        <div class="space-x-2 mb-4">
          <span class="text-gray-100 text-4xl font-bold">$29</span>
          <span class="text-gray-300 text-2xl line-through">$49</span>
        </div>

        <ul class="text-gray-300 space-y-2 mb-6">
          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Ebook</span>
          </li>
          {/* <!-- feat - end --> */}

          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Multiple examples</span>
          </li>
          {/* <!-- feat - end --> */}

          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Basic support</span>
          </li>
          {/* <!-- feat - end --> */}
        </ul>

        <a href="#" class="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Get the Basic Bundle</a>
      </div>
      {/* <!-- left side - end --> */}

      {/* <!-- right side - start --> */}
      <div class="w-full sm:w-1/2 bg-gradient-to-tr from-indigo-500 to-violet-400 rounded-lg shadow-xl p-6 sm:p-8">
        <div class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h3 class="text-white text-2xl sm:text-3xl font-semibold">Pro Bundle</h3>
            <p class="text-indigo-100">Ebook + Video course</p>
          </div>

          <span class="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">Best value</span>
        </div>

        <div class="space-x-2 mb-4">
          <span class="text-white text-4xl font-bold">$49</span>
          <span class="text-indigo-100 text-2xl line-through">$89</span>
        </div>

        <ul class="text-indigo-100 space-y-2 mb-6">
          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Ebook</span>
          </li>
          {/* <!-- feat - end --> */}

          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Video course</span>
          </li>
          {/* <!-- feat - end --> */}

          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Multiple examples</span>
          </li>
          {/* <!-- feat - end --> */}

          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Work sheets</span>
          </li>
          {/* <!-- feat - end --> */}

          {/* <!-- feat - start --> */}
          <li class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <span>Premium support</span>
          </li>
          {/* <!-- feat - end --> */}
        </ul>

        <a href="#" class="block bg-indigo-200 bg-opacity-50 hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Get the Pro Bundle</a>
      </div>
      {/* <!-- right side - end --> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Price