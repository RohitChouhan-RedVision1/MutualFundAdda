import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Life Insurance",
  description: "Secure your family's future with tailored life insurance plans offering protection, savings, and peace of mind.",
};

const LifeInsurance = () => {
  return (
    <div className='main_section'>
    <div className="container mx-auto px-4 md:px-20">
      {/* Heading and Subheading */}
      <div className=" pb-[20px]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">Life Insurance</h1>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">Secure Your Loved Ones, Even When You're Not Around</p>
      </div>

      {/* Introduction with Image */}
      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Life insurance is a crucial financial tool that ensures your family's financial security in your absence. It not only offers peace of mind but also acts as a savings and investment avenue. Whether you're looking to protect your dependents, build long-term wealth, or plan for retirement, we offer a variety of life insurance products tailored to your specific needs.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/lfin.png"
            alt="Life Insurance"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits of Life Insurance */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Life Insurance is Essential</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><p className="text-gray-700"><strong>Financial Security:</strong> Provides a financial safety net for your family in your absence.</p></li>
          <li><p className="text-gray-700"><strong>Tax Benefits:</strong> Enjoy tax deductions on premiums paid under Section 80C and tax-free maturity under Section 10(10D).</p></li>
          <li><p className="text-gray-700"><strong>Wealth Creation:</strong> Certain policies offer returns that help in long-term financial planning.</p></li>
          <li><p className="text-gray-700"><strong>Loan Facility:</strong> Policyholders can avail loans against their life insurance policy in times of need.</p></li>
          <li><p className="text-gray-700"><strong>Peace of Mind:</strong> Ensures your dependents are taken care of in case of any eventuality.</p></li>
        </ul>
      </div>

      {/* Types of Life Insurance */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Life Insurance Plans</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h3 className="font-semibold text-gray-800">Term Insurance</h3>
            <p className="text-gray-700">Pure protection plans offering high coverage at low premiums for a specific term.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Whole Life Insurance</h3>
            <p className="text-gray-700">Provides coverage for your entire lifetime with the added benefit of a savings component.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Endowment Plans</h3>
            <p className="text-gray-700">Combine insurance with savings to offer a lump sum payout after a specified term or on death.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">ULIPs (Unit Linked Insurance Plans)</h3>
            <p className="text-gray-700">Offer both life cover and investment returns by allocating a portion of the premium to market-linked funds.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Money-Back Policies</h3>
            <p className="text-gray-700">Provide periodic payouts during the policy term along with maturity benefits and life cover.</p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className=" mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Safeguard your family's future and build wealth with a suitable life insurance plan. Let us help you choose the right policy for your needs and goals.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Protect Your Future Now!
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LifeInsurance;
