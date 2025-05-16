import GeneralInsuranceContent from '@/components/services/generalinsaurance';
import HealthInsuranceContent from '@/components/services/healthinsaurance';
import LifeInsuranceContent from '@/components/services/lifeinsurance';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Insurance (Life and Health)",
    description: "Explore life and health insurance plans to secure your future and protect your loved ones.",
};

const Insurance = () => {
    return (
        <div className='main_section'>
        
            {/* Heading and Subheading */}
            <div className="container mx-auto px-4 md:px-32">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
        Insurance
        </h1>
        {/* <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-600 mt-2">
          Secure Your Health with Affordable and Comprehensive Coverage
        </p> */}
      </div>

<div className='' id='#lifeinsurance'>
    <LifeInsuranceContent/>
</div>
<div className='' id='#healthinsurance'>
    <HealthInsuranceContent/>
</div>
<div className='' id='#generalinsurance'>
    <GeneralInsuranceContent/>
</div>

            {/* Conclusion and CTA */}
            <div className="container mx-auto px-4 md:px-32">
        <p className="text-lg text-gray-700 mb-4">
          
          Choose the best plan for you and your family today.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Get Your  Insurance Now!
          </Button>
        </Link>
      </div>
        </div>
    );
};

export default Insurance;
