import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Structured Products",
    description: "Understand the value of Structured Products as a hybrid investment instrument balancing risk and reward through innovative strategies.",
};

const StructuredProductContent = () => {
    return (
        <div className="main_section">
            <div className="container mx-auto px-2">
                {/* Heading */}
                <div className="pb-[20px]">
                    <h1 className="text-2xl md:text-3xl font-bold uppercase">Why Structured Product [SP]?</h1>
                </div>

                {/* Content with Image */}
                <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <div className="text-lg text-gray-700 space-y-4 text-justify">
                            <p>
                                Structured Product [SP] is a hybrid investment instrument, which is used to improve the return on a fixed income or an equity instrument while reducing the risk on the product using a derivative instrument as insurance on the downside.
                            </p>
                            <p>
                                The layer of derivatives gives it the flexibility needed to blend into a portfolio and enhance its risk to return performance while matching an investor’s objectives.
                            </p>
                            <p>
                                High-risk, high-reward SPs can form a part of the <strong>‘Equity Allocation’</strong> while its lower risk designs can be plugged as part of the <strong>'Debt Allocation'</strong>. This is probably the only instrument which requires minimal human intervention during the course of investment post the designing stage. Hence, it’s a passive strategy which is Mechanical in nature.
                            </p>
                            <p>
                                There are predominantly two kinds of structured products that we offer:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Debt Structured Product:</strong> The target return on the product is around 15% p.a. even in a flat market with a possibility of positive returns in negative markets.
                                </li>
                                <li>
                                    <strong>Equity Structured Product:</strong> The target return on the product is around 18-21% p.a. at 4-8% p.a. NIFTY performance.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                        <Image
                            src="/Services/Structured.png" // Update this path to your image
                            alt="Structured Product Investment"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                    <Link href="/contactus" className="text-white">
                        <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
                            Explore Structured Products
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StructuredProductContent;
