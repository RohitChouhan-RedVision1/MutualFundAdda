"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";

const Navbar = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMegaMenuAboutOpen, setIsMegaMenuAboutOpen] = useState(false);
  const [isMegaMenuToolsOpen, setIsMegaMenuToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutusOpen, setIsAboutusOpen] = useState(false);
  const [isMegaMenuMfdsOpen, setIsMegaMenuMfdsOpen] = useState(false);
  const [isMegaMenuContact, setIsMegaMenuContact] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMfdsOpen, setIsMfdsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const servicedata = [
    { name: "Mutual Funds", link: "mutual-funds" },
    { name: "Portfolio Management Services (PMS)", link: "pms" },
    { name: "Alternative Investment Funds (AIFs)", link: "aifs" },
    { name: "National Pension System(NPS)", link: "nps" },
    { name: "Sovereign Gold Bonds (SGB)", link: "sovereign-gold-bond" },
    { name: "Structural Products", link: "structural-products" },
    {
      name: "Insurance",
      children: [
        { name: "General Insurance", link: "insurance/#generalinsurance" },
        { name: "Life Insurance", link: "insurance/#lifeinsurance" },
        { name: "Health Insurance", link: "insurance/#healthinsurance" },
      ],
    },
    {
      name: "Loan",
      children: [
        { name: "Home Loans", link: "loan/home-loans" },
        { name: "Loan Against Property", link: "loan/LAP" },
        {
          name: "Loans Against Mutual Fund",
          link: "https://transact.miraeassetfin.com/register?ref=ooycTBj4sgqC5bLE5hEDsA%3D%3D",
          external: true,
        },
        {
          name: "Loan Against Securities",
          link: "loan/las",
        },
      ],
    },
    { name: "Corporate FD", link: "coprate-fds" },
    { name: "IPOs & NFOs", link: "ipos-nfos" },
  ];

  const tools = [
    { href: "/tools/calculators", text: "Calculators" },
    { href: "/tools/downloadforms", text: "Download Form" },
    { href: "/tools/financialhealth", text: "Financial health" },
    { href: "/tools/paypremiumonline", text: "Pay Premium online" },
    { href: "/tools/riskprofile", text: "Risk Profile" },
    { href: "/tools/usefullinks", text: "Useful Links" },
  ];

  const aboutus = [
    { href: "/about", text: "Our Mission & Vision" },
    { href: "/gallery", text: "Gallery" },
    { href: "/#testimonials", text: "Testimonials" },
    { href: "/feedback", text: "Feedback" },
  ];

  const mfds = [
    // { href: "/contactus", text: "Contact us" },
  ];

  const contact = [{ href: "/contactus", text: "Contact us" }];
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
          isScrolled
            ? "sticky bg-[var(--primary)] shadow-lg "
            : "relative bg-[var(--primary)]"
        }`}
      >
        <div className="mainnavbar relative px-5  ">
          <div className="flex items-center justify-between gap-2  relative bg-[var(--primary)] z-50 ">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="RF Wealth Logo"
                width={300}
                height={100}
              />
            </Link>

            {/* Navigation (Hidden on Mobile) */}
            <nav className="screennavbar text-[16px]  space-x-4">
              <Link href="/" className="text-white font-bold">
                Home
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setIsMegaMenuAboutOpen(true)}
                onMouseLeave={() => setIsMegaMenuAboutOpen(false)}
              >
                <span className="text-white flex items-center cursor-pointer font-bold">
                  About Us<span className="ml-1">&#x25BE;</span>
                </span>
                <AnimatePresence>
                  {isMegaMenuAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 text-[var(--primary)] shadow-lg rounded-md bg-white"
                    >
                      {aboutus.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 hover:bg-[var(--primary)] hover:text-white font-bold"
                        >
                          {service.text}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}

              <div
                className="relative group"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => {
                  setIsMegaMenuOpen(false);
                  setHoveredIndex(null);
                }}
              >
                <span className="text-white flex items-center cursor-pointer font-bold">
                  Services <span className="ml-1 font-bold">&#x25BE;</span>
                </span>
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-72 text-[var(--primary)] shadow-lg rounded-md bg-white z-50"
                    >
                      {servicedata.map((service, index) => (
                        <div
                          key={index}
                          className="relative group"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {service.children ? (
                            <>
                              <span className="px-4 py-2 hover:bg-[var(--primary)] hover:text-white cursor-pointer font-bold flex justify-between items-center">
                                {service.name}{" "}
                                <span className="ml-2">&#x25B6;</span>
                              </span>
                              <AnimatePresence>
                                {hoveredIndex === index && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="absolute top-0 left-full ml-1 w-64 text-[var(--primary)] bg-white shadow-lg rounded-md"
                                  >
                                    {service.children.map((child, cIndex) =>
                                      child.external ? (
                                        <a
                                          key={cIndex}
                                          href={child.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block px-4 py-2 hover:bg-[var(--primary)] font-bold hover:text-white"
                                        >
                                          {child.name}
                                        </a>
                                      ) : (
                                        <Link
                                          key={cIndex}
                                          href={`/services/${child.link}`}
                                          className="block px-4 py-2 hover:bg-[var(--primary)] font-bold hover:text-white"
                                        >
                                          {child.name}
                                        </Link>
                                      )
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              href={`/services/${service.link}`}
                              className="block px-4 py-2 hover:bg-[var(--primary)] hover:text-white font-bold"
                            >
                              {service.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div
                className="relative group"
                onMouseEnter={() => setIsMegaMenuToolsOpen(true)}
                onMouseLeave={() => setIsMegaMenuToolsOpen(false)}
              >
                <span className="text-white flex items-center cursor-pointer font-bold">
                  Tools <span className="ml-1">&#x25BE;</span>
                </span>
                <AnimatePresence>
                  {isMegaMenuToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 text-[var(--primary)] shadow-lg rounded-md bg-white"
                    >
                      {tools.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 font-bold hover:bg-[var(--primary)] hover:text-white"
                        >
                          {item.text}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* <div
                className="relative group"
                onMouseEnter={() => setIsMegaMenuMfdsOpen(true)}
                onMouseLeave={() => setIsMegaMenuMfdsOpen(false)}
              >
                <span className="text-white flex items-center cursor-pointer">
                  MFDs Hub <span className="ml-1">&#x25BE;</span>
                </span>
                <AnimatePresence>
                  {isMegaMenuMfdsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 bg-[var(--primary)] shadow-lg rounded-md text-white"
                    >
                      {mfds.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 hover:bg-[var(--primary)]"
                        >
                          {item.text}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}
              <Link href="/nri-corner" className="text-white font-bold">
                NRI Corner
              </Link>
              {/* <Link href="/performance/fund-performance" className="text-white">
                Fund Performance
              </Link> */}
              <Link href="/blogs" className="text-white font-bold">
                Blog
              </Link>
              <Link href="/performance/fund-performance" className="text-white font-bold">
                Fund Performance
              </Link>
              <div
                className="relative group"
                onMouseEnter={() => setIsMegaMenuContact(true)}
                onMouseLeave={() => setIsMegaMenuContact(false)}
              >
                <span className="text-white flex items-center cursor-pointer font-bold">
                  Get In Touch<span className="ml-1">&#x25BE;</span>
                </span>
                <AnimatePresence>
                  {isMegaMenuContact && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 text-[var(--primary)] shadow-lg rounded-md bg-white"
                    >
                      {contact.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block font-bold px-4 py-2 hover:bg-[var(--primary)] hover:text-white "
                        >
                          {item.text}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Portfolio Login Button (Hidden on Mobile) */}
            <div className="screennavbar md:flex gap-2 text-[16px]">
              <Link href="/login">
                <button className="bg-white font-bold text-[var(--primary)] px-5 py-2 rounded-md transform transition-transform duration-300 hover:scale-105  cursor-pointer hover:border-white">
                  Login
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobilebar">
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
      className="absolute top-14 left-0 w-full bg-white z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
    >
      <div className="p-6">
        {/* Mobile Navigation */}
        <nav className="mt-4 space-y-4">
          <Link
            href="/"
            className="block text-[var(--primary)]  font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div>
            <h3
              className="text-[var(--primary)] font-semibold cursor-pointer flex justify-between"
              onClick={() => setIsAboutusOpen(!isAboutusOpen)}
            >
              About Us
              <span>{isAboutusOpen ? "▲" : "▼"}</span>
            </h3>
            <AnimatePresence>
              {isAboutusOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  {aboutus.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-[var(--primary)] mt-2 text-left"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsAboutusOpen(false);
                      }}
                    >
                      {item.text}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div>
            <h3
              className="text-[var(--primary)] font-semibold cursor-pointer flex justify-between"
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
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredService(service.name)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {!service.children ? (
                        <Link
                          href={
                            service.external
                              ? service.link
                              : `/services/${service.link}`
                          }
                          target={service.external ? "_blank" : "_self"}
                          rel={service.external ? "noopener noreferrer" : undefined}
                          className="block text-[var(--primary)] mt-2 text-left"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ) : (
                        <div className="relative">
                          <span className="block text-[var(--primary)] mt-2">{service.name}</span>
                          {hoveredService === service.name && (
                            <div className="ml-4 mt-2 space-y-1">
                              {service.children.map((child, childIndex) => (
                                <Link
                                  key={childIndex}
                                  href={`/${child.link}`}
                                  className="block text-[var(--primary)] text-sm"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsServicesOpen(false);
                                  }}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tools Dropdown */}
          <div>
            <h3
              className="text-[var(--primary)] font-semibold cursor-pointer flex justify-between"
              onClick={() => setIsToolsOpen(!isToolsOpen)}
            >
              Tools
              <span>{isToolsOpen ? "▲" : "▼"}</span>
            </h3>
            <AnimatePresence>
              {isToolsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  {tools.map((tool, index) => (
                    <Link
                      key={index}
                      href={tool.href}
                      className="block text-[var(--primary)] mt-2 text-left"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsToolsOpen(false);
                      }}
                    >
                      {tool.text}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
           <Link
            href="/nri-corner"
            className="block text-[var(--primary)] font-semibold cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            NRI Corner
          </Link>

<Link
            href="/blogs"
            className="block text-[var(--primary)] font-semibold cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          {/* Get In Touch Dropdown */}
          <div>
            <h3
              className="text-[var(--primary)] font-semibold cursor-pointer flex justify-between"
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Get In Touch
              <span>{isContactOpen ? "▲" : "▼"}</span>
            </h3>
            <AnimatePresence>
              {isContactOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  {contact.map((tool, index) => (
                    <Link
                      key={index}
                      href={tool.href}
                      className="block text-[var(--primary)] mt-2 text-left"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsContactOpen(false);
                      }}
                    >
                      {tool.text}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Static Links */}
          
          <Link
            href="/login"
            className="block text-[var(--primary)] font-semibold cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Invest now
          </Link>
         
          <Link
            href="/login"
            className="block text-[var(--primary)] font-semibold cursor-pointer"
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
