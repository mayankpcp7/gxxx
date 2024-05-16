import React from "react";
import paper from "../assets/images/png/eco-system-paper.png";
import ecoman from "../assets/images/png/eco-man.png";
import dextool from "../assets/images/png/about-dextool.png";
import horseicon from "../assets/images/png/horse-icon.png";
import telegram from "../assets/images/png/about-telegram.png";
import twitter from "../assets/images/png/about-twitter.png";
import lines from "../assets/images/png/about-line.png";
import spax from "../assets/images/png/spax.png";
const EcoSystem = () => {
  return (
    <>
      <div className="bg-yellow h-[136px] -mx-2 flex justify-center items-center rotate-[-2.02deg] my-7">
        <p className=" text-black font-inter px-3 text-[20px] sm:text-[24px] lg:text-[36px] text-center font-black">
          PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY
        </p>
      </div>
      <div className="bg_ecosystem mb-[48px] sm:mb-[68px] bg-center bg-cover sm:pt-[32px] pt-[20px] md:pt-[52px] lg:pt-[72px] xl:pt-[177px] pb-2">
        <div className="mx-auto max-w-[1164px] px-3 relative">
          <img className="absolute max-w-[100px] lg:max-w-[160px] bottom-[-5%] xl:bottom-0 end-[-10%]" src={spax} alt="spax" />
          <img
            className="max-w-[100px] xl:max-w-[159px] absolute md:top-[-20%] -top-6 start-[-2%] xl:start-[-10%]"
            src={paper}
            alt="paper"
          />
          <div className="flex md:flex-row flex-col items-center justify-between">
            <img
              className="max-w-[400px] lg:max-w-[565px] w-full ms-[-10%]"
              src={ecoman}
              alt="ecosystem_man"
            />
            <div className="flex flex-col lg:ps-4 xl:ps-[59px]">
              <div className="flex items-center gap-6 pt-3 md:pt-0">
                <img
                  className="max-w-[40px] hover:translate-y-[-15%] duration-200 lg:max-w-[59.8px]"
                  src={dextool}
                  alt="dextool"
                />
                <img
                  className="max-w-[40px] hover:translate-y-[-15%] duration-200 lg:max-w-[79.8px]"
                  src={horseicon}
                  alt="horseicon"
                />
                <img
                  className="max-w-[40px] hover:translate-y-[-15%] duration-200 lg:max-w-[72.58px]"
                  src={twitter}
                  alt="horseicon"
                />
                <img
                  className="max-w-[40px] hover:translate-y-[-15%] duration-200 lg:max-w-[75.23px]"
                  src={telegram}
                  alt="horseicon"
                />
                <img
                  className="max-w-[40px] hover:translate-y-[-15%] duration-200 lg:max-w-[75.95px]"
                  src={lines}
                  alt="horseicon"
                />
              </div>
              <div className="lg:mt-5 mt-2 md:ps-2 ">
                <h2 className="text-black text-xl xl:text-2xl font-inter leading-full font-black">
                  ECOSYSTEM
                </h2>
                <p className="text-[#333333] md:max-w-[545px] leading-[156%] pt-3 lg:pt-5 text-[12px]  lg:text-base font-inter">
                  The $LHGG ecosystem is built upon the principles of
                  inclusivity, humor, and innovation. Our community-driven
                  approach empowers members to actively participate in
                  governance, decision-making, and promotional activities.
                  Through social media campaigns, memes, and creative content,
                  we seek to amplify the message of embracing humor in the
                  crypto space and challenging conventional narratives.
                  Together, we aspire to foster a vibrant and engaging ecosystem
                  where laughter reigns supreme.
                </p>
                <button className="rounded-[189px] mt-[33px] border border-yellow flex items-center bg-yellow  font-semibold font-inter h-[45px] sm:h-[50px] lg:h-[57px] w-[145px] lg:w-[205px] overflow-hidden relative group cursor-pointer text-sm lg:text-base">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-black text-center mx-auto whitespace-nowrap transition duration-200 group-hover:text-black ease">
                    Buy $GrayGensler
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoSystem;
