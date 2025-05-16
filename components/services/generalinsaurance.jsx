import Image from "next/image";
import React from "react";

const GeneralInsuranceContent = () => {
  return (
    <div className="main_section">
    <div className="container mx-auto px-4 md:px-32 ">
      <h2 className="text-2xl font-bold mb-4">General Insurance</h2>

      <div className="mb-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-700 mt-10 text-justify">
            General insurance protects your assets, health, and travel. It includes all types of insurance except life. Whether you're insuring your car, home, business, or trip — we offer tailored policies for all general insurance needs.
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

<div className="grid grid-cols-1 md:grid-cols-2 mt-5">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of General Insurance</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li><strong>Asset Protection:</strong> Secure valuable property from theft, damage, or loss.</li>
          <li><strong>Risk Coverage:</strong> Covers unforeseen risks like accidents, fire, theft.</li>
          <li><strong>Business Continuity:</strong> Minimize disruptions due to losses.</li>
          <li><strong>Travel Safety:</strong> Covers baggage loss, delays, and medical emergencies abroad.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of General Insurance</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li><strong>Motor Insurance:</strong> For cars, bikes, commercial vehicles.</li>
          <li><strong>Home Insurance:</strong> Protection against fire, burglary, natural calamities.</li>
          <li><strong>Travel Insurance:</strong> Medical, baggage, and trip coverage abroad.</li>
          <li><strong>Commercial Insurance:</strong> Tailored for businesses, SMEs, shops.</li>
          <li><strong>Personal Accident Insurance:</strong> Covers accidental injuries or death.</li>
        </ul>
      </div>
          </div>

    </div>
    </div>
  );
};

export default GeneralInsuranceContent;
