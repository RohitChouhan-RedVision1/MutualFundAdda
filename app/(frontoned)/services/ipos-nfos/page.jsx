import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Initial Public Offerings (IPOs) & New Fund Offers (NFOs)',
  description:
    'Explore investment opportunities with IPOs and NFOs. Get early access to high-potential stocks and mutual funds with comprehensive insights and expert guidance.',
};

const IPOsAndNFOs = () => {
  return (
    <div className="main_section">
      <div className="container mx-auto px-4 md:px-20">

        {/* IPO Section */}
        <section className="mb-16">
          <div className="pb-[20px]">
            <h1 className="text-2xl md:text-3xl font-bold uppercase">Initial Public Offering (IPO)</h1>
          </div>
          <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 mt-10 text-justify">
                An IPO allows you to invest in a company as it becomes publicly traded. You get the opportunity to become a shareholder at the earliest stage, often at competitive prices. IPOs can offer strong long-term returns, and our platform helps you stay updated and apply easily.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
              <Image
                src="/Services/ipo.jpg"
                alt="IPO"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in IPOs?</h2>
          <ul className="list-disc pl-5 space-y-3 mb-5">
            <li><strong>Early Entry:</strong> Invest at the ground level.</li>
            <li><strong>Attractive Valuation:</strong> Often priced competitively.</li>
            <li><strong>Diversification:</strong> Add new companies to your portfolio.</li>
            <li><strong>SEBI-Regulated:</strong> Ensures transparency and protection.</li>
            <li><strong>Potential Gains:</strong> Strong performance post-listing.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">IPO Investor Categories</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Retail Investors (RIIs):</strong> Up to ₹2 lakhs.</li>
            <li><strong>HNIs:</strong> Above ₹2 lakhs.</li>
            <li><strong>QIBs:</strong> Institutions like mutual funds and banks.</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="border-t-2 border-gray-200 mb-16" />

        {/* NFO Section */}
        <section>
          <div className="pb-[20px]">
            <h1 className="text-2xl md:text-3xl font-bold uppercase">New Fund Offer (NFO)</h1>
          </div>
          <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 mt-10 text-justify">
                An NFO is the first-time subscription offer for a new mutual fund launched by an asset management company. Investors can purchase units at a nominal price, usually ₹10. NFOs are ideal for gaining exposure to new strategies and sectors not present in existing funds.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
              <Image
                src="/Services/nfo.jpg"
                alt="NFO"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in NFOs?</h2>
          <ul className="list-disc pl-5 space-y-3 mb-5">
            <li><strong>Low Entry Price:</strong> Start with just ₹10 per unit.</li>
            <li><strong>Fresh Strategies:</strong> Invest in newly introduced themes.</li>
            <li><strong>Diversification:</strong> Add new sectors or asset classes to your portfolio.</li>
            <li><strong>Long-Term Potential:</strong> Can deliver solid returns over time.</li>
            <li><strong>Managed by Experts:</strong> Handled by seasoned fund managers.</li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className="mt-12 ">
          <p className="text-lg text-gray-700 mb-4">
            Be among the first to invest in exciting opportunities. Whether it's IPOs or NFOs, we guide you every step of the way. Apply now with ease and confidence.
          </p>
          <Link href="/contactus" className="text-white">
            <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
              Explore IPOs & NFOs
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default IPOsAndNFOs;
