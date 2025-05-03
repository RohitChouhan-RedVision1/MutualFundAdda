import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./toolssection.module.css";

const tools = [
  {
    href: "/tools/calculators",
    img: "/mf-adda/calculator.webp",
    label: "Financial Calculator",


  },
  {
    href: "/tools/downloadforms",
    img: "/mf-adda/download form.png",
    label: "Download Forms",

  },
  {
    href: "/tools/financialhealth",
    img: "/mf-adda/health checkup.png",
    label: "Financial Health",

  },
  {
    href: "/tools/riskprofile",
    img: "/mf-adda/risk (1).png",
    label: "Risk Profile",
  },
  {
    href: "/tools/paypremiumonline",
    img: "/mf-adda/pay-premium-online.png",
    label: "Pay Premium Online",
  },
  {
    href: "/tools/usefullinks",
    img: "/mf-adda/useful links.png",
    label: "Useful Links",
  },
];

const ToolsSection = () => {
  return (
    <div className="">
        <div className="container mx-auto main_section">
        <div className={`px-8 ${styles.choose}`}>
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">Financial Tools</h2>
      </div>
      <div className={`grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 py-4 gap-4 ${styles.choose}`}>
  {tools.map(({ href, img, label, target }, idx) => (
    <div
      key={idx}
      className={`bg-white text-center rounded-xl  shadow-md hover:shadow-xl py-5 transition-transform duration-500 transform hover:-translate-y-1 cursor-pointer ${styles.toolCard}`}
    >
      <Link
        href={href}
        target={target || "_self"}
        className="block no-underline"
      >
        <div>
          <Image
            src={img}
            alt={label}
            width={80}
            height={80}
            className={`mx-auto mb-2 ${styles.flaticonhome}`}
          />
          <h2 className="text-xl font-bold pt-2 pb-2">{label}</h2>
        </div>
      </Link>
    </div>
  ))}
</div>

    </div>
        </div>
    </div>
  );
};

export default ToolsSection;
