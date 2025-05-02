"use client";
import React, { useState } from "react";
import styles from "./feature.module.css";

const featuresList = [
  {
    icon: "/mf-adda/investor-portfolio-analysis-icon.png",
    title: "Portfolio Analysis",
    description:
      "You can download the complete portfolio report including mutual funds & other assets. Get the historical performance of your portfolio easily & track the portfolio at your fingertips.",
    image: "/mf-adda/app-screen1.webp",
  },
  {
    icon: "/mf-adda/investor-invest-online-icon.png",
    title: "Invest Online",
    description:
      "We offer a 100% paperless process of investment. It takes a few seconds to register a SIP or Purchase an ELSS.",
    image: "/mf-adda/app-screen2.webp",
  },
  {
    icon: "/mf-adda/investor-goal-report-icon.png",
    title: "Goal Tracker",
    description:
      "Give purpose to your investments, you can map all your investments with the goal like child education, marriage or retirement.",
    image: "/mf-adda/app-screen3.webp",
  },
  {
    icon: "/mf-adda/investor-research-icon.png",
    title: "Research",
    description:
      "Invest in well researched cherry-picked perfectly balanced portfolio.",
    image: "/mf-adda/app-screen4.webp",
  },
];

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={`bg-white py-24 ${styles.why_chooseus}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-black mb-10 uppercase">
          Track your Investment at ONE CLICK
        </h2>
        <div className=" flex flex-col lg:flex-row items-center ">
          {/* Phone image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <img
              src={
                hoveredIndex !== null
                  ? featuresList[hoveredIndex].image
                  : "/mf-adda/app-screen1.webp"
              }
              alt="App Screen"
              className="w-[250px] lg:w-[250px] transition duration-300 mb-6 mx-auto"
            />

            <div className="text-center mt-10">
              <h4 className="font-semibold mb-4">Download our app now</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mywealthspace.mywealthspace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/mf-adda/play-store.png"
                    alt="Play Store"
                    className="w-[140px]"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/mywealthspace/id6472266519"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/mf-adda/app-store.png"
                    alt="App Store"
                    className="w-[140px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col space-y-6">
            {featuresList.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex items-start gap-4 min-h-[150px] bg-white p-6 rounded-2xl shadow-md border-l-4 border-[var(--primary)] hover:shadow-lg transition"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10"
                />
                <div>
                  <h5 className="font-semibold text-gray-700 mb-1">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Download Links */}
      </div>
    </section>
  );
}

export default Features;
