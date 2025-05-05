import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Loan Against Property (LAP)",
    description: "Unlock the potential of your property with a Loan Against Property (LAP) for personal or business use with attractive interest rates and flexible repayment options.",
};

const LoanAgainstProperty = () => {
    return (
        <div className='main_section'>
        <div className="container mx-auto px-4 md:px-20 ">
            {/* Heading and Subheading */}
            <div className=" pb-[20px]">
                <h1 className="text-2xl md:text-3xl font-bold uppercase">Loan Against Property (LAP)</h1>
                {/* <div className="em_bar mx-auto">
                    <div className="em_bar_bg" />
                </div>
                <p className="text-xl text-gray-600 mt-2">Unlock the Potential of Your Property</p> */}
            </div>

            {/* Introduction with Image */}
            <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 mt-10 text-justify">
                        Loan Against Property (LAP) is a secured loan where you can leverage your property (residential, commercial, or industrial) as collateral to access funds for various personal or business needs. Whether you're looking for financial assistance for a home renovation, education, or expanding your business, LAP offers competitive interest rates and flexible repayment terms.
                    </p>
                </div>
                <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
                    <Image
                        src="/Services/loan-against-property.webp"
                        alt="Loan Against Property"
                        width={500}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits of LAP */}
            <div className="mb-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Loan Against Property</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700"><strong>Quick Access to Funds:</strong> LAP offers fast access to funds, as it’s a secured loan with property as collateral.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Competitive Interest Rates:</strong> Enjoy low interest rates compared to unsecured loans.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Longer Tenure:</strong> LAP comes with longer repayment terms, making it easier to manage monthly payments.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Flexible Usage:</strong> The funds from LAP can be used for a variety of purposes such as home renovations, business expansion, or personal expenses.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>No Prepayment Penalty:</strong> Some LAP options allow early repayments without incurring extra fees.</p>
                    </li>
                </ul>
            </div>

            {/* LAP Eligibility & Requirements */}
            <div className="mb-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility & Requirements for LAP</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700"><strong>Eligibility:</strong> You must be a salaried or self-employed individual, or a business entity. The property you pledge should be in your name, and its market value should meet the lender's requirements.</p>
                    </li>
                    <li>
                        <p className="text-gray-700"><strong>Documentation:</strong> Basic documents such as proof of income, property papers, and ID proof are required.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className=" mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Unlock the potential of your property with a Loan Against Property. Get easy access to funds with flexible terms and competitive interest rates. Apply for your LAP today and achieve your financial goals!
                </p>
                <Link href="/contactus" className="text-white">
                    <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">Apply for Loan Against Property Now!</Button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default LoanAgainstProperty;
