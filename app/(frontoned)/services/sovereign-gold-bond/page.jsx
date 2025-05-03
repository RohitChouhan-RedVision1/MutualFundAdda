import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Sovereign Gold Bond",
  description: "Invest in Sovereign Gold Bonds to enjoy the benefits of gold investment with added interest income and tax advantages.",
};

const SovereignGoldBond = () => {
  return (
    <div className='main_section'>
    <div className="container mx-auto px-4 md:px-20">
      {/* Heading and Subheading */}
      <div className="pb-[50px]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">Sovereign Gold Bond (SGB)</h1>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">Smart Way to Invest in Gold</p>
      </div>

      {/* Introduction with Image */}
      <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Sovereign Gold Bonds (SGBs) are government-backed securities denominated in grams of gold. They offer an attractive alternative to physical gold investment, combining the benefits of gold price appreciation with a fixed annual interest. SGBs are a secure, cost-effective, and tax-efficient way to invest in gold without the hassle of storage or purity concerns.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/gold.jpg"
            alt="Sovereign Gold Bond"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits of SGBs */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in Sovereign Gold Bonds?</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><p className="text-gray-700"><strong>Assured Interest:</strong> Earn a fixed 2.5% annual interest on the initial investment in addition to potential gold price appreciation.</p></li>
          <li><p className="text-gray-700"><strong>Tax Benefits:</strong> Capital gains on redemption are tax-free, and interest is taxable as per income slab.</p></li>
          <li><p className="text-gray-700"><strong>No Storage Hassles:</strong> Avoid the risks and costs associated with storing physical gold.</p></li>
          <li><p className="text-gray-700"><strong>Tradable on Exchanges:</strong> SGBs can be traded in the secondary market, providing liquidity options.</p></li>
          <li><p className="text-gray-700"><strong>Government Backed:</strong> Issued by the Reserve Bank of India on behalf of the Government of India, ensuring credibility and security.</p></li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features of SGB</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><p className="text-gray-700"><strong>Denomination:</strong> Issued in multiples of 1 gram of gold.</p></li>
          <li><p className="text-gray-700"><strong>Tenure:</strong> 8 years with an exit option from the 5th year onwards.</p></li>
          <li><p className="text-gray-700"><strong>Interest:</strong> 2.5% p.a. paid semi-annually.</p></li>
          <li><p className="text-gray-700"><strong>Eligibility:</strong> Resident individuals, HUFs, trusts, universities, and charitable institutions.</p></li>
          <li><p className="text-gray-700"><strong>Mode of Holding:</strong> In demat or physical certificate format.</p></li>
        </ul>
      </div>

      {/* CTA */}
      <div className=" mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Take advantage of a secure and rewarding way to invest in gold. Start your Sovereign Gold Bond journey today and diversify your portfolio smartly.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-6 py-3 text-lg font-semibold rounded-md shadow">
            Invest in SGB Now
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SovereignGoldBond;
