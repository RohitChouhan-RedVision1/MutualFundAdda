// components/LoginPage.jsx
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";
import ForgotPasswordModal from "../ForgetpasswordModelHome/ForgetpasswordModel";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("CLIENT");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const [provider, setProvider] = useState({
    username: "",
    password: "",
    loginFor: "CLIENT",
    // callbackUrl: "https://alpha72.vercel.app/login"
  });

  // Sync loginFor when selectedRole changes
  useEffect(() => {
    setProvider((prev) => ({
      ...prev,
      loginFor: selectedRole === "ADMIN" ? "ADVISOR" : selectedRole,
    }));
  }, [selectedRole]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/login", provider);
      console.log(res.data);
      if (res.data.status === true) {
        router.push(`${res.data.url}`);
      } else {
        setError(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-cyan-50 flex items-center justify-center relative">
      <div>
        <div className="bg-white rounded-t-3xl shadow-lg flex flex-col md:flex-row md:max-w-4xl w-full overflow-hidden relative">
          {/* Left Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-yellow-100 to-white relative">
            <div className=" text-sm space-y-1 text-right">
              <div className="flex items-center justify-end gap-2 text-gray-600">
                <FaEnvelope />
                <span>wealthstandards@gmail.com</span>
              </div>
              <div className="flex items-center justify-end gap-2 text-gray-600">
                <FaPhone />
                <span>+91 9820256471</span>
              </div>
            </div>
            <h1 className="text-2xl font-semibold">Welcome to</h1>
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Megha Malhar
            </h2>
            <p className="text-sm text-gray-600">
              We are currently working on an exciting new update for our
              website. Till then you can use our login panel.
            </p>
            <img
              src="/imge-01.png" // Replace with actual asset
              alt="Analytics"
              className="mt-6 w-72 h-auto"
            />
          </div>

          {/* Right Section - Login */}
          <div className="md:w-1/2 p-10 bg-white">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-700 mt-10">
              Sign In Now
            </h3>

            <div className="flex justify-center gap-4 mb-6">
              {["CLIENT", "EMPLOYEE", "ADMIN"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedRole(type)}
                  className={`px-4 py-1 border rounded-full text-sm ${
                    selectedRole === type
                      ? "bg-yellow-400 text-white font-semibold"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={provider?.username}
                  onChange={(e) =>
                    setProvider({ ...provider, username: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    value={provider.password}
                    onChange={(e) =>
                      setProvider({ ...provider, password: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs text-blue-700 font-medium hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 text-white py-2 rounded font-semibold hover:bg-cyan-600 transition"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
        <footer className="rounded-b-3xl w-full text-center text-md py-2 bg-gradient-to-r from-yellow-300 to-cyan-400 text-gray-600">
          <p>
            © 2025 <strong>Megha Malhar</strong> | Owned by{" "}
            <strong>Meghmalhar Financial Services Private Limited</strong>. All
            rights reserved.
            <br />
            <a href="#" className="underline mr-2">
              Contact Us
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </footer>
      </div>

      <ForgotPasswordModal
        isOpen={showForgotModal}
        selectedRole={selectedRole}
        onClose={() => setShowForgotModal(false)}
      />

      {/* Footer */}
    </div>
  );
}
