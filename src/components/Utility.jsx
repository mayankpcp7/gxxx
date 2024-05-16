import React from "react";
import man from "../assets/images/png/utility-man.png";
import notepad from "../assets/images/png/notepad.png";
const Utility = () => {
  return (
    <>
      <div className="xl:pt-[144px] md:pt-[80px] sm:pt-[60px] py-[48px] lg:pt-[100px] pb-4 bg_utility bg-center bg-cover">
        <div className="max-w-[1164px] px-3 mx-auto relative">
          <p className="font-black font-grandstander lg:block hidden text-[20px] sm:text-[25px] lg:text-[32px] text-[#757575] absolute xl:top-[-17%] start-0 -rotate-[20deg]">
            I love FUDing
          </p>

          <p className="font-black font-grandstander z-10 text-[20px] sm:text-[25px] lg:text-[32px] text-[#757575] rotate-[-20deg] absolute xl:top-[-10%] end-0 md:end-[35%]">
            I love FUDing
          </p>
          <img
            className="max-w-[90px] absolute end-0 top-[10%] z-10 xl:top-[-30%]"
            src={notepad}
            alt="notepad"
          />
          <div className="flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="flex flex-col md:pe-4 lg:pe-0">
              <h2 className="text-black font-inter font-black lg:text-2xl text-[40px] leading-full">
                UTILITY
              </h2>
              <p className="text-base text-[#333333] font-inter font-normal leading-[156%] md:max-w-[550px] pt-5">
                The utility of $LHGG extends beyond its humorous appeal. Holders
                of $LHGG gain access to exclusive merchandise, events, and
                community perks. Furthermore, $LHGG serves as a medium of
                exchange within our ecosystem, facilitating transactions and
                interactions among community members. Through strategic
                partnerships and integrations, we aim to expand the utility of
                $LHGG, creating additional avenues for adoption and growth.
              </p>
              <button className="border border-yellow rounded-[189px] flex items-center bg-yellow font-semibold font-inter h-[45px] sm:h-[50px] lg:h-[57px] w-[145px] lg:w-[205px] overflow-hidden relative group mt-7 cursor-pointer text-sm lg:text-base">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-black text-center mx-auto whitespace-nowrap transition duration-200 group-hover:text-black ease">
                  Buy $GrayGensler
                </span>
              </button>
            </div>
            <div className="relative">
              <p className="font-black font-grandstander sm:text-[25px] lg:text-[32px] text-[#757575]  absolute bottom-[10%] lg:bottom-[15%] start-[-50%] ">
                I love FUDing
              </p>
              <img
                className="max-w-[441px] w-full"
                src={man}
                alt="utility-man"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utility;
