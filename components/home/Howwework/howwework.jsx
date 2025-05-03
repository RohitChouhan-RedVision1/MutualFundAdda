import Link from "next/link";
import React from "react";

const Howwework = () => {
  return (
    <div className="bg-[#EFF1F9] main_section">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">How We Work</h2>
      </div>

      <div className="container mx-auto px-4 md:px-14">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* KYC Menu Box */}
          <div className="w-full lg:w-1/3">
            <Link
              href="/login"
              className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-[#FFAE00] min-h-[350px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-[#FFAE00] flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-white">
                  <img
                    src="/mf-adda/KYC.png"
                    alt="KYC"
                    className="w-16 h-16 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h5 className="text-xl font-semibold text-center mb-2 group-hover:text-white">
                KYC Menu
              </h5>
              <p className="text-gray-600  text-justify group-hover:text-white">
                KYC is one time exercise while dealing in securities markets -
                once KYC is done through a SEBI registered intermediary (broker,
                DP, Mutual Fund etc), you need not undergo the same process
                again when you approach another intermediary.
              </p>
            </Link>
          </div>

          {/* CAS Upload Box (commented out in original) */}
          <div className="w-full lg:w-1/3">
            <Link
              href="/login"
              className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-[var(--primary)] min-h-[350px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-[var(--primary)] flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-white">
                  <img
                    src="/mf-adda/CASH-UPLOAD.png"
                    alt="KYC"
                    className="w-16 h-16 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h5 className="text-xl font-semibold text-center mb-2 group-hover:text-white">
              CAS Upload
              </h5>
              <p className="text-gray-600 text-justify group-hover:text-white">
              Get a comprehensive analysis of your existing Mutual funds, we provide detailed analysis and health check-up of your Mutual Funds...!!
              Import your Mutual Fund details from the official statements and get a complete analysis for free.
              </p>
            </Link>
          </div>

          {/* Tools Box (commented out in original) */}
          <div className="w-full lg:w-1/3">
            <Link
              href="/tools"
              className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-[#18D48D] min-h-[350px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-[#18D48D] flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-white">
                  <img
                    src="/mf-adda/FINANCIAL-TOOLS.png"
                    alt="KYC"
                    className="w-16 h-16 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h5 className="text-xl font-semibold text-center mb-2 group-hover:text-white">
              Tools
              </h5>
              <p className="text-gray-600  text-justify group-hover:text-white">
              Financial tools are one of the most efficient ways that can be used for life Goal Planning and investments. These financial tools are highly helpful in evaluating and planning for your investments.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howwework;
