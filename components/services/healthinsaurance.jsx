import Image from "next/image";
import React from "react";

const HealthInsuranceContent = () => {
  return (
    <div className="bg-[#EFF1F9] main_section">
    <div className="container mx-auto px-4 md:px-32  ">
      <h2 className="text-2xl font-bold mb-4">Health Insurance</h2>

      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Health insurance protects you and your family from high medical costs. With rising healthcare expenses, it ensures you receive timely medical care without financial strain. Our plans are customizable to meet your health needs and budget.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/insurance21.jpg"
            alt="Health Insurance"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of Health Insurance</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li><strong>Cashless Hospitalization:</strong> No upfront payments at network hospitals.</li>
          <li><strong>Pre & Post-Hospitalization:</strong> Covers expenses before and after hospital stay.</li>
          <li><strong>Annual Checkups:</strong> Free preventive health checkups included.</li>
          <li><strong>Tax Savings:</strong> Under Section 80D of the Income Tax Act.</li>
          <li><strong>Critical Illness Cover:</strong> Optional add-ons for major illnesses.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Health Insurance Plans</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li><strong>Individual Plans:</strong> Covers only one person.</li>
          <li><strong>Family Floater:</strong> Shared sum insured among family members.</li>
          <li><strong>Critical Illness:</strong> Covers serious diseases like cancer, heart attack.</li>
          <li><strong>Senior Citizen Plans:</strong> Special coverage for people aged 60+.</li>
          <li><strong>Top-Up Plans:</strong> Extra coverage on top of existing policies.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default HealthInsuranceContent;
