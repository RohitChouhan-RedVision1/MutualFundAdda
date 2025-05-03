"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import styles from "./herosection.module.css";
import Image from "next/image";

const MotionButton = motion(Button);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const HeroSection = () => {
  return (
    <section>
      <div className={`relative ${styles.main_banner}`}>
        <div className="container mx-auto px-4 md:px-10">
          <motion.div
            className="grid lg:grid-cols-2 md:py-5 lg:py-0 gap-10 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Content */}
            <div>
              <motion.h1
                variants={fadeInDown}
                className={` text-2xl md:text-3xl lg:text-5xl mb-4 mt-4 font-bold  ${styles.main_heading}`}
              >
                Are you{" "}
                <span className="text-[var(--primary)] font-bold leading-tight">
                  financially fit
                </span>{" "}
                and free from financial worry about the what-ifs of day-to-day life?
              </motion.h1>

              <motion.span
                variants={fadeInDown}
                className="text-gray-600  text-md lg:text-xl  font-semibold leading-[30px] mt-4"
              >
                Find out in just 5 minutes about your financial fitness by answering a financial check-up question.
              </motion.span>

              <motion.div variants={fadeInDown}>
                <Link href="/contactus" target="_blank">
                  <Button
                    className="mt-8 bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-6 py-3 text-lg font-semibold rounded-md shadow"
                  >
                    Start your Health Checkup
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="flex justify-center"
              variants={fadeInRight}
            >
              <Image
                src="/mf-adda/HOME-BANNER_1.png"
                alt="Hero Banner"
                width={600}
                height={600}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
