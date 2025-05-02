import ContactForm from "@/components/ContactUs/contactform";
import { getSiteData } from "@/lib/functions";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
export default async function ContactUs() {
  const sitedata = await getSiteData();

  return (
    <div>
      <div className="container  mx-auto px-4 py-12">
      {/* Contact Info Cards */}
      <div className="flex flex-col  gap-4 overflow-hidden rounded-lg mb-8">
        {/* Call Us */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center text-center">
          <div className="bg-[var(--primary)] text-white p-8 rounded-2xl shadow-md w-full md:w-1/3 flex flex-col items-center justify-center">
            <Phone className="mb-2" size={24} />
            <h3 className="text-lg font-medium mb-2">Call Us</h3>
            <p className="text-sm"><Link href={`tel:${sitedata.mobile}`} >{sitedata.mobile}</Link></p>
          </div>

          <div className="bg-[var(--primary)] text-white p-8 rounded-2xl shadow-md w-full md:w-1/3 flex flex-col items-center justify-center">
            <Mail className="mb-2" size={24} />
            <h3 className="text-lg font-medium mb-2">Mail Us</h3>
            <p className="text-sm break-all"><p><Link href={`mailto:${sitedata.email}`} >{sitedata.email}</Link></p></p>
          </div>
          <div className="bg-[var(--primary)] text-white p-6 rounded-2xl shadow-md w-full md:w-1/3 flex flex-col items-center justify-center">
          <MapPin className="mb-2" size={24} />
          <h3 className="text-lg font-medium">Reach Us</h3>
            <p className="text-sm break-all"><a href={`${sitedata.mapurl}`} target="_blank" rel="noopener noreferrer">
    {sitedata.address}
  </a></p>
          </div>
        </div>
      </div>

      {/* Reach Us */}

      {/* Map and Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map */}
        <div className="w-full h-[500px] relative border border-gray-200 rounded">
          <iframe
            src={sitedata?.iframe}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <ContactForm sitedata={sitedata} />
        </div>
      </div>
    </div>
    </div>
  );
}
