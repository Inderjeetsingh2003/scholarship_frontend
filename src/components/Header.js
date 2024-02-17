import { useState } from "react";

// import persnolInfoContext from "../context/personalInfoContext";

export default function Header() {
  const [isVisible, setVisible] = useState(false);
  // const context = useContext(persnolInfoContext)

  return (
    <div className=" h-24 flex flex-row justify-between fixed z-10 w-full bg-white ">
      <div className="flex flex-row items-center justify-center pl-8">logo</div>
      <div className="flex flex-row mr-16">
        <div className="flex flex-row gap-8 items-center mr-24">
          <div className="font-sans font-semibold tracking-wider text-lg text-indigo-600">
            Home
          </div>
          <div className="font-sans font-semibold tracking-wider text-lg">
            Find
          </div>
          <div className="font-sans font-semibold tracking-wider text-lg">
            Comunity
          </div>
          <div className="font-sans font-semibold tracking-wider text-lg">
            About
          </div>
        </div>

        <div
          type="button"
          class="group flex shrink-0 items-center rounded-lg transition"
        >
          <a
            class="inline-block border rounded-full border-indigo-600 bg-indigo-600 px-10 py-2  text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 font-sans font-semibold tracking-wider text-lg"
            href="#"
          >
            Login
          </a>
        </div>

        {/* <button>
          <img
            src="img/icons8-more-90.png"
            alt=""
            className="h-5 w-5 transform rotate-90 mt-1 ml-2"
            onClick={() => setVisible(!isVisible)}
          />
        </button> */}
      </div>
      {isVisible && (
        <div
          class="absolute end-0 z-10 mt-[70px] mr-6 w-40 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div class="p-2">
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-m text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              role="menuitem"
            >
              About Us
            </a>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-m text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              role="menuitem"
              // onClick={()=>context.setLandingPageVisibility(true)}
            >
              Logout
            </a>

            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-m text-red-500 hover:bg-red-100 hover:text-red-700"
              role="menuitem"
            >
              Delete Account
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
