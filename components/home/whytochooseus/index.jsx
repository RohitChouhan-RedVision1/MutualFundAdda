import React from "react";
import styles from "./whytochoose.module.css";
import Link from "next/link";
import { Button } from "../../ui/button";
import { BsFillPersonCheckFill } from "react-icons/bs";

const WhytoChooseus = ({sitedata}) => {
  return (
    <div>
      <article className={`${styles.investor_corner} main_section`}>
        <div className="mx-auto container px-4 sm:px-10 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <span className={styles.investor_box}>
                    <div className={styles.icon}>
                      <img
                        src="/mf-adda/onestop.png"
                        className="icon1"
                        alt="One stop"
                      />
                    </div>
                    <h5>One Stop Financial Solutions</h5>
                    <p className="text-justify text-gray-600">
                      We offer a simple platform to explore different investment
                      options, helping you find what might be suitable for your
                      financial goals. Get clear information to understand your
                      choices better.
                    </p>
                  </span>
                  <span className={styles.investor_box}>
                    <div className={styles.icon}>
                      <img
                        src="/mf-adda/end.png"
                        className="icon1"
                        alt="End to End"
                      />
                    </div>
                    <h5>End-to-end Support</h5>
                    <p className="text-justify text-gray-600">
                      We are here to assist you with your investments. If you
                      have questions or need help understanding the process,
                      we're ready to provide the support you need.
                    </p>
                  </span>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center ">
                  <span
                    className={`${styles.investor_box} ${styles.investor_box_mt}`}
                  >
                    <div className={styles.icon}>
                      <img
                        src="/mf-adda/24h.png"
                        className="icon1"
                        alt="24x7 Access"
                      />
                    </div>
                    <h5>24x7 Access on Web &amp; App</h5>
                    <p className="text-justify text-gray-600">
                      Our web-based platform and mobile app allow you to check
                      your investment portfolio whenever it's convenient for
                      you. Stay informed about your investments day or night.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="pb-10">
                {/* <h5 className="uppercase text-[16px] text-[var(--primary)] font-semibold">Investor Corner</h5> */}
                <div className="">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase">
                    Why Choose Us?
                  </h2>
                </div>
                <p className="text-[16px] md:text-[18px] text-justify text-gray-600 mt-4 mb-5">
                  Welcome to {sitedata.websiteName}, your trusted financial
                  companion in India. We understand that your financial journey
                  is more than just numbers; it's a story of dreams,
                  aspirations, and the legacy you want to leave behind. At {sitedata.websiteName}, we are driven by the belief that everyone
                  deserves a secure and prosperous future:-
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex text-[16px] md:text-[18px] items-center gap-2 text-gray-600 ">
                    <BsFillPersonCheckFill className="text-[var(--primary)] text-5xl md:text-4xl" />
                    <span className="text-[16px] md:text-[18px] items-center text-gray-600">
                    <strong className="text-black">AMFI-Registered & Trusted:</strong> Backed by
                    expertise and ethical practices.
                    </span>
                  </li>
                  <li className="flex text-[16px] md:text-[18px] items-center gap-2 text-gray-600 ">
                    <BsFillPersonCheckFill className="text-[var(--primary)] text-5xl md:text-4xl" />
                    <span className="text-[16px] md:text-[18px] items-center text-gray-600">
                    <strong className="text-black">One-Stop Solution:</strong> Investment, loan, and
                    insurance products under one roof.
                    </span>
                  </li>
                  <li className="flex text-[16px] md:text-[18px] items-center gap-2 text-gray-600 ">
                    <BsFillPersonCheckFill className="text-[var(--primary)] text-5xl md:text-4xl" />
                    <span className="text-[16px] md:text-[18px] items-center text-gray-600">
                    <strong className="text-black">Technology-Driven:</strong> Smart, simple, and
                    transparent financial tracking.
                    </span>
                  </li>
                  <li className="flex text-[16px] md:text-[18px] items-center gap-2 text-gray-600 ">
                    <BsFillPersonCheckFill className="text-[var(--primary)] text-5xl md:text-4xl" />
                    <span className="text-[16px] md:text-[18px] items-center text-gray-600">
                    <strong className="text-black">Personalized Solutions:</strong> Tailored to your
                    financial goals and risk appetite.
                    </span>
                  </li>
                  <li className="flex text-[16px] md:text-[18px] items-center gap-2 text-gray-600 ">
                    <BsFillPersonCheckFill className="text-[var(--primary)] text-5xl md:text-4xl" />
                    <span className="text-[16px] md:text-[18px] items-center text-gray-600">
                    <strong className="text-black">Continuous Monitoring:</strong> Regular updates and
                    tracking for optimal growth.
                    </span>
                  </li>
                 
                </ul>
                <p>
                  <Link href="/contactus" target="_blank">
                    <Button className="mt-8 bg-[var(--primary)] hover:bg-[var(--primary)] text-white px-6 py-3 text-lg font-semibold rounded-md shadow">
                      View Services
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WhytoChooseus;
