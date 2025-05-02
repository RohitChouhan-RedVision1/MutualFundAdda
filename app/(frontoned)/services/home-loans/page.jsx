import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Home Loans",
    description: "Get the best home loan options with competitive interest rates, flexible tenures, and easy documentation to make your dream home a reality.",
};

const HomeLoans = () => {
    return (
        <div className="container mx-auto px-4 md:px-20 py-10">
            {/* Heading and Subheading */}
            <div className="text-center pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Home Loans</h1>
                <div className="em_bar mx-auto">
                    <div className="em_bar_bg" />
                </div>
                <p className="text-xl text-gray-600 mt-2">Making Your Dream Home a Reality</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 mt-10 text-justify">
                        Home loans provide you with the necessary funds to purchase your dream home, renovate an existing property, or even refinance your current mortgage. With attractive interest rates and flexible repayment terms, home loans are a popular choice for many individuals looking to invest in real estate. We offer home loan options from leading financial institutions, with the ease of online application and quick approval processes.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image
                        src="/Services/real-estate-2.jpg"
                        alt="Home Loan"
                        width={500}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits of Home Loans */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Home Loans</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700"><strong>Competitive Interest Rates:</strong> Enjoy affordable and competitive interest rates to help you save money over the long term.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Flexible Repayment Terms:</strong> Choose from a variety of repayment tenures to fit your budget and financial plans.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Tax Benefits:</strong> Benefit from tax deductions on interest paid under Section 24(b) and principal repayment under Section 80C.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Easy Online Application:</strong> Apply for a home loan online from the comfort of your home and receive instant pre-approvals.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Long-Term Financial Flexibility:</strong> Home loans offer long-term tenure options, making monthly repayments more manageable.</p>
                    </li>
                </ul>
            </div>

            {/* Home Loan Types */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Home Loans</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <h3 className="font-semibold text-gray-800">Home Purchase Loans</h3>
                        <p className="text-gray-700">Loans to buy new or resale residential properties, providing you with the funds needed for a home purchase.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Home Improvement Loans</h3>
                        <p className="text-gray-700">Loans designed to fund renovations, repairs, or upgrades to your existing home.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Home Construction Loans</h3>
                        <p className="text-gray-700">Loans that provide the necessary funds for building a new home from the ground up.</p>
                    </li>
                    <li>
                        <h3 className="font-semibold text-gray-800">Balance Transfer Loans</h3>
                        <p className="text-gray-700">Loans to transfer your existing home loan balance to another lender for better terms or lower interest rates.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Make your dream home a reality with flexible and affordable home loan options. With low-interest rates, easy online applications, and quick approvals, it’s never been easier to get started. Apply today!
                </p>
                <Link href="/contactus" className="text-white">
                    <Button className="bg-[var(--primary)] text-white rounded-2xl pl-8 pr-8 text-xl">Get Started with Your Home Loan Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default HomeLoans;
