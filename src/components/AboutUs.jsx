import React from "react";
import aboutboy from "../assets/images/webp/about-man.webp";
import dextool from "../assets/images/png/about-dextool.png";
import horseicon from "../assets/images/png/horse-icon.png";
import telegram from "../assets/images/png/about-telegram.png";
import twitter from "../assets/images/png/about-twitter.png";
import lines from "../assets/images/png/about-line.png";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-3 lg:py-[100px] md:py-[80px] xl:pt-[218px] xl:pb-[130px]">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="ms-[-23%]">
              <img
                className="max-w-[688px] w-full"
                src={aboutboy}
                alt="about_boy"
              />
            </div>
            <div className="flex flex-col md:ps-[59px]">
              <div className="flex items-center gap-6">
                <img className="max-w-[59.8px]" src={dextool} alt="dextool" />
                <img
                  className="max-w-[79.8px]"
                  src={horseicon}
                  alt="horseicon"
                />
                <img
                  className="max-w-[72.58px]"
                  src={twitter}
                  alt="horseicon"
                />
                <img
                  className="max-w-[75.23px]"
                  src={telegram}
                  alt="horseicon"
                />
                <img className="max-w-[75.95px]" src={lines} alt="horseicon" />
              </div>
              <div className="mt-5">
                <h2 className="text-black xl:text-2xl font-inter leading-full font-black">
                  ABOUT US
                </h2>
                <p className="text-[#333333] max-w-[550px] pt-5 text-base font-inter">
                In the ever-evolving landscape of cryptocurrency, where
                  markets can swing on a tweet and sentiments wield as much
                  power as technical analysis, one figure has recently stepped
                  into the spotlight: Gary Gensler, or as we affectionately call
                  him, GG. With his recent comments on Bitcoin, Gensler stirred
                  the pot of fear, uncertainty, and doubt (FUD), sending
                  shockwaves through the crypto community.
                </p>
                <p className="text-[#333333] max-w-[550px] pt-[17px] text-base font-inter">
                  But fear not, for in the midst of this whirlwind of emotions,
                  there emerges a beacon of levity and laughter: Let's Hug GG
                  ($LHGG).Hug GG We're not your average token; we're a humorous
                  response to the serious business of crypto. Inspired by
                  Gensler's remarks and the ensuing FUD frenzy, $LHGG aims to
                  inject a healthy dose of humor into the conversation while
                  playfully encouraging individuals to consider selling their
                  Bitcoins.
                </p>
                <p className="text-[#333333] max-w-[550px] text-base pt-[17px] font-inter">
                  Iou see, we believe that in times of uncertainty, a good laugh
                  can be the best antidote. And what better way to address fear
                  than with a hug—from behind, of course! Our slogan, "If you
                  sell your BTC, we'll let you hug GG from behind so tightly,"
                  embodies our playful approach to tackling the anxiety
                  surrounding Bitcoin and the broader crypto market.
                </p>
                <p className="text-[#333333] max-w-[550px] text-base pt-[17px] font-inter">
                  So, buckle up and get ready for a rollercoaster ride of
                  giggles, hugs, and maybe even a few profitable trades along
                  the way. Because in the world of $LHGG, laughter isn't just
                  the best medicine—it's the best investment strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
