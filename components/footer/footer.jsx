"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa6";
import { FaMapMarker } from "react-icons/fa";

export function Footer({sitedata,servicedata,arn}) {
//  console.log(sitedata,arn.euins[0].registrationDate)
 const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

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
    { href: "/tools/financialhealth", text: "Financial health" },
    { href: "/tools/paypremiumonline", text: "Pay Premium online" },
    { href: "/tools/riskprofile", text: "Risk Profile" },
    { href: "/tools/usefullinks", text: "Usefull Links" },
  
  ];
  return (
    <footer className="bg-[#000000] pt-[60px] ">
      <section className=" container mx-auto px-4  lg:px-10  ">
        <div className=" py-6 px-4 md:px-0 lg:-px-4 border-b-1 border-[#ffffff6b]">
          <div className="flex flex-col md:flex-row gap-20">
            {/* About Us */}
            <div className="w-full md:w-[50%] lg:w-[30%]">
              <h4 className="relative text-xl text-white font-semibold mb-4">
                About Us
              </h4>
              <p className="text-gray-400  hover:text-[var(--secondary)]">
              At {sitedata?.websiteName}, we understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to create. We are here to be your trusted financial companion, guiding you through every step.
              </p>
              <hr className="my-4 border-gray-400" />
              <div className="flex space-x-4">
              <ul className="space-y-3 text-md text-gray-400">
                <li>
                 <Link href={`tel:${sitedata.mobile}`} className="flex gap-4 text-center items-center hover:text-white">
                 <FaPhone className="text-[16px]"/> 
                 <span className="text-[16px]" >{sitedata.mobile}</span></Link>
                </li>
                <li>
                <Link href={`mailto:${sitedata.email}`} className="flex gap-4 text-center items-center hover:text-white">
                <FaEnvelope className="text-[16px]"/>
                  <span className="text-[16px]">{sitedata.email}</span></Link>
                </li>
                <li>
                 <p  className="flex gap-4 hover:text-white">
                 <FaMapMarker className="text-2xl"/>
                 <span className="text-[16px]">
                 <a href={`${sitedata.mapurl}`} target="_blank" rel="noopener noreferrer">
    {sitedata.address}
  </a>
                 </span>
                 </p>
                  
                </li>
              </ul>
                {/* <Link href="#">
                  <FaFacebook className="text-gray-400 text-2xl hover:text-blue-400" />
                </Link>
                <Link href="#">
                  <FaTwitter className="text-gray-400 text-2xl hover:text-blue-400" />
                </Link>
                <Link href={"#"} legacyBehavior>
  <a target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-gray-400 text-2xl hover:text-blue-400" />
  </a>
</Link>
                <Link href="#">
                  <FaPinterest className="text-gray-400 text-2xl hover:text-blue-400"/>
                </Link> */}
              </div>
            </div>
          <div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-20">
            <div>
            <h4 className="relative text-xl text-white font-semibold mb-4 ">
                Quick Links
              </h4>
              <ul className="space-y-3 text-md text-gray-400">
                <li>
                 <Link href={`/aboutus`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >About us</span></Link>
                </li>
                <li>
                 <Link href={`/blogs`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >Blogs</span></Link>
                </li>

                <li>
                 <Link href={`/faqs`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >Faq's</span></Link>
                </li>
                <li>
                 <Link href={`/contactus`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >Contact us</span></Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
            <h4 className="relative text-xl text-white font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-[16px] text-gray-400 ">
                {servicedata.map((item,index) => (
                  <li key={index}>
                    <Link href={`/services/${item.link}`} className="hover:text-[var(--secondary)]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
            <h4 className="relative text-xl text-white font-semibold mb-4 ">
                Tools
              </h4>
              <ul className="space-y-2 text-[16px] text-gray-400">
                {tools.map((item,index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:hover:text-[var(--secondary)]">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <h4 className="relative text-xl text-white font-semibold mb-4 ">
                Quick Links
              </h4>
              <ul className="space-y-3 text-md text-gray-400">
                <li>
                 <Link href={`/aboutus`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >About us</span></Link>
                </li>
                <li>
                 <Link href={`/blogs`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >Blogs</span></Link>
                </li>

                <li>
                 <Link href={`/faqs`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >Faq's</span></Link>
                </li>
                <li>
                 <Link href={`/contactus`} className="flex gap-4 text-center items-center hover:text-white"> 
                 <span className="text-[16px]" >Contact us</span></Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            {/* <div>
            <h4 className="relative text-[16px] text-white font-semibold mb-4 pl-4 border-l-4 border-[var(--primary)]">
                Get In Touch
              </h4>
              
            </div> */}
          </div>
          </div>
          </div>
        </div>
      </section>
      
      <div className="">
        <div className="container mx-auto px-4 lg:px-12 pl-2 flex flex-col lg:flex-row items-center justify-between">
        <div className="disclaimer-sec text-center text-gray-400 mt-4 text-[16px]">
              <div className="content-b ">
                <p >
                  AMFI Registered Mutual Fund Distributor <br /> ARN : <b className="text-white">{arn?.arn}</b>{" "} 
                   Date of Registration: <b className="text-white">{registrationDate}</b> | Current Validity:{" "}
                  <b className="text-white">{}</b> TO <b className="text-white">{expiryDate}</b>
                </p>
                
                <p className="text-gray-400">
                  <b>{sitedata.title}</b> is an AMFI
                  Registered Mutual Fund Distributor.
                </p>
                <p className="text-gray-400">
                  Disclaimer: Mutual fund investments are subject to market
                  risks. Please read the scheme information and other related
                  documents carefully before investing. Past performance is not
                  indicative of future returns. Please consider your specific
                  investment requirements before choosing a fund, or designing a
                  portfolio that suits your needs.
                </p>
                <p className="text-gray-400">
                  <b>{sitedata.title}</b> makes no warranties or representations,
                  express or implied, on products offered through the platform
                  of <b>{sitedata.title}</b>. It accepts no liability for any
                  damages or losses, however, caused, in connection with the use
                  of, or on the reliance of its product or related services.
                  Terms and conditions of the website are applicable.
                  Investments in Securities markets are subject to market risks,
                  read all the related documents carefully before investing.
                </p>
                <div className="footer-content pb-4 flex gap-10 items-center justify-center my-10">
                  <div className="footer-list flex flex-col md:flex-row gap-2 ">
                    <div className="image">
                      <img src="/amfi.jpg" alt="amfi" height={100} width={100} />
                    </div>
                    <div className="contentb text-gray-400">
                      <p className="text-white">AMFI Registered</p>
                      <p className="text-white">ARN - {arn?.arn}</p>
                      <p className="text-white">EUIN - {arn?.euins[0]?.euin} </p>{" "}
                    </div>
                  </div>
                  <div className="footer-list">
                    <div className="image">
                      <img src="/mutualfund.webp" alt="mutualfund"  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" bg-[var(--primary)]">
      <div className="container mx-auto px-4 lg:px-10  flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
  
  {/* Left: Logo */}
  <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo"
        width={150}
        height={100}
      />
    </Link>
  </div>

  {/* Center: Policy Links */}
  <div className="w-full lg:w-1/3 text-center">
    <p>
      <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> |{" "}
      <Link href="/commission-disclosures" className="hover:underline">Commission Disclosures</Link> |{" "}
      <Link href="/AMFI_Code-of-Conduct1.pdf" target="_blank" download className="hover:underline">
        Code of Conducts
      </Link>
    </p>
  </div>

  {/* Right: Copyright */}
  <div className="w-full lg:w-1/3 flex justify-center lg:justify-end text-center lg:text-right">
    <p>© 2025 {sitedata.websiteName} All right reserved</p>
  </div>

</div>

      </div>
    </footer>
  );
}
