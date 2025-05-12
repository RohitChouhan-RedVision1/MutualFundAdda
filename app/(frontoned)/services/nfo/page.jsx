import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "New Fund Offer (NFO)",
    description: "Invest in newly launched mutual fund schemes through NFOs and diversify your portfolio with fresh investment opportunities.",
};

const NFO = () => {
    return (
        <div className='main_section'>
            <div className="container mx-auto px-4 md:px-20">
                {/* Heading */}
                <div className="pb-[20px]">
                    <h1 className="text-2xl md:text-3xl font-bold uppercase">New Fund Offer (NFO)</h1>
                </div>

                {/* Introduction with Image */}
                <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <p className="text-lg text-gray-700 mt-10 text-justify">
                            A New Fund Offer (NFO) is the first-time subscription offer for a new mutual fund scheme launched by an asset management company (AMC). NFOs allow investors to invest in a scheme at its base price, usually ₹10 per unit, and explore fresh investment themes or strategies curated by expert fund managers. Ideal for portfolio diversification, NFOs present a gateway into untapped sectors, asset classes, or unique strategies with professional management.
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                        <Image
                            src="/Services/nfo.png"
                            alt="New Fund Offer"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Benefits of NFOs */}
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Investing in NFOs</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <p className="text-gray-700"><strong>Low Entry Cost:</strong> Invest at the initial unit price, usually ₹10, offering a cost-effective entry into a new fund.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Access to New Strategies:</strong> Gain exposure to new sectors, innovative investment themes, or unique asset classes.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Portfolio Diversification:</strong> NFOs can add variety to your investments, helping to balance risk and return.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Managed by Experts:</strong> Professional fund managers with a clear strategy handle your investment.</p>
                        </li>
                        <li>
                            <p className="text-gray-700"><strong>Transparent Structure:</strong> NFOs follow SEBI regulations and provide detailed offer documents to help informed decision-making.</p>
                        </li>
                    </ul>
                </div>

                {/* Types of NFOs */}
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of New Fund Offers</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <h3 className="font-semibold text-gray-800">Open-Ended NFOs</h3>
                            <p className="text-gray-700">These funds remain open for purchase/redemption even after the NFO period ends, providing ongoing liquidity.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-gray-800">Close-Ended NFOs</h3>
                            <p className="text-gray-700">These schemes have a fixed maturity period and are listed on stock exchanges for liquidity after the NFO period closes.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-gray-800">Thematic and Sectoral NFOs</h3>
                            <p className="text-gray-700">Focus on specific industries or investment themes such as technology, ESG, or international markets.</p>
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Ready to explore new investment opportunities? NFOs provide a fresh start into innovative mutual fund schemes. Browse upcoming offers and invest smartly with expert guidance.
                    </p>
                    <Link href="/contactus" className="text-white">
                        <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">Explore Upcoming NFOs</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NFO;
