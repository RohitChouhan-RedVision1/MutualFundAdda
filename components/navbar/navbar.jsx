"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";

const Navbar = ({ servicedata }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // console.log(servicedata)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`top-0 left-0 w-full transition-all duration-300 z-100  ${
          isScrolled ? "sticky bg-[var(--primary)] shadow-lg " : "relative bg-[var(--primary)]"
        }`}
      >
        <div className=" container mx-auto px-2  lg:px-10 relative">
          <div className="flex items-center justify-between  relative bg-[var(--primary)] z-50 ">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="RF Wealth Logo"
                width={130}
                height={100}
              />
            </Link>

            {/* Navigation (Hidden on Mobile) */}
            <nav className="hidden text-[18px] md:flex space-x-6">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/about" className="text-white">
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <span className="text-white flex items-center cursor-pointer">
                  Services <span className="ml-1">&#x25BE;</span>
                </span>
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 bg-[var(--primary)] shadow-lg rounded-md text-white"
                    >
                      {servicedata.map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service.link}`}
                          className="block px-4 py-2 hover:bg-[var(--primary)]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/tools" className="text-white">
                Tools
              </Link>
              <Link href="/contactus" className="text-white">
                Contact
              </Link>
              <Link href="/blogs" className="text-white">
                Blogs
              </Link>
            </nav>

            {/* Portfolio Login Button (Hidden on Mobile) */}
            <div className="hidden md:block text-[18px]">
              <Link href="/login">
                <button className="bg-white text-[var(--primary)] px-5 py-2 rounded-md hover:bg-[var(--primary)] hover:text-[var(--secondary)] transition cursor-pointer hover:border-white">
                  Login
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-white text-[var(--primary)] focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </Button>
            </div>
          </div>
          <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-[var(--primary)]  z-0"
          >
            <div className="p-6">
              {/* Mobile Navigation */}
              <nav className="mt-4 space-y-4">
                <Link
                  href="/"
                  className="block text-white font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-white font-semibold "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Services Dropdown in Mobile Menu */}
                <div className="">
                  <h3
                    className=" text-white font-semibold cursor-pointer flex justify-between"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services
                    <span>{isServicesOpen ? "▲" : "▼"}</span>
                  </h3>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {servicedata.map((service, index) => (
                          <Link
                            key={index}
                            href={`services/${service.link}`}
                            className="block text-white  mt-2 text-left"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className="block text-white font-semibold hover:text-[var(--primary)] cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/blogs"
                  className="block text-white font-semibold hover:text-[var(--primary)] cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/login"
                  className="block text-white font-semibold hover:text-[var(--primary)] cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Popup */}
      
    </>
  );
};

export default Navbar;
