export default function LandingPage() {
  return (
    <section className="bg-blue-50">
      <div className="h-16 flex flex-row justify-between fixed w-full z-10  bg-blue-50 bg-opacity-80">
        <div className="p-4">
          <img src="img\Designer (2).png"  className="h-12 w-12" alt="" />
        </div>
        <div className="p-4">
          <a href="#" class="text-lg font-semibold leading-6 text-blue-600">
            Login <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-8">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="img/Designer (1).png"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class=" font-bold sm:text-5xl">Grow your audience</h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <div className="flex flex-row justify-center gap-4 text-center">
                <a
                  href="#"
                  className="mt-8 w-full inline-block rounded bg-indigo-600 px-6 py-2 text-lg font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Find For You
                </a>
                <a
                  href="#"
                  className="mt-8 w-full inline-block rounded bg-indigo-600 px-6 py-2 text-lg font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Find With AI
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div class="flex flex-row justify-center gap-4 pb-4">
            <a
              class="block rounded-xl border w-64 h-24 border-gray-100 p-2 shadow-sm hover:bg-purple-300 bg-purple-200"
              href="#"
            >
              <div className="flex flex-row gap-6 ">
                <span class="inline-block rounded-lg bg-purple-100 p-2 h-10 w-10">
                  <img src="img/icons8-girl-100.png " alt="" />
                </span>
                <div className="ml-4">
                  <h2 class="mt-2 font-bold text-4xl">500+</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-m sm:text-gray-600 text-center">
                    For Girls
                  </p>
                </div>
              </div>
            </a>
            <a
              class="block rounded-xl border w-64 h-24 border-gray-100 p-2 shadow-sm hover:bg-green-300 focus:outline-none focus:ring bg-green-200"
              href="#"
            >
              <div className="flex flex-row gap-6 ">
                <span class="inline-block rounded-lg bg-green-100 p-2 h-10 w-10">
                  <img src="img/icons8-girl-100.png " alt="" />
                </span>
                <div className="ml-4">
                  <h2 class="mt-2 font-bold text-4xl">500+</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-m sm:text-gray-600 text-center">
                    For Students
                  </p>
                </div>
              </div>
            </a>
            <a
              class="block rounded-xl border w-64 h-24 border-gray-100 p-2 shadow-sm hover:bg-rose-300 focus:outline-none focus:ring bg-rose-200"
              href="#"
            >
              <div className="flex flex-row gap-6 ">
                <span class="inline-block rounded-lg bg-rose-100 p-2 h-10 w-10">
                  <img src="img/icons8-girl-100.png " alt="" />
                </span>
                <div className="ml-4">
                  <h2 class="mt-2 font-bold text-4xl">500+</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-m sm:text-gray-600 text-center">
                    Total
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center text-2xl font-black">
            <p>Find schemes based on categories</p>
          </div>
        </div>
      </section>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div className="flex flex-row justify-center">
        <div className="h-1/2 w-1/2 p-10">
          <img src="img\questions.svg" alt="" />
        </div>
        <div className="p-10 h-1/2 w-1/2">
          <div className="text-center text-4xl font-black">
            <p>Checkout our knowledge base for some of your answers!</p>
          </div>
          <div className="space-y-4 mt-2">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden mt-1"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between  rounded-lg bg-blue-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  What is ScholarSpot.
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                
                consequuntur distinctio corporis earum similique!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos corrupti vero fugit similique blanditiis nisi sequi? Dolorum accusamus similique maxime nihil numquam, quae sit fugiat, eos, debitis impedit facere!
    
              </p>
            </details>

            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  How ScholarSpot AI Work
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-2 px-4 leading-relaxed text-gray-700 ">
                
                consequuntur distinctio corporis earum similique!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos corrupti vero fugit similique blanditiis nisi sequi? Dolorum accusamus similique maxime nihil numquam, quae sit fugiat, eos, debitis impedit facere!
    
              </p>
            </details>
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  How Can I apply
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-2 px-4 leading-relaxed text-gray-700 ">
                
                consequuntur distinctio corporis earum similique!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos corrupti vero fugit similique blanditiis nisi sequi? Dolorum accusamus similique maxime nihil numquam, quae sit fugiat, eos, debitis impedit facere!
    
              </p>
            </details>
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-2 px-4 leading-relaxed text-gray-700 ">
                
                consequuntur distinctio corporis earum similique!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos corrupti vero fugit similique blanditiis nisi sequi? Dolorum accusamus similique maxime nihil numquam, quae sit fugiat, eos, debitis impedit facere!
    
              </p>
            </details>
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-50 p-4 text-gray-900">
                <h2 className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-2 px-4 leading-relaxed text-gray-700 ">
                
                consequuntur distinctio corporis earum similique!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos corrupti vero fugit similique blanditiis nisi sequi? Dolorum accusamus similique maxime nihil numquam, quae sit fugiat, eos, debitis impedit facere!
    
              </p>
            </details>
          </div>
        </div>
      </div>

      
    </section>
  );
}
