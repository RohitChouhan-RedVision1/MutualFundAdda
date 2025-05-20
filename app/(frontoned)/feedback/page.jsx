"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const [mainData, setMainData] = useState("");
  const [ids, setIds] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const feedbackSubmitted = localStorage.getItem("feedbackSubmitted");
    if (feedbackSubmitted) {
      setIsSubmitted(true);
    } else {
      fetchdata();
    }
  }, []);

  const fetchdata = async () => {
    const res = await fetch("/api/admin/site-settings");
    if (res.ok) {
      const data = await res.json();
      setMainData(data[0]);
    }
  };

  const fetchids = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_API}/api/feedback/feedbackmailid`);
    if (res.ok) {
      const data = await res.json();
      setIds(data);
    }
  };

  useEffect(() => {
    fetchids();
  }, []);

  const [formData, setFormData] = useState({
    serviceSatisfaction: "",
    understandingNeeds: "",
    adviceQuality: "",
    communication: "",
    easeOfProcess: "",
    transparency: "",
    toolsHelpfulness: "",
    trustConfidence: "",
    suggestions: "",
    recommendUs: "",
    contactReview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ids.length) {
      toast.error("No email recipients found.");
      return;
    }

    const emailRecipients = ids.map(item => item.id);
    const thankYouEmail = process.env.NEXT_PUBLIC_SMTP_MAIL;
    const allRecipients = [...new Set([...emailRecipients, thankYouEmail])];

    const emailData = {
      user: "MutualFundsAdda",
      to: allRecipients,
      subject: `Client Feedback - MutualFundsAdda`,
      html: `
        <h3>Client Feedback Received</h3>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr><td><strong>1. Satisfaction with services:</strong></td><td>${formData.serviceSatisfaction}</td></tr>
          <tr><td><strong>2. Understanding your needs:</strong></td><td>${formData.understandingNeeds}</td></tr>
          <tr><td><strong>3. Quality of advice:</strong></td><td>${formData.adviceQuality}</td></tr>
          <tr><td><strong>4. Communication & responsiveness:</strong></td><td>${formData.communication}</td></tr>
          <tr><td><strong>5. Ease of transaction process:</strong></td><td>${formData.easeOfProcess}</td></tr>
          <tr><td><strong>6. Transparency:</strong></td><td>${formData.transparency}</td></tr>
          <tr><td><strong>7. Online tools & reports:</strong></td><td>${formData.toolsHelpfulness}</td></tr>
          <tr><td><strong>8. Trust and confidence:</strong></td><td>${formData.trustConfidence}</td></tr>
          <tr><td><strong>9. Suggestions:</strong></td><td>${formData.suggestions}</td></tr>
          <tr><td><strong>10. Recommend us:</strong></td><td>${formData.recommendUs}</td></tr>
          <tr><td><strong>11. Contact for portfolio review:</strong></td><td>${formData.contactReview}</td></tr>
        </table>
        <p>We appreciate your time and trust in MutualFundsAdda.</p>
        <p>Warm regards,<br/>Team MutualFundsAdda</p>
      `
    };

    try {
      await axios.post("/api/email", emailData);
      await axios.post(`${process.env.NEXT_PUBLIC_DATA_API}/api/feedback/add`, { ...formData });

      toast.success("Thank you for your feedback!");
      localStorage.setItem("feedbackSubmitted", "true");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            We appreciate your time and trust in <strong>MutualFundsAdda</strong>.<br />
            Warm regards,<br />
            <strong>Team MutualFundsAdda</strong>
          </p>
        </div>
      </div>
    );
  }

  const renderRadioGroup = (name, label, options) => (
    <div className="mb-4">
      <p className="font-medium text-gray-700">{label}</p>
      <div className="flex flex-col gap-4 mt-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name] === option}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Client Feedback Form</h1>

        {renderRadioGroup("serviceSatisfaction", "1. How satisfied are you with our mutual fund distribution services?", [
          "Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"
        ])}
        {renderRadioGroup("understandingNeeds", "2. Do you feel we understood your financial goals and risk profile well?", [
          "Yes, completely", "Mostly", "Somewhat", "Not really", "Not at all"
        ])}
        {renderRadioGroup("adviceQuality", "3. How would you rate the quality and clarity of the mutual fund recommendations provided?", [
          "Excellent", "Good", "Average", "Poor", "Very Poor"
        ])}
        {renderRadioGroup("communication", "4. How satisfied are you with our communication, follow-up, and availability?", [
          "Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"
        ])}
        {renderRadioGroup("easeOfProcess", "5. How easy was it to complete transactions (SIP, lump sum, redemptions, etc.) through us?", [
          "Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"
        ])}
        {renderRadioGroup("transparency", "6. Do you feel all charges, returns, and risks were explained clearly and transparently?", [
          "Yes, very clearly", "Mostly", "Partially", "Not really", "Not at all"
        ])}
        {renderRadioGroup("toolsHelpfulness", "7. How helpful do you find our digital tools, reports, and portfolio insights?", [
          "Very Helpful", "Helpful", "Neutral", "Not Helpful", "I haven't used them"
        ])}
        {renderRadioGroup("trustConfidence", "8. How confident do you feel in continuing your long-term investment journey with us?", [
          "Very Confident", "Confident", "Neutral", "Unsure", "Not Confident"
        ])}

        <div className="mb-4">
          <label htmlFor="suggestions" className="font-medium text-gray-700 block mb-1">
            9. Do you have any suggestions to help us serve you better?
          </label>
          <textarea
            id="suggestions"
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg p-2 border-gray-300"
            placeholder="Your suggestions..."
          ></textarea>
        </div>

        {renderRadioGroup("recommendUs", "10. Would you be comfortable recommending MutualFundsAdda to your friends or family?", [
          "Definitely", "Probably", "Not Sure", "Probably Not", "Definitely Not"
        ])}
        {renderRadioGroup("contactReview", "11. Would you like us to contact you for a portfolio review or query?", [
          "Yes", "No"
        ])}

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
