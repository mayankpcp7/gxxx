import React from "react";
import aboutboy from "../assets/images/webp/about-man.webp";
import dextool from "../assets/images/png/about-dextool.png";
import horseicon from "../assets/images/png/horse-icon.png";
import telegram from "../assets/images/png/about-telegram.png";
import twitter from "../assets/images/png/about-twitter.png";
import lines from "../assets/images/png/about-line.png";
import spax from "../assets/images/png/spax.png";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-3 sm:py-[60px] py-[48px] lg:py-[100px] md:py-[80px] xl:pt-[218px] xl:pb-[130px] relative">
        <img
          className=" absolute max-w-[100px] xl:max-w-[160px] end-0 xl:end-[-12%] bottom-0"
          src={spax}
          alt="spax"
        />
        <div className="flex items-center justify-between gap-6 md:gap-0 md:flex-row flex-col">
          <div className="xl:ms-[-14%] relative">
            <p className="font-black font-grandstander text-[20px] sm:text-[25px] lg:text-[32px] text-[#757575] xl:ms-[23%] absolute top-[5%] md:top-[-72px] -rotate-[20deg]">
              I love FUDing
            </p>
            <p className="font-black font-grandstander text-[20px] sm:text-[25px] lg:text-[32px] text-[#757575] xl:ms-[21%] absolute bottom-[10%] md:bottom-[-18%] start-[-5%] md:start-[15%]">
              I love FUDing
            </p>
            <p className="font-black font-grandstander text-[20px] sm:text-[25px] lg:text-[32px] text-[#757575] xl:ms-[23%] rotate-[-20deg] absolute bottom-[10%] md:bottom-[18%] end-[5%] md:end-[0%]">
              I love FUDing
            </p>

            <img
              className="max-w-[500px] md:max-w-[688px] w-full"
              src={aboutboy}
              alt="about_boy"
            />
          </div>
          <div className="flex flex-col lg:ps-4 xl:ps-[59px]">
            <div className="flex items-center gap-6">
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
            <div className="mt-5 ps-2 xl:ps-3">
              <h2 className="text-black text-xl xl:text-2xl font-inter leading-full font-black">
                ABOUT US
              </h2>
              <p className="text-[#333333] md:max-w-[550px] leading-[156%] pt-5 text-[13px]  lg:text-base font-inter">
                In the ever-evolving landscape of cryptocurrency, where markets
                can swing on a tweet and sentiments wield as much power as
                technical analysis, one figure has recently stepped into the
                spotlight: Gary Gensler, or as we affectionately call him, GG.
                With his recent comments on Bitcoin, Gensler stirred the pot of
                fear, uncertainty, and doubt (FUD), sending shockwaves through
                the crypto community.
              </p>
              <p className="text-[#333333] md:max-w-[550px] pt-2 leading-[156%] lg:pt-[17px] text-[13px]  lg:text-base font-inter">
                But fear not, for in the midst of this whirlwind of emotions,
                there emerges a beacon of levity and laughter: Let's Hug GG
                ($LHGG).Hug GG We're not your average token; we're a humorous
                response to the serious business of crypto. Inspired by
                Gensler's remarks and the ensuing FUD frenzy, $LHGG aims to
                inject a healthy dose of humor into the conversation while
                playfully encouraging individuals to consider selling their
                Bitcoins.
              </p>
              <p className="text-[#333333] md:max-w-[560px] text-[13px] leading-[156%] lg:text-base pt-2 lg:pt-[17px] font-inter">
                Iou see, we believe that in times of uncertainty, a good laugh
                can be the best antidote. And what better way to address fear
                than with a hug—from behind, of course! Our slogan, "If you sell
                your BTC, we'll let you hug GG from behind so tightly," embodies
                our playful approach to tackling the anxiety surrounding Bitcoin
                and the broader crypto market.
              </p>
              <p className="text-[#333333] md:max-w-[580px] text-[13px] leading-[156%] lg:text-base pt-2 lg:pt-[17px] font-inter">
                So, buckle up and get ready for a rollercoaster ride of giggles,
                hugs, and maybe even a few profitable trades along the way.
                Because in the world of $LHGG, laughter isn't just the best
                medicine—it's the best investment strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
