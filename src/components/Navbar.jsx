import React, { useState } from "react";
import dextool from "../assets/images/webp/dextool-logo.webp";
import twitter from "../assets/images/webp/twitter-logo.webp";
import telegram from "../assets/images/webp/telegram-logo.webp";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-[1164px] mx-auto px-3">
        <div className="flex items-center justify-between pt-10  bg-black">
          <a
            href="/"
            className="font-inter leading-auto font-black  text-[20px] sm:text-[25px] md:text-[30px] lg:text-xl text-white"
          >
            Gxxx Gxxxxxx
          </a>
          <div className="hidden md:flex gap-5 items-center">
            <a
              href="https://www.dextools.io/app/en/pairs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-w-[25px] md:max-w-[35px] lg:max-w-[48px] hover:translate-y-[-20%] duration-200"
                src={dextool}
                alt="dextool"
              />
            </a>
            <a
              href="https://twitter.com/home?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-w-[25px] md:max-w-[35px] lg:max-w-[48px] hover:translate-y-[-20%] duration-200"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-w-[25px] md:max-w-[35px] lg:max-w-[48px] hover:translate-y-[-20%] duration-200"
                src={telegram}
                alt="telegram"
              />
            </a>

            <button className="rounded-[189px] ms-[26px] mx-auto flex items-center font-semibold font-inter h-[50px] lg:h-[57px] w-[145px] lg:w-[191px] overflow-hidden relative group cursor-pointer border-2 text-sm lg:text-base">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white text-center mx-auto whitespace-nowrap transition duration-200 group-hover:text-black ease">
                Buy On Uniswap
              </span>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-[30px] h-[30px] text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:hidden transition-all duration-200 ${
              isOpen ? "top-[8%] opacity-100" : "top-[-500px] opacity-0"
            } absolute left-0 right-0 bg-black z-10`}
          >
            <div className="flex flex-col items-center gap-5 py-5">
              <a
                href="https://www.dextools.io/app/en/pairs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-[25px] md:max-w-[35px] lg:max-w-[48px] hover:translate-y-[-20%] duration-200"
                  src={dextool}
                  alt="dextool"
                />
              </a>
              <a
                href="https://twitter.com/home?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-[25px] md:max-w-[35px] lg:max-w-[48px] hover:translate-y-[-20%] duration-200"
                  src={twitter}
                  alt="twitter"
                />
              </a>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="max-w-[25px] md:max-w-[35px] lg:max-w-[48px] hover:translate-y-[-20%] duration-200"
                  src={telegram}
                  alt="telegram"
                />
              </a>

              <button className="rounded-[189px] mx-auto flex items-center font-semibold font-inter h-[50px] w-[145px] overflow-hidden relative group cursor-pointer border-2 text-sm">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white text-center mx-auto whitespace-nowrap transition duration-200 group-hover:text-black ease">
                  Buy On Uniswap
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
