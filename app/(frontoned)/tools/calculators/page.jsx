"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { calculators, performance } from "@/data/calculators";

export default function Page() {
  const [isMonthlySip, setIsMonthlySip] = useState(true);
  return (
    <div className="main_section">
      <div className="container mx-auto px-4 md:px-20">
      <section className="">
        <div className="page-header">
          <div className="">
            {/* <div className="container mx-auto px-4 md:px-20 pt-12 pb-2"> */}
            <div className="  mb-5">
              <h1 className="text-2xl md:text-3xl font-bold uppercase">
                Calculators
              </h1>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className=" mx-auto">
        <div className="flex justify-center mb-14">
  <div className="inline-flex border border-[var(--primary)] rounded-full shadow-inner">
    <Button
      onClick={() => setIsMonthlySip(true)}
      className={`px-10 md:px-20  py-4 text-lg font-medium border border-[var(--primary)] rounded-l-full transition-all duration-300 ${
        isMonthlySip
          ? "bg-[var(--primary)] text-white"
          : "bg-white text-[var(--primary)]"
      }`}
    >
      Calculators
    </Button>
    <Button
      onClick={() => setIsMonthlySip(false)}
      className={`px-10 md:px-20 py-4 text-lg font-medium border border-[var(--primary)] rounded-r-full transition-all duration-300 ${
        !isMonthlySip
           ? "bg-[var(--primary)] text-white"
          : "bg-white text-[var(--primary)]"
      }`}
    >
      Performance
    </Button>
  </div>
</div>

          {isMonthlySip ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {calculators.map((item, index) => (
                <Link href={item?.route} key={index}>
                  <div className="px-2 bg-[var(--primary)]  h-14  flex  gap-4 rounded items-center shadow-md group">
                    <div>
                      <Image src={item?.image} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-md group-hover:text-[#F3F3E0]">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {performance.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="px-2  bg-[var(--primary)]  h-14 flex gap-4 items-center rounded-md  shadow-md group">
                    <div>
                      <Image src={item?.image} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-md group-hover:[#F3F3E0]">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
    </div>
  );
}
