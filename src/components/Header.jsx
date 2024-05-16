import React from "react";
import capman from "../assets/images/webp/header-man.webp";
import FileIcon from "../components/common/Icons";

const Header = () => {
  return (
    <>
      <header className="bg-black overflow-hidden">
        <div className="max-w-[1164px] mx-auto px-3">
          <div className="flex sm:flex-row gap-5 sm:gap-0 flex-col justify-between items-center pt-[40px] md:pt-[70px]">
            <div className="flex sm:items-start items-center flex-col sm:max-w-[460px]">
              <h1 className="xl:text-3xl text-[50px] lg:text-[80px] font-inter text-white font-black leading-[120%]">
                G<span className="text-yellow">G</span>
              </h1>
              <p className="text-lg max-w-[538px] sm:text-start text-center font-inter font-semibold text-white leading-[121%]">
                Join The Worldwide
                <span className="text-yellow"> Blockchain Protest  </span>
                Against Corrupt Government Bodies
              </p>
              <div className="flex items-center  gap-5 pt-6 sm:pt-[30px] md:pt-[40px] lg:pt-[62px]">
                <button className="rounded-[189px] flex items-center bg-yellow  font-semibold font-inter h-[45px] sm:h-[50px] lg:h-[57px] w-[145px] lg:w-[205px] overflow-hidden relative group cursor-pointer text-sm lg:text-base">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-white text-center mx-auto whitespace-nowrap transition duration-200 group-hover:text-black ease">
                    Buy $GrayGensler
                  </span>
                </button>
                <button className="rounded-[189px]  flex items-center font-semibold font-inter h-[45px] sm:h-[50px] lg:h-[57px] w-[145px] lg:w-[164px] overflow-hidden relative group cursor-pointer border-2 text-sm lg:text-base">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-white text-center mx-auto whitespace-nowrap transition duration-200 group-hover:text-black ease">
                    How To Buy?
                  </span>
                </button>
              </div>
              <a
                className="text-white hover:bg-white sm:max-w-full max-w-[400px] hover:text-black duration-200 copy_file border mt-7 sm:mt-9 font-inter text-lg font-normal border-white rounded-[102px] w-full sm:w-[389.5px] h-[55px] sm:h-[61.96px] flex items-center justify-center"
                href="#"
              >
                dwqjddj324dnewdne3dewrrets <FileIcon className="ms-5" />
              </a>
            </div>
            <div className="me-[-36%] md:me-[-13%]">
              <img
                className=" max-w-[400px] sm:max-w-[480px] md:max-w-[500px] xl:max-w-[576.36px]  "
                src={capman}
                alt="capman"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
