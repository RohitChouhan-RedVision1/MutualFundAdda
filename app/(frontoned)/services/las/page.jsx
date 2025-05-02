import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Loan Against Securities (LAS)",
  description:
    "Leverage your investments with Loan Against Securities (LAS) at attractive interest rates, without having to liquidate your assets.",
};

const LoanAgainstSecurities = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-10">
      {/* Heading and Subheading */}
      <div className="text-center pb-[50px]">
        <h1 className="text-3xl font-bold text-gray-800">
          Loan Against Securities (LAS)
        </h1>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">
          Unlock the Value of Your Investments Without Liquidating
        </p>
      </div>

      {/* Introduction with Image */}
      <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Loan Against Securities (LAS) allows you to borrow funds by pledging
            your existing investments such as shares, mutual funds, bonds, or
            insurance policies. This facility provides quick liquidity while
            letting your investments continue to grow. It's an ideal solution
            for short-term financial needs without compromising your long-term
            financial goals.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/las.jpg"
            alt="Loan Against Securities"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Features of LAS
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <p className="text-gray-700">
              <strong>Attractive Interest Rates:</strong> Enjoy competitive
              interest rates lower than typical unsecured loans.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Quick Processing:</strong> Minimal documentation and fast
              disbursal against eligible securities.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Flexible Repayment:</strong> Choose from overdraft or term
              loan options to suit your repayment preferences.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Retain Ownership:</strong> Continue to earn dividends or
              capital gains while availing a loan.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Wide Range of Acceptable Securities:</strong> Pledge
              mutual funds, shares, bonds, and insurance policies.
            </p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Fulfill your short-term financial needs by unlocking the potential of
          your investments with Loan Against Securities. Apply now and get
          access to funds without disturbing your portfolio.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] text-white rounded-2xl pl-8 pr-8 text-xl">
            Apply for LAS Now!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoanAgainstSecurities;
