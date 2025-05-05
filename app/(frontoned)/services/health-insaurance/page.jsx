import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Health Insurance",
  description:
    "Secure your health and future with comprehensive health insurance plans offering wide coverage, cashless services, and affordable premiums.",
};

const HealthInsurance = () => {
  return (
    <div className="main_section">
    <div className="container mx-auto px-4 md:px-20">
      {/* Heading and Subheading */}
      <div className=" pb-[20px]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Health Insurance
        </h1>
        {/* <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">
          Secure Your Health with Affordable and Comprehensive Coverage
        </p> */}
      </div>

      {/* Introduction with Image */}
      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            Health Insurance is an essential financial tool that helps protect you
            and your family from unforeseen medical expenses. With rising healthcare
            costs, having a comprehensive health insurance plan provides peace of mind
            and ensures timely medical care without worrying about large bills. From
            hospitalization to outpatient care, health insurance plans offer a wide
            range of coverage, giving you the support you need when it matters the most.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/Services/insurance21.jpg"
            alt="Health Insurance"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits of Health Insurance */}
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Benefits of Health Insurance
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <p className="text-gray-700">
              <strong>Financial Protection:</strong> Health insurance protects you and your
              family from unexpected medical expenses, reducing the financial burden.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Cashless Treatment:</strong> Many health insurance plans provide
              cashless services, allowing you to receive treatment without upfront payments.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Wide Coverage:</strong> Coverage includes hospitalization, surgeries,
              diagnostics, daycare procedures, and sometimes even outpatient care.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Additional Benefits:</strong> Some plans offer wellness benefits,
              free health checkups, and discounts on gym memberships.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <strong>Tax Benefits:</strong> Premiums paid for health insurance are eligible
              for tax deductions under Section 80D of the Income Tax Act.
            </p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className="mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Protect your health and secure your future with affordable health insurance plans.
          Choose the best plan for you and your family today.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Get Your Health Insurance Now!
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HealthInsurance;
