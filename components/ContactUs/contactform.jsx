"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactForm({ sitedata }) {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const refreshCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(randomString);
    setUserCaptcha(""); // Reset input field
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailContent = "We’re excited to help you reach your financial goals.";
  const emailData = {
    to: formData.email,
    subject: 'Thank You for Your Enquiry!',
    text: `Dear ${formData.username},\n\nWe sincerely appreciate your interest and the time you took to fill out our enquiry form. We have received your details, and our team will be in touch with you soon.\n\n${emailContent}`,
  };

  const senderData = {
    to: sitedata?.email || "support@alpha72wealth.com",
    subject: 'New Enquiry Received',
    text: `New Enquiry from Contact Us:\n\nUser Name: ${formData.username}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}\n\n${emailContent}`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userCaptcha.trim().toUpperCase() !== captcha.trim().toUpperCase()) {
      alert("Captcha doesn't match. Please try again.");
      refreshCaptcha();
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/leads", formData);

      if (res.status === 201) {
        await axios.post("/api/email", emailData);
        await axios.post("/api/email", senderData);
  
        // Optional: send confirmation and notification emails
        // await axios.post("/api/email", { ...emailData });
        // await axios.post("/api/email", { ...senderData });

        setSubmitted(true);
        setFormData({
          username: "",
          mobile: "",
          email: "",
          message: "",
        });
        setUserCaptcha("");
        refreshCaptcha();
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

      <div>
        <input
          name="username"
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          name="mobile"
          type="tel"
          placeholder="Mobile"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="flex  items-center gap-2">
        <div className="bg-[#f8d7c3] text-[#a30a00] px-2 py-1 rounded font-mono tracking-widest">
          {captcha}
        </div>
        <input
          name="captcha"
          type="text"
          placeholder="Enter Captcha"
          className="w-full p-2 border border-gray-300 rounded"
          value={userCaptcha}
          onChange={(e) => setUserCaptcha(e.target.value)}
          required
        />
        <button
          type="button"
          className="bg-gray-800 text-white px-3 py-2 rounded text-sm"
          onClick={refreshCaptcha}
        >
          Refresh
        </button>
      </div>

      <div>
        <button
          type="submit"
          className="bg-[#0a6396] text-white px-8 py-2 rounded hover:bg-[#085380] transition-colors"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
