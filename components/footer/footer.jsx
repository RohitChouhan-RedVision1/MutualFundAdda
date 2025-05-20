"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { FaMapMarker } from "react-icons/fa";
import { Button } from "../ui/button";

export function Footer({ sitedata, servicedata, arn, SocialMedia }) {
  // Filter out hidden links
  const visibleLinks = SocialMedia.filter((item) => !item.isHidden);

  const iconMap = {
    facebook: <FaFacebook className="text-[#1877F2] text-4xl" />,
    instagram: <FaInstagram className="text-[#e95950] text-4xl" />,
    linkedin: <FaLinkedin className="text-[#0077B5] text-4xl" />,
    twitter: <FaTwitter className="text-[#1DA1F2] text-4xl" />,
    youtube: <FaYoutube className="text-[#FF0000] text-4xl" />,
    whatsapp: <FaWhatsapp className="text-[#128C7E] text-4xl" />,
  };
  //  console.log(sitedata,arn.euins[0].registrationDate)
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date)) return ""; // Handle invalid date
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const registrationDate = formatDate(arn?.euins[0]?.registrationDate);
  const expiryDate = formatDate(arn?.euins[0]?.expiryDate);

  const tools = [
    { href: "/tools/calculators", text: "Calculators" },
    { href: "/tools/downloadforms", text: "Download Form" },
    { href: "/tools/financialhealth", text: "Financial Health" },
    { href: "/tools/paypremiumonline", text: "Pay Premium Online" },
    { href: "/tools/riskprofile", text: "Risk Profile" },
    { href: "/tools/usefullinks", text: "Useful Links" },
  ];
  return (
    <div className="relative">

    <footer className="bg-[#000000] pt-[60px] ">
        <div
    className="absolute top-0 z-0 left-0 w-full h-[1200] bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: "url('/bgshape.svg')" }}
  ></div>
      <div className="py-6">
        <div className="container mx-auto px-2 md:px-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-center text-white">
            Start Your Journey with <span className="font-bold">mutual</span>fundsadda Today
          </h2>
          <p className="text-center text-white">
            Leading the Way in Smart Solutions for Mutual Fund Distributors in
            India.
          </p>
          <Link href="/contactus" target="_blank">
            <Button className="mt-8 bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-6 py-3 text-lg font-semibold rounded-md shadow">
              Get A call from us{" "}
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative z-1 container mx-auto px-2 md:px-0  ">
        <div className=" py-6 px-4 md:px-0 lg:-px-4 border-b-1 border-[#ffffff6b]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Us */}

            {/* Quick Links */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-4 ">
                Quick Links
              </h4>
              <ul className="space-y-3 text-md text-gray-400 cursor-pointer">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commission-disclosures"
                    className="hover:text-white"
                  >
                    Commission Disclosures
                  </Link>
                </li>
                <li>
                  <Link
                    href="/AMFI_Code-of-Conduct1.pdf"
                    target="_blank"
                    download
                    className="hover:text-white"
                  >
                    Code of Conducts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-[16px] text-gray-400">
                {servicedata.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${item.link}`}
                      className="hover:text-[var(--secondary)]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools (if enabled) */}

            <div>
              <h4 className="text-xl text-white font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-[16px] text-gray-400">
                {tools.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-[var(--secondary)]"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl text-white font-semibold mb-4">
                About Us
              </h4>
              <p className="text-gray-400 hover:text-[var(--secondary)]">
                At <span className="font-bold">mutual</span>fundsadda, we
                understand that your financial journey is more than just
                numbers; it's a story of dreams, aspirations, and the legacy you
                want to create. We are here to be your trusted financial
                companion, guiding you through every step.
              </p>
              <hr className="my-4 border-gray-400" />
              <ul className="space-y-3 text-md text-gray-400">
                <li>
                  <Link
                    href={`tel:${sitedata.mobile}`}
                    className="flex gap-3 items-center hover:text-white"
                  >
                    <FaPhone className="text-[16px]" />
                    <span>{sitedata.mobile}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${sitedata.email}`}
                    className="flex gap-3 items-center hover:text-white"
                  >
                    <FaEnvelope className="text-[16px]" />
                    <span>{sitedata.email}</span>
                  </Link>
                </li>
                <li>
                  <a
                    href={sitedata.mapurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 items-start hover:text-white"
                  >
                    <FaMapMarker className="text-2xl" />
                    <span>{sitedata.address}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center justify-center mb-4  space-x-3  mt-2 md:mt-0">
                    {visibleLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        aria-label={`Visit our ${item.title} page`}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                      >
                        {iconMap[item.title.toLowerCase()] ?? null}
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto px-2 md:px-0  flex flex-col lg:flex-row items-center justify-between">
          <div className="disclaimer-sec text-center text-gray-400 mt-4 text-[16px]">
            <div className="content-b ">
              <p>
                AMFI Registered Mutual Fund Distributor <br /> ARN :{" "}
                <b className="text-white">{arn?.arn}</b> Date of Registration:{" "}
                <b className="text-white">{registrationDate}</b> | Current
                Validity: <b className="text-white">{}</b> TO{" "}
                <b className="text-white">{expiryDate}</b>
              </p>

              <p className="text-gray-400">
                <span className="font-bold">mutual</span>fundsadda is an AMFI
                Registered Mutual Fund Distributor.
              </p>
              <p className="text-gray-400">
                Disclaimer: Mutual fund investments are subject to market risks.
                Please read the scheme information and other related documents
                carefully before investing. Past performance is not indicative
                of future returns. Please consider your specific investment
                requirements before choosing a fund, or designing a portfolio
                that suits your needs.
              </p>
              <p className="text-gray-400">
                <span className="font-bold">mutual</span>fundsadda makes no
                warranties or representations, express or implied, on products
                offered through the platform of{" "}
                <span className="font-bold">mutual</span>fundsadda. It accepts
                no liability for any damages or losses, however, caused, in
                connection with the use of, or on the reliance of its product or
                related services. Terms and conditions of the website are
                applicable. Investments in Securities markets are subject to
                market risks, read all the related documents carefully before
                investing.
              </p>
              <div className="footer-content pb-4 flex flex-col md:flex-row gap-10 items-center justify-center my-10">
                <div className="footer-list flex flex-col md:flex-row gap-2 ">
                  <div className="image">
                    <img src="/amfi.jpg" alt="amfi" height={100} width={100} />
                  </div>
                  <div className="contentb text-gray-400">
                    <p className="text-white">AMFI Registered</p>
                    <p className="text-white">ARN - {arn?.arn}</p>
                    <p className="text-white">
                      EUIN - {arn?.euins[0]?.euin}{" "}
                    </p>{" "}
                  </div>
                </div>
                <div className="footer-list">
                  <div className="image">
                    <img src="/mutualfund.webp" alt="mutualfund" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" bg-[var(--primary)] pb-5 md:pb-0 absolute w-full">
        <div className="container mx-auto px-2 md:px-0  flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
          {/* Left: Logo */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={300} height={100} />
            </Link>
          </div>

          {/* Right: Copyright */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end text-center lg:text-right">
            <p>
              © 2025 <span className="font-bold">mutual</span>fundsadda All
              right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
