import React from "react";
import twitter from "../assets/images/webp/twitter-logo.webp";
import telegram from "../assets/images/webp/telegram-logo.webp";
import dextool from "../assets/images/webp/dextool-logo.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-black xl:pt-[154px] md:py-[80px] sm:py-[60px] py-[48px] lg:py-[100px] xl:pb-[120px]">
        <div className="max-w-[1164px] mx-auto px-3">
          <div className="flex sm:items-start sm:flex-row flex-col items-center gap-6 sm:gap-0 justify-between flex-wrap">
            <div className="sm:w-7/12 lg:w-5/12">
              <div className="flex justify-between">
                <div>
                  <a href="/" className="font-inter text-white font-black text-[65px] leading-[80%] lg:text-[79.05px]">
                    G<span className="text-yellow">G</span>
                  </a>
                  <p className="text-white font-inter text-base mt-6 sm:mt-10">
                    @copyright2024
                  </p>
                </div>
                <div className="border-s border-yellow ps-[33px] ms-3 sm:ms-0 sm:ps-[66px] min-h-[173px]">
                  <p className="text-white font-bold text-base font-inter">
                    QUICK LINKS
                  </p>
                  <ul className="pt-[30px]">
                    <li>
                      <a
                        className="hover:text-yellow duration-200 text-white font-inter font-normal leading-[160%]"
                        href="https://twitter.com/"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="pt-4">
                      <a
                        className="hover:text-yellow duration-200 text-white font-inter font-normal leading-[160%]"
                        href="https://telegram.com/"
                      >
                        Telegram
                      </a>
                    </li>
                    <li className="pt-4">
                      <a
                        className="hover:text-yellow duration-200 text-white font-inter font-normal leading-[160%]"
                        href="https://www.dextools.io/app/en/pairs"
                      >
                        DexTools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:w-5/12 lg:w-6/12">
              <div className="flex gap-3 sm:gap-5 justify-end">
                <a href="https://www.dextools.io/app/en/pairs">
                  <img className="max-w-[30px] md:max-w-[48px] hover:translate-y-[-15%] duration-200" src={dextool} alt="dextool" />
                </a>
                <a href="https://twitter.com/">
                  <img className="max-w-[30px] md:max-w-[48px] hover:translate-y-[-15%] duration-200" src={twitter} alt="dextool" />
                </a>
                <a href="https://telegram.com/">
                  <img className="max-w-[30px] md:max-w-[48px] hover:translate-y-[-15%] duration-200" src={telegram} alt="dextool" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
