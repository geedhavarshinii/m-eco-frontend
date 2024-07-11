import React, { useState } from "react";
import logo from "../img/logo.png";
import Navbar from "./Navbar";
import userIcon from "../img/user-icon.png";
import rewardIcon1 from "../img/reward-icon1.png"; // replace with actual path or use appropriate icon library
import rewardIcon2 from "../img/reward-icon2.png"; // replace with actual path or use appropriate icon library
import rewardIcon3 from "../img/reward-icon3.png"; // replace with actual path or use appropriate icon library

const GreenRewards = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="py-8">
        <section className="text-center">
          <h1 className="text-pinkone text-2xl font-bold mb-2 font-robocon">
            GREEN REWARDS{" "}
            <span className="text-greenone text-2xl font-bold font-robotocon">PROGRAM</span>{" "}
          </h1>
          <div className="flex flex-row justify-between m-28 items-center mt-24 font-krub">
            <div className="bg-greenone bg-opacity-60 rounded-lg shadow-md h-auto w-5/12">
              <p className="text-white text-4xl font-semibold mt-10 m-5 p-10">
                sometimes, what you sow, is not what you reap – because
                sometimes, you reap{"  "}
                <span className="text-red-500 italic">a little more</span>
              </p>
              <p className="text-gray-600 mt-8 m-7">
                with green rewards program, every green choice of yours is
                appreciated.
              </p>
            </div>
            <div className="mr-20">
              <div className="text-greenone font-bold text-2xl mb-10">your green stats</div>
              <div className="flex justify-center items-center mt-4">
                <div className="bg-gray-200 text-center mx-2 h-14">
                  <span className="text-5xl text-pinkone pt-10 pb-10 pl-3 pr-3">2</span>
                </div>
                <div className=" bg-gray-200 text-center mx-2 h-14">
                  <span className="text-5xl text-pinkone pt-10 pb-10 pl-3 pr-3">8</span>
                </div>
                <div className="bg-gray-200 text-center mx-2 h-14">
                  <span className="text-5xl text-pinkone pt-10 pb-10 pl-3 pr-3">0</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-700">
                    28 points from thrifting
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-700">
                    168 points from renting
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-700">
                    84 points from donations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="flex justify-around items-start">
            <div className="text-center max-w-xs">
              <img
                src={rewardIcon1}
                alt="Reward Icon 1"
                className="h-16 mx-auto mb-4"
              />
              <p className="text-red-500">
                get discounts that make you want to grab as many deals as you
                can, as soon as you can
              </p>
            </div>
            <div className="text-center max-w-xs">
              <img
                src={rewardIcon2}
                alt="Reward Icon 2"
                className="h-16 mx-auto mb-4"
              />
              <p className="text-red-500">
                choose to receive exclusively curated selection of sustainable
                fashion items as regularly as you want
              </p>
            </div>
            <div className="text-center max-w-xs">
              <img
                src={rewardIcon3}
                alt="Reward Icon 3"
                className="h-16 mx-auto mb-4"
              />
              <p className="text-red-500">
                gain opportunities to donate to causes that move you; that make
                you feel like you did what you could to save the world
              </p>
              <p className="text-xs text-red-500">(click here to donate)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GreenRewards;
