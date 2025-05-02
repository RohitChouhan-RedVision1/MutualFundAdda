import { getSocialMedia } from "@/lib/functions";
import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Topbar = async ({ sitedata }) => {
  const SocialMedia = await getSocialMedia();

  // Filter out hidden links
  const visibleLinks = SocialMedia.filter((item) => !item.isHidden);

  // Optional: Map titles to icons
  const iconMap = {
    facebook: <FaFacebook className="text-[var(--primary)] text-lg" />,
    instagram: <FaInstagram className="text-[var(--primary)] text-lg" />,
    linkedin: <FaLinkedin className="text-[var(--primary)] text-lg" />,
    twitter: <FaTwitter className="text-[var(--primary)] text-lg" />,
  };

  return (
    <div className="w-full py-1 text-sm bg-white">
      <div className="container mx-auto px-2 lg:px-10 flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center space-x-4 text-[18px]">
          
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
        <div className="hidden lg:flex space-x-3 text-[18px]">
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
