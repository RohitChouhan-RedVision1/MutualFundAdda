import { getSocialMedia } from "@/lib/functions";
import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter,FaYoutube,FaWhatsapp } from "react-icons/fa";

const Topbar = async ({ sitedata }) => {
  const SocialMedia = await getSocialMedia();

  // Filter out hidden links
  const visibleLinks = SocialMedia.filter((item) => !item.isHidden);

  // Optional: Map titles to icons
  const iconMap = {
    facebook: <FaFacebook className="text-[#1877F2] text-2xl" />,
    instagram: <FaInstagram className="text-[#e95950] text-2xl" />,
    linkedin: <FaLinkedin className="text-[#0077B5] text-2xl" />,
    twitter: <FaTwitter className="text-[#1DA1F2] text-2xl" />,
    youtube:<FaYoutube className="text-[#FF0000] text-2xl"/>,
    whatsapp:<FaWhatsapp className="text-[#128C7E] text-2xl"/>
  };

  return (
    <div className="w-full py-1 text-sm bg-white">
      <div className="container mx-auto px-2 lg:px-10 flex flex-col md:flex-row  justify-between items-center">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-x-4 ">
          
          <Link
            href={`mailto:${sitedata.email}`}
            className="hover:underline text-[var(--primary)] flex gap-2 text-sm"
          >
            <MdOutlineMail className="text-[var(--primary)] text-lg text-[18px]" />
            {sitedata.email}
          </Link>

          <Link
            href={`mailto:${sitedata.email}`}
            className="hover:underline text-[var(--primary)] flex gap-2 text-sm"
          >
            <IoMdCall className="text-[var(--primary)] text-lg" />
            <span className="text-[var(--primary)]">{sitedata.mobile}</span>
          </Link>
          
        </div>

        {/* Social Media Icons */}
        <div className="flex  space-x-3  mt-2 md:mt-0">
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
      </div>
    </div>
  );
};

export default Topbar;
