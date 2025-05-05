"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const UsefulLinksPage = () => {
  const [usefulLink, setUsefulLink] = useState([]);
  const fetchLinks = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/useful-links?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    if (res.ok) {
      const data = await res.json();
      setUsefulLink(data);
    }
  };
  // useEffect(() => { fetchservice(); }, []);
  useEffect(() => {
    fetchLinks();
  }, []);
  return (
    <div className="main_section">
      <div className="flex overflow-hidden ">
        <div className="container mx-auto page-header-box px-4 md:px-20">
          <h1 className="text-2xl md:text-3xl font-bold uppercase" data-cursor="-opaque">
            Useful Links
          </h1>
         
        </div>
      </div>
      <div className="container mx-auto md:px-20 px-4 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usefulLink.map((link, index) => (
            <Link href={link.link} key={index} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition hover:bg-[#DEEADB] hover:text-black duration-300 flex flex-col justify-center items-center"
              >
                <h3 className="text-xl font-semibold">{link.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksPage;
