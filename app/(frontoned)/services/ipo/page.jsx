import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Initial Public Offering (IPO)",
    description: "Invest early in promising companies with IPOs. Gain access to new market opportunities and potentially high returns from the very beginning.",
};

const IPO = () => {
    return (
        <div className='main_section'>
            <div className="container mx-auto px-4 md:px-20">
                {/* Heading */}
                <div className="pb-[20px]">
                    <h1 className="text-2xl md:text-3xl font-bold uppercase">Initial Public Offering (IPO)</h1>
                </div>

                {/* Introduction with Image */}
                <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <p className="text-lg text-gray-700 mt-10 text-justify">
                            An Initial Public Offering (IPO) is your opportunity to invest in a company as it becomes publicly traded on the stock exchange. IPOs allow individuals to become shareholders from the beginning, often at attractive valuations. With potential for long-term gains and portfolio diversification, IPOs are a key route for building wealth. Our platform provides access to upcoming IPOs, detailed insights, and expert support to help you make informed investment decisions.
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

                {/* Benefits of Investing in IPOs */}
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Invest in IPOs?</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <p className="text-gray-700"><strong>Early Investment Opportunity:</strong> Invest in companies at the ground level and benefit from long-term growth.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Attractive Pricing:</strong> IPOs often offer shares at competitive prices before they list on the stock exchange.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Portfolio Diversification:</strong> Add new and emerging companies to your portfolio for better risk management.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Transparency and Regulation:</strong> IPOs are regulated by SEBI, ensuring proper disclosures and investor protection.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Potential for High Returns:</strong> Successful IPOs can offer significant capital gains post-listing.</p>
                        </li>
                    </ul>
                </div>

                {/* Types of IPO Investors */}
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">IPO Investor Categories</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <h3 className="font-semibold text-gray-800">Retail Individual Investors (RIIs)</h3>
                            <p className="text-gray-700">Small investors who apply for shares worth up to ₹2 lakhs in an IPO.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-gray-800">High Net-Worth Individuals (HNIs)</h3>
                            <p className="text-gray-700">Investors who invest more than ₹2 lakhs, often applying under the non-institutional category.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-gray-800">Qualified Institutional Buyers (QIBs)</h3>
                            <p className="text-gray-700">Institutional investors such as mutual funds, banks, and insurance companies that participate in IPOs.</p>
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Ready to invest in the next big opportunity? Stay updated with upcoming IPOs and take the first step toward owning shares in promising companies. Apply now with ease and transparency.
                    </p>
                    <Link href="/contactus" className="text-white">
                        <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">Explore Upcoming IPOs</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IPO;
