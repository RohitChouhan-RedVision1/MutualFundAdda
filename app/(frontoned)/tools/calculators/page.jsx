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
    <div className="container mx-auto py-10 px-20">
      <section className="">
        <div className="page-header">
          <div className="">
                               {/* <div className="container mx-auto px-4 md:px-20 pt-12 pb-2"> */}
                               <div className="  mb-8">
                                     <h1 className="text-4xl pb-5 font-bold text-black">Download Form</h1>
                                     <Breadcrumb>
                                       <BreadcrumbList className="text-black text-center items-center">
                                         <BreadcrumbItem>
                                           <BreadcrumbLink className="text-center items-center text-black" href="/">
                                             Home
                                           </BreadcrumbLink>
                                         </BreadcrumbItem>
                                         <BreadcrumbSeparator />
                                         <BreadcrumbItem>
                                           <BreadcrumbLink className="text-black" href="/tools">Tools</BreadcrumbLink>
                                         </BreadcrumbItem>
                                         <BreadcrumbSeparator />
                                         <BreadcrumbItem>
                                           <BreadcrumbPage className="text-black" >Calculators</BreadcrumbPage>
                                         </BreadcrumbItem>
                                       </BreadcrumbList>
                                     </Breadcrumb>
          
                                   </div>
                               {/* </div> */}
                               </div>
        </div>
        <div className=" mx-auto">
          <div className="flex  space-x-4 mb-14">
            <Button
              onClick={() => {
                setIsMonthlySip(true);
              }}
              className={`text-md p-5 rounded ${
                !isMonthlySip
                  ? "bg-[#1b5880] text-white"
                  : "bg-[var(--rv-bg-secondary)]"
              }`}
            >
              <p>Calculators</p>
            </Button>
            <Button
              onClick={() => {
                setIsMonthlySip(false);
              }}
              className={`text-md p-5 rounded ${
                isMonthlySip
                  ? "bg-[#1b5880] text-white"
                  : "bg-[var(--rv-bg-secondary)]"
              }`}
            >
              <p>Performance</p>
            </Button>
          </div>
          {isMonthlySip ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
              {calculators.map((item, index) => (
                <Link href={item?.route} key={index}>
                  <div className="px-2 bg-[#1b5880] w-100 md:w-80 h-20  flex  gap-4 rounded items-center shadow-md group">
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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
              {performance.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="px-2  bg-[#1b5880] w-100 md:w-80     h-20 flex gap-4 rounded items-center shadow-md group">
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
  );
}
