import React from "react";
import twitter from "../assets/images/webp/twitter-logo.webp";
import telegram from "../assets/images/webp/telegram-logo.webp";
import dextool from "../assets/images/webp/dextool-logo.webp";
import Marquee from "react-fast-marquee";
const SocialSlider = () => {
  return (
    <div className="bg-yellow py-6 sm:py-8 md:py-10">
      <div className="max-w-[1164px] px-3 mx-auto">
        <Marquee loop={0} speed={50}>
          <div className="sm:hidden flex items-center gap-10 justify-center">
            <div className="flex items-center">
              <img
                className="max-w-[36px] ms-10"
                src={twitter}
                alt="socialmedia_logo"
              />
              <p className="font-inter ms-[22px] text-white font-semibold lg:text-xl xl:text-[48px]">
                twitter
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="max-w-[36px]"
                src={telegram}
                alt="socialmedia_logo"
              />
              <p className="font-inter ms-[22px] text-white font-semibold lg:text-xl xl:text-[48px]">
                Telegram
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="max-w-[36px]"
                src={dextool}
                alt="socialmedia_logo"
              />
              <p className="font-inter ms-[22px] text-white font-semibold lg:text-xl xl:text-[48px]">
                DEXTOOLS
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="max-w-[36px]"
                src={twitter}
                alt="socialmedia_logo"
              />
              <p className="font-inter ms-[22px] text-white font-semibold lg:text-xl xl:text-[48px]">
                twitter
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="max-w-[36px]"
                src={telegram}
                alt="socialmedia_logo"
              />
              <p className="font-inter ms-[22px] text-white font-semibold lg:text-xl xl:text-[48px]">
                Telegram
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="max-w-[36px]"
                src={dextool}
                alt="socialmedia_logo"
              />
              <p className="font-inter ms-[22px] text-white font-semibold lg:text-xl xl:text-[48px]">
                DEXTOOLS
              </p>
            </div>
          </div>
        </Marquee>
        <div className="items-center hidden sm:flex justify-between">
          <div className="flex items-center ">
            <img
              className="max-w-[46px]"
              src={twitter}
              alt="socialmedia_logo"
            />
            <p className="font-inter ms-3 md:ms-[22px] text-white font-semibold text-[30px] lg:text-xl xl:text-[48px]">
              twitter
            </p>
          </div>
          <div className="flex items-center ">
            <img
              className="max-w-[46px]"
              src={telegram}
              alt="socialmedia_logo"
            />
            <p className="font-inter ms-3 md:ms-[22px] text-white font-semibold text-[30px] lg:text-xl xl:text-[48px]">
              Telegram
            </p>
          </div>
          <div className="flex items-center ">
            <img
              className="max-w-[46px]"
              src={dextool}
              alt="socialmedia_logo"
            />
            <p className="font-inter ms-3 md:ms-[22px] text-[30px] text-white font-semibold lg:text-xl xl:text-[48px]">
              DEXTOOLS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSlider;
