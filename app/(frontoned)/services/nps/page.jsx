import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "National Pension System (NPS)",
    description: "Plan your retirement smartly with the National Pension System – a low-cost, tax-efficient, and flexible investment for your future.",
};

const Nps = () => {
    return (
        <div className='main_section'>
            <div className="container mx-auto px-2">
                
                {/* Heading */}
                <div className="pb-[20px]">
                    <h1 className="text-2xl md:text-3xl font-bold uppercase">National Pension System (NPS)</h1>
                </div>

                {/* Intro Section */}
                <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <p className="text-lg text-gray-700 text-justify">
                            The National Pension System (NPS) is a voluntary, long-term investment plan for retirement under the purview of the Pension Fund Regulatory and Development Authority (PFRDA) and the Government of India.
                        </p>
                        <p className="text-lg text-gray-700 mt-4 text-justify">
                            It enables systematic savings during your working life, offering a mix of equity, corporate bonds, government securities, and alternative assets. NPS is one of the most tax-efficient instruments under Section 80CCD. It provides long-term retirement planning benefits with flexible contribution options, professional fund management, and the ability to choose your investment allocation. Over time, it helps build a substantial corpus, ensuring financial security post-retirement. Additionally, it offers portability across jobs and locations, making it an ideal retirement tool for the modern workforce.

                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                        <Image src="/Services/nps.jpg" alt="NPS Illustration" width={500} height={400} className="rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits of NPS</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li><p className="text-gray-700">Tax Savings: Up to ₹2 lakh tax benefit under Section 80CCD(1) and 80CCD(1B).</p></li>
                        <li><p className="text-gray-700">Low Cost: One of the lowest-cost pension schemes globally.</p></li>
                        <li><p className="text-gray-700">Flexible: Choose your asset mix and fund manager as per risk appetite.</p></li>
                        <li><p className="text-gray-700">Portable: Continuity even if you change job/location.</p></li>
                        <li><p className="text-gray-700">Compounding: Long-term investment horizon helps build a large corpus.</p></li>
                    </ul>
                </div>

                {/* NPS Account Types */}
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of NPS Accounts</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <h3 className="font-semibold text-gray-800">Tier I Account</h3>
                            <p className="text-gray-700">Primary retirement account with withdrawal restrictions and tax benefits.</p>
                        </li>
                        <li>
                            <h3 className="font-semibold text-gray-800">Tier II Account</h3>
                            <p className="text-gray-700">Voluntary savings account without tax benefits and with full liquidity.</p>
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-8">
                    <p className="text-lg text-gray-700 mb-4">
                        Secure your retirement with a disciplined and rewarding investment plan. Start your NPS journey today for a financially free tomorrow.
                    </p>
                    <Link href="/contactus" className='text-white'>
                        <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
                            Start Your NPS Investment Now!
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nps;
