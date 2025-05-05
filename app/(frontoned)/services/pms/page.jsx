import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Portfolio Management Services",
  description:
    "Unlock tailored Portfolio Management Services to grow and safeguard your wealth according to your unique financial objectives.",
};

const PortfolioManagementServices = () => {
  return (
    <div className="main_section">
    <div className="container mx-auto px-4 md:px-20">
      {/* Heading and Subheading */}
      <div className=" pb-[20px]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Portfolio Management Services
        </h1>
      </div>

      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 text-justify items-center justify-center lg:mt-10">
            Unlock tailored Portfolio Management Services (PMS) to grow and
            safeguard your wealth according to your unique financial objectives.
            Portfolio Management Services involve professional management to
            optimize your investments and help you achieve your financial goals.
            Our team of experts will work with you to design a personalized
            strategy that aligns with your risk tolerance, investment horizon,
            and financial aspirations.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/pms-1.jpg"
            alt="Investment Growth"
            width={450}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 lg:pr-8 flex justify-center mb-6 lg:mb-0">
          <Image
            src="/Services/pms-2.jpg"
            alt="Fund Management"
            width={450}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 text-justify items-center lg:mt-10">
            PMS offers a more personalized and actively managed investment
            strategy compared to traditional mutual funds. With PMS, your
            portfolio is managed by experienced fund managers who tailor the
            investments to suit your specific financial goals. Whether you’re
            focused on long-term capital growth or capital preservation, PMS
            offers customized solutions to meet your individual needs.
          </p>
        </div>
      </div>
      <div className="mb-5"></div>

      {/* Types of Portfolio Management Services */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Types of Portfolio Management Services
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h3 className="font-semibold text-gray-800">
              Discretionary Portfolio Management
            </h3>
            <p className="text-gray-700">
              Full delegation of investment decisions to the fund manager based
              on your risk profile and financial objectives. The manager has the
              authority to make investment decisions on your behalf.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">
              Advisory Portfolio Management
            </h3>
            <p className="text-gray-700">
              Collaborative investment guidance where you work with the fund
              manager, receiving recommendations on investments while
              maintaining control over the final decision-making process.
            </p>
          </li>
        </ul>
      </div>

      {/* Features of Portfolio Management Services */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Features of Portfolio Management Services
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <p className="text-gray-700">
              Customized Investment Plans: Aligned with your financial goals and
              risk profile.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Risk Diversification: Spread your investments across asset classes
              to reduce risk.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Ongoing Monitoring: Constant assessment of your portfolio to
              ensure it aligns with your goals.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Expert Strategies: Leverage market expertise and data-driven
              insights to maximize returns.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              Transparent Reporting: Regular updates on portfolio performance
              and detailed reporting.
            </p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className=" mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Your financial success is our priority. Choose our Portfolio
          Management Services to achieve your wealth objectives with a
          personalized approach to investment management. Let us help you make
          the most of your investments and reach your financial milestones.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className=" bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Start Investing in PMS Today!
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default PortfolioManagementServices;
