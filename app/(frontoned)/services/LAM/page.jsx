import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Loan Against Mutual Funds",
  description: "Leverage your mutual fund investments without redeeming them. Get quick access to funds through Loan Against Mutual Funds (LAM).",
};

const LoanAgainstMutualFunds = () => {
  return (
    <div className='main_section'>
    <div className="container mx-auto px-4 md:px-20">
      {/* Heading and Subheading */}
      <div className="pb-[20px]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">Loan Against Mutual Funds</h1>
        {/* <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">Access Funds Without Breaking Your Investments</p> */}
      </div>

      {/* Introduction with Image */}
      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Loan Against Mutual Funds (LAM) allows you to unlock the value of your mutual fund investments without redeeming them. You can borrow funds by pledging your mutual fund units as collateral, making it a convenient and cost-effective option for short-term financial needs. This helps you maintain your investment portfolio while managing liquidity efficiently.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/lm.jpg"
            alt="Loan Against Mutual Funds"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Loan Against Mutual Funds</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><p className="text-gray-700"><strong>No Need to Redeem:</strong> Continue earning returns on your investments while availing the loan.</p></li>
          <li><p className="text-gray-700"><strong>Quick Processing:</strong> Minimal documentation and quick disbursal of funds.</p></li>
          <li><p className="text-gray-700"><strong>Flexible Repayment:</strong> Enjoy repayment flexibility with overdraft or term loan options.</p></li>
          <li><p className="text-gray-700"><strong>Lower Interest Rates:</strong> Compared to unsecured personal loans.</p></li>
          <li><p className="text-gray-700"><strong>Online Pledging:</strong> Pledge your mutual fund units online with supported platforms.</p></li>
        </ul>
      </div>

      {/* Key Highlights */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Highlights</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><p className="text-gray-700"><strong>Eligible Schemes:</strong> Most equity and debt mutual funds are eligible.</p></li>
          <li><p className="text-gray-700"><strong>Loan Amount:</strong> Depends on the Net Asset Value (NAV) and type of scheme.</p></li>
          <li><p className="text-gray-700"><strong>Collateral:</strong> Mutual Fund units held in demat or physical form.</p></li>
          <li><p className="text-gray-700"><strong>Tenure:</strong> Can range from a few months to a couple of years based on lender policies.</p></li>
        </ul>
      </div>

      {/* CTA */}
      <div className=" mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Need liquidity but don’t want to exit your mutual fund investments? Leverage your portfolio with a Loan Against Mutual Funds and meet your financial goals.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Apply for LAM Today!
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LoanAgainstMutualFunds;
