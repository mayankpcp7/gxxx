import React from "react";
import toplayer from "../assets/images/png/cloudy-layer.png";
import bottomlayer from "../assets/images/png/top-layer.png";
const Takenomics = () => {
  return (
    <>
      <img className="w-full" src={toplayer} alt="cloudy_layer" />
      <div className="bg-black -my-[2px]">
        <div className="max-w-[1164px] px-3 mx-auto md:pt-[81px] sm:pt-[60px] pt-[48px] pb-[29px]">
          <div className="flex lg:flex-row items-center lg:items-start flex-col justify-between">
            <div className="flex flex-col sm:min-w-[453px] lg:items-start justify-between items-center">
              <h2 className="text-white font-inter font-black leading-[121%] text-xl xl:text-[64px]">
                TOKENOMICS
              </h2>
              <p className="lg:max-w-[453px] lg:text-start max-w-[840px] text-center pt-5 text-[#828282] font-inter text-base leading-[187.5%]">
                Let's Hug GG ($LHGG) operates on a deflationary tokenomics model
                designed to incentivize selling Bitcoin. With a fixed total
                supply and a burn mechanism in place, each transaction
                contributes to reducing the circulating supply of $LHGG, thereby
                increasing its scarcity and value over time. Additionally, a
                portion of transaction fees is allocated to liquidity pools,
                ensuring stability and liquidity for $LHGG holders.
              </p>
              <div className="border sm:mx-0 mx-auto mt-5 p-4 sm:p-6 border-[#cccc] sm:max-w-[404px] rounded-[20px]">
                <p className="text-white font-inter text-[20px] leading-[150%]">
                  Token Name:
                  <span className="font-bold ps-6">Let’s Hug GG </span>
                </p>
                <p className="text-white mt-[12.58px] font-inter text-[20px] leading-[150%]">
                  Token Symbol:
                  <span className="font-bold ps-3">$LHGG</span>
                </p>
                <p className="text-white mt-[12.58px] font-inter text-[20px] leading-[150%]">
                  Total Supply:
                  <span className="font-bold ps-6"> 1 Billion $LHGG</span>
                </p>
                <p className="text-white mt-[12.58px] font-inter text-[20px] leading-[150%]">
                  Total Type:
                  <span className="font-bold ps-10"> Solana SPL Token</span>
                </p>
              </div>
            </div>
            <div className="flex sm:ps-6 xl:ps-[75px] flex-col pt-5 w-full">
              <div className="flex w-full justify-center lg:justify-start">
                <div className="bg-yellow min-h-full sm:h-[101px] py-[16.5px] border border-black  max-w-[296px] w-full">
                  <h5 className="text-black text-center sm:whitespace-nowrap leading-[150%] font-semibold font-inter text-base sm:text-[20px]">
                    Marketing & Partnerships
                  </h5>
                  <p className="font-inter font-semibold text-[32px] text-center">
                    5%
                  </p>
                </div>
                <div className="bg-yellow min-h-full sm:h-[101px] py-[16.5px] border mx-[18.5px] border-black  max-w-[131px] w-full">
                  <h5 className="text-black text-center leading-[150%] font-semibold font-inter text-base sm:text-[20px]">
                    Reserve
                  </h5>
                  <p className="font-inter font-semibold text-[32px] text-center">
                    5%
                  </p>
                </div>
                <div className="bg-yellow min-h-full sm:h-[101px] py-[16.5px] border border-black  max-w-[145px] w-full">
                  <h5 className="text-black text-center leading-[150%] font-semibold font-inter text-base sm:text-[20px]">
                    Public Sale
                  </h5>
                  <p className="font-inter font-semibold text-[32px] text-center">
                    45%
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-start justify-center w-full pt-[18.5px]">
                <div className="bg-yellow min-h-full sm:h-[101px] py-[16.5px] border border-black  max-w-[296px] w-full">
                  <h5 className="text-black white text-center leading-[150%] font-semibold font-inter text-base sm:text-[20px]">
                    Community Development
                  </h5>
                  <p className=" font-inter font-semibold text-[32px] text-center">
                    15%
                  </p>
                </div>
                <div className="bg-yellow min-h-full sm:h-[101px] py-[16.5px] border border-black  max-w-[296px] w-full ms-6">
                  <h5 className="text-black white text-center leading-[150%] font-semibold font-inter text-base sm:text-[20px]">
                    Ecosystem Fund
                  </h5>
                  <p className=" font-inter font-semibold text-[32px] text-center">
                    10%
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-center  pt-[18.5px]">
                <div className="bg-yellow min-h-full sm:h-[101px] py-[16.5px] border border-black  max-w-[296px] w-full">
                  <h5 className="text-black white text-center leading-[150%] font-semibold font-inter text-base sm:text-[20px]">
                    Team & Adisors
                  </h5>
                  <p className=" font-inter font-semibold text-[32px] text-center">
                    20%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full" src={bottomlayer} alt="" />
    </>
  );
};

export default Takenomics;
