import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getSiteData } from "@/lib/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";

export const metadata = {
  title: "About Us - Mutual Fund Adda",
  description:
    "Learn more about MutualFund Adda, your trusted financial partner in India.",
};

const AboutUsPage = async () => {
  const sitedata = await getSiteData();

  return (
    <div>
      <div>
        <div className="">
          <div className="container mx-auto px-4 md:px-20 pt-12 pb-2 ">
            <div className="  mb-8">
              <h1 className="text-2xl md:text-3xl font-bold uppercase">About Us</h1>
              <p className="text-xl text-black mt-2">
                Your Trusted Financial Partner
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-20 py-10">
          {/* Heading and Subheading */}

          {/* {sitedata.websiteName} - Company Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are – {sitedata?.websiteName}
            </h2>
            <p className="text-[16px] text-gray-700 mb-4">
              We are an <strong>AMFI-Registered Mutual Fund Distributor</strong>
              , offering a wide range of financial products with extensive
              industry experience. We’ve helped numerous investors make informed
              financial decisions, achieving their goals with clarity and
              confidence.
            </p>
            <p className="text-[16px] text-gray-700 mb-4">
              At <strong>{sitedata?.websiteName}</strong>, we provide a one-stop
              financial platform for Mutual Funds, Direct Equity, Fixed
              Deposits, Insurance, Home Loans, Loans Against Shares & Mutual
              Funds, Corporate FDs, Portfolio Management Services (PMS), and
              Alternative Investment Funds (AIF).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Smart Investment & Financial Solutions at Your Fingertips
            </h3>
            <p className="text-[16px] text-gray-700 mb-4">
              Our technology-driven platform enables you to manage and track
              your entire portfolio in one place—Mutual Funds, Stocks, Fixed
              Deposits, PMS, AIF, Insurance, and Loans—anytime, anywhere.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Why Choose {sitedata?.websiteName}?
            </h3>
            <ul className="pl-6 space-y-3 text-[16px] text-gray-700">
              <li className="flex gap-2 ">
              <BsFillPersonCheckFill className="text-[var(--primary)] text-2xl"/>
                <strong>AMFI-Registered & Trusted:</strong> Backed by
                expertise and ethical practices.
              </li>
              <li className="flex gap-2 ">
              <BsFillPersonCheckFill className="text-[var(--primary)] text-2xl"/>
                <strong>One-Stop Solution:</strong> Investment, loan, and
                insurance products under one roof.
              </li>
              <li className="flex gap-2 ">
              <BsFillPersonCheckFill className="text-[var(--primary)] text-2xl"/>
                <strong>Technology-Driven:</strong> Smart, simple, and
                transparent financial tracking.
              </li>
              <li className="flex gap-2 ">
              <BsFillPersonCheckFill className="text-[var(--primary)] text-2xl"/>
                <strong>Personalized Solutions:</strong> Tailored to your
                financial goals and risk appetite.
              </li>
              <li className="flex gap-2 ">
              <BsFillPersonCheckFill className="text-[var(--primary)] text-2xl"/>
                <strong>Continuous Monitoring:</strong> Regular updates and
                tracking for optimal growth.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Clients Are Our Family
            </h3>
            <p className="text-[16px] text-gray-700 mb-4">
              We treat our clients like family. Your financial well-being is our
              top priority. That’s why every solution we offer is designed to
              simplify your journey and secure your future.
            </p>

            <p className="text-[16px] text-gray-700">
              <strong>
                Your One-Stop Destination for Financial & Investment Solutions
              </strong>
              <br />
              From investments to loans and insurance—why visit multiple
              providers when everything is just a click away? Reach out to us
              and take the next step toward financial freedom.
            </p>
          </div>

          {/* Introduction */}
          {/* <div className="mb-8">
              <p className="text-xl text-gray-700">
              We, the experts at Alpha72 Wealth, believe that money alone doesn’t create happiness—it’s the Alpha that completes the equation. 

For some, Alpha is the peace of mind that comes from safe investments and financial security. For others, it’s the thrill of taking risks and watching their wealth multiply. It could be the consistency of saving and growing funds for a dream home, a child’s education, a grand wedding, or even a timeless piece of jewellery. 

We understand that financial goals are deeply personal. That’s why we don’t just offer investment solutions—we curate personalized wealth strategies that align with what truly matters to you. Whether you seek stability, growth, or a balance of both, we take the responsibility of generating that Alpha for you, ensuring your life’s equation is complete. 

At Alpha72, we help you find your Alpha. Let’s build wealth that serves your dreams, your aspirations, and—most importantly—you. 
              </p>
            </div>
   */}
          {/* Our Mission and Values */}

          <div className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-[16px] text-gray-700 mb-4 text-justify">
                At {sitedata?.websiteName}, our mission is to guide you through
                the complex world of finance with ease. Whether you're looking
                to invest, save, or borrow, we offer personalized financial
                solutions that align with your goals. Our mission is to empower
                you to make informed financial decisions that create long-term
                wealth and security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-[16px] text-gray-700 mb-4 text-justify">
                At {sitedata?.websiteName}, Our vision is to become the leading
                force in shaping a financially secure and prosperous India. We
                aim to set new standards in the financial industry and be the
                go-to partner for those seeking financial stability, growth, and
                success, contributing to a brighter future for our clients and
                the nation as a whole.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8 flex justify-center mt-6 md:mt-0">
              <Image
                src="/ABOUT-US 19.jpg"
                alt="Bonds Investment"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="list-disc pl-5 space-y-4 flex-col items-start">
              <li>
                <p className="text-[16px] text-gray-700">
                  <strong>Integrity:</strong> We uphold the highest standards of
                  honesty and transparency in all our dealings.
                </p>
              </li>
              <li>
                <p className="text-[16px] text-gray-700">
                  <strong>Customer-Centric:</strong> We put our clients at the
                  heart of everything we do, offering solutions that truly meet
                  their needs.
                </p>
              </li>
              <li>
                <p className="text-[16px] text-gray-700">
                  <strong>Innovation:</strong> We embrace new technologies and
                  ideas to improve our services and create more value for our
                  clients.
                </p>
              </li>
              <li>
                <p className="text-[16px] text-gray-700">
                  <strong>Commitment:</strong> We are committed to helping our
                  clients achieve their financial goals and secure their future.
                </p>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          {/* <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-700">
                In a rapidly changing world, we remain steadfast in our dedication
                to helping you secure your financial future. Your dreams are our
                top priority, and your trust is the cornerstone of our service.
                Our personalized approach ensures that every financial solution is
                tailored to meet your unique needs, helping you move towards
                financial freedom with confidence.
              </p>
            </div> */}

          {/* <div className="mb-8 flex flex-col  items-center md:items-start  p-6 rounded-lg ">
                    <div className="flex justify-center  mx-auto md:pl-8">
                        <Image src="/Alpha72.png" alt="Dr. Vishal Saxena" width={300} height={300} className="" />
                    </div>
                    <div className=" md:pl-8 mt-6 md:mt-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Dr. Vishal Saxena</h2>
                        <h3 className="text-xl text-gray-600 text-center">Co-Founder, Alpha72 Wealth</h3>
                        <p className="text-lg text-gray-700 mt-2 text-justify">
                        Dr. Vishal Saxena is a distinguished academic and finance professional with an exceptional track record in the fields of commerce, financial markets, and education. With a Ph.D. in Commerce, MBA in Finance, M.Phil, M.Com, and UGC-NET qualification, he stands as a pillar of intellectual rigor and strategic thinking at Alpha72 Wealth. <br /> <br />
                        Over the years, Dr. Saxena has cultivated a deep understanding of market behavior, macroeconomic trends, and financial instruments. His ability to interpret complex data and market shifts has been instrumental in shaping structured investment approaches that focus on discipline, consistency, and sustainable wealth growth. <br /> <br />
                        Respected by peers and trusted by clients, Dr. Saxena brings a unique perspective that blends academic excellence with real-world insights. His leadership at Alpha72 Wealth is driven by an unwavering focus on transparency, research-backed decisions, and a commitment to delivering long-term value for clients. <br /> <br />
                        With a calm and analytical approach, Dr. Saxena continues to be a guiding force behind Alpha72’s philosophy—where knowledge meets clarity, and expertise meets execution.
                        </p>
                    </div>
                </div> */}
          {/* Conclusion and CTA */}
          <div className="text-center mt-8">
            <p className="text-[16px] text-gray-700 mb-4">
              We invite you to join us on this journey towards your financial
              success. Our team is always here to assist you with expert advice,
              innovative solutions, and unmatched dedication.
            </p>
            <Link href="/contactus" className="text-white mt-4 cursor-pointer">
              <Button className="font-bold transform transition-transform duration-300 hover:scale-105 bg-[var(--primary)] px-4 py-2 rounded-lg text-2xl cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
