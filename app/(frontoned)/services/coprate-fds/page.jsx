import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Corporate Fixed Deposits (FDs)",
  description:
    "Invest in Corporate Fixed Deposits (FDs) for attractive interest rates and stable returns with leading financial institutions.",
};

const CorporateFDs = () => {
  return (
    <div className="main_section">
    <div className="container mx-auto px-4 md:px-20">
      {/* Heading and Subheading */}
      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Corporate Fixed Deposits (FDs)
        </h1>
        {/* <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">
          Attractive Interest Rates with Stable Returns
        </p> */}
      </div>

      {/* Introduction with Image */}
      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Corporate Fixed Deposits (FDs) are term deposit instruments offered
            by non-banking financial companies (NBFCs) and large corporations. 
            They typically offer higher interest rates than traditional bank FDs, 
            making them an attractive option for investors seeking better returns. 
            While Corporate FDs come with slightly higher risks compared to bank FDs, 
            they are backed by companies with strong credit ratings, making them a 
            reliable option for portfolio diversification.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/corporate-fds-1.jpg"
            alt="Corporate FD"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits of Corporate FDs */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Benefits of Investing in Corporate Fixed Deposits (FDs)
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <p className="text-gray-700">
              <strong>Higher Interest Rates:</strong> Corporate FDs typically offer
              higher returns compared to bank FDs, making them a compelling investment
              choice.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Flexible Tenure:</strong> Choose from a variety of deposit durations
              based on your financial goals.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Safety & Credit Ratings:</strong> Corporate FDs come with credit ratings
              that help assess the risk level, allowing you to make informed decisions.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Interest Payout Options:</strong> Corporate FDs offer options such as 
              monthly, quarterly, or cumulative interest payouts to suit your income needs.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Investment Diversification:</strong> Adding Corporate FDs to your portfolio
              can provide a stable income stream while balancing risk.
            </p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className="mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Take advantage of attractive interest rates and secure your financial future with
          Corporate Fixed Deposits. Start investing today and enjoy stable returns.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Start Your Corporate FD Investment Now!
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default CorporateFDs;
