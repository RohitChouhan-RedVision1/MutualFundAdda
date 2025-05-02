import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "General Insurance",
  description: "Safeguard your assets and health with comprehensive general insurance solutions covering everything from health to travel and vehicles.",
};

const GeneralInsurance = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-10">
      {/* Heading and Subheading */}
      <div className="text-center pb-[50px]">
        <h1 className="text-3xl font-bold text-gray-800">General Insurance</h1>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">Comprehensive Coverage for Life’s Uncertainties</p>
      </div>

      {/* Introduction with Image */}
      <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            General insurance provides financial protection for non-life assets such as your health, vehicle, travel, and home. It acts as a safety net against unexpected events like accidents, theft, natural disasters, or illnesses. We offer a wide range of general insurance policies from trusted providers to ensure you and your possessions are always covered.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/insurance-1.jpg"
            alt="General Insurance"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits of General Insurance */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why General Insurance Matters</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li><p className="text-gray-700"><strong>Financial Protection:</strong> Covers unexpected expenses arising from accidents, health issues, or property damage.</p></li>
          <li><p className="text-gray-700"><strong>Risk Mitigation:</strong> Helps you manage risk by transferring potential losses to an insurer.</p></li>
          <li><p className="text-gray-700"><strong>Legal Compliance:</strong> Certain general insurances, like motor insurance, are mandatory by law.</p></li>
          <li><p className="text-gray-700"><strong>Peace of Mind:</strong> Knowing you're covered lets you live life worry-free and focus on what matters.</p></li>
          <li><p className="text-gray-700"><strong>Customizable Plans:</strong> Choose policies tailored to your unique needs, lifestyle, and budget.</p></li>
        </ul>
      </div>

      {/* Types of General Insurance */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of General Insurance</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h3 className="font-semibold text-gray-800">Health Insurance</h3>
            <p className="text-gray-700">Covers hospitalization, medical treatment, and critical illnesses to reduce the financial burden of healthcare costs.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Motor Insurance</h3>
            <p className="text-gray-700">Protects against vehicle damage, theft, and third-party liabilities. Mandatory for all vehicle owners.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Travel Insurance</h3>
            <p className="text-gray-700">Covers trip cancellations, medical emergencies abroad, and lost baggage to ensure stress-free travel.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Home Insurance</h3>
            <p className="text-gray-700">Safeguards your home and possessions against risks like fire, theft, or natural disasters.</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800">Commercial Insurance</h3>
            <p className="text-gray-700">Provides protection for businesses against losses due to property damage, liability, or employee-related risks.</p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Don’t leave your future to chance. Protect your health, assets, and lifestyle with a general insurance plan tailored to your needs. Get started today!
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] text-white rounded-2xl pl-8 pr-8 text-xl">
            Get Insured Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GeneralInsurance;
