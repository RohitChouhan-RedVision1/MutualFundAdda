"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm({ sitedata }) {
  const [hcaptchaToken, setHcaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailContent = "We’re excited to help you reach your financial goals.";
  const emailData = {
    to: formData.email,
    subject: "Thank You for Your Enquiry!",
    text: `Dear ${formData.username},\n\nWe sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.\n\n${emailContent}`,
  };

  const senderData = {
    to: sitedata?.email,
    subject: "New Enquiry Received",
    text: `New Enquiry from Contact Us:\n\nUser Name: ${formData.username}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}\n\n${emailContent}`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hcaptchaToken) {
      alert("Please complete the captcha verification.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/leads", formData);

      if (res.status === 201) {
        await axios.post("/api/email", emailData);
        await axios.post("/api/email", senderData);

        setSubmitted(true);
        setFormData({
          username: "",
          mobile: "",
          email: "",
          message: "",
        });
        setHcaptchaToken("");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {submitted && (
        <div className="p-4 bg-green-100 text-green-800 rounded">
          Thank you! Your enquiry has been submitted.
        </div>
      )}

      <input
        name="username"
        type="text"
        placeholder="Name*"
        className="w-full px-8 py-4 rounded-lg font-medium placeholder-red-500 bg-[#E8EFFE] border border-gray-200  text-sm focus:outline-none focus:border-gray-400"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <input
        name="mobile"
        type="tel"
        placeholder="Mobile*"
        className="w-full px-8 py-4 rounded-lg font-medium bg-[#E8EFFE] border border-gray-200 placeholder-red-500 text-sm focus:outline-none focus:border-gray-400"
        value={formData.mobile}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email*"
        className="w-full px-8 py-4 rounded-lg font-medium bg-[#E8EFFE] border border-gray-200 placeholder-red-500 text-sm focus:outline-none focus:border-gray-400"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* <select
        name="service"
        className="w-full px-8 py-4 rounded-lg font-medium bg-[#E8EFFE] border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select a Service*</option>
        <option>Mutual Funds</option>
        <option>Portfolio Management Services (PMS)</option>
        <option>Alternative Investment Funds (AIFs)</option>
        <option>National Pension System (NPS)</option>
        <option>Sovereign Gold Bonds (SGB)</option>
        <option>Structural Products</option>
        <option>Insurance</option>
        <option>Loan</option>
        <option>Corporate FD</option>
        <option>IPOs & NFOs</option>
      </select> */}

      <textarea
        name="message"
        placeholder="Message"
        className="w-full px-8 py-4 rounded-lg font-medium bg-[#E8EFFE] border border-gray-200 placeholder-red-500 text-sm focus:outline-none focus:border-gray-400 h-32"
        value={formData.message}
        onChange={handleChange}
        // required
      ></textarea>

      <div className="">
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onVerify={setHcaptchaToken}
        />
      </div>

      <button
        type="submit"
        className="bg-[var(--primary)] hover:bg-[var(--primary)] transform transition-transform duration-300 hover:scale-105 text-white px-6 py-3 text-lg font-semibold rounded-md shadow"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
