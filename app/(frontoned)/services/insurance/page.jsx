"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import GeneralInsuranceContent from "@/components/services/generalinsaurance";
import HealthInsuranceContent from "@/components/services/healthinsaurance";
import LifeInsuranceContent from "@/components/services/lifeinsurance";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Insurance = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <div className="main_section">
      {/* Heading and Subheading */}
      <div className="container mx-auto px-2">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">Insurance</h1>
      </div>

      <div id="lifeinsurance">
        <LifeInsuranceContent />
      </div>
      <div id="healthinsurance">
        <HealthInsuranceContent />
      </div>
      <div id="generalinsurance">
        <GeneralInsuranceContent />
      </div>

      {/* Conclusion and CTA */}
      <div className="container mx-auto px-4 md:px-32">
        <p className="text-lg text-gray-700 mb-4">
          Choose the best plan for you and your family today.
        </p>
        <Link href="/contactus" className="text-white">
          <Button className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-2 md:px-6 py-3 text-md md:text-lg font-semibold rounded-md shadow">
            Get Your Insurance Now!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Insurance;
