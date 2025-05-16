import Image from "next/image";
import React from "react";

const LifeInsuranceContent = () => {
  return (
    <div className="main_section">
    <div className="mb-10 container mx-auto px-4 md:px-32 ">
      <h2 className="text-2xl font-bold mb-4">Life Insurance</h2>

      {/* Introduction */}
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

      {/* Benefits */}
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Life Insurance is Essential</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li><strong>Financial Security:</strong> Provides a safety net for your family.</li>
          <li><strong>Tax Benefits:</strong> Save taxes under 80C and 10(10D).</li>
          <li><strong>Wealth Creation:</strong> Policies can help grow wealth over time.</li>
          <li><strong>Loan Facility:</strong> Get loans against policy if needed.</li>
          <li><strong>Peace of Mind:</strong> Your dependents are protected.</li>
        </ul>
      </div>

      {/* Types */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Life Insurance Plans</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li><strong>Term Insurance:</strong> High cover at low premium.</li>
          <li><strong>Whole Life Insurance:</strong> Lifetime cover with savings.</li>
          <li><strong>Endowment Plans:</strong> Life cover with maturity benefits.</li>
          <li><strong>ULIPs:</strong> Life cover + market-linked investments.</li>
          <li><strong>Money-Back Policies:</strong> Regular payouts + maturity + cover.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default LifeInsuranceContent;
