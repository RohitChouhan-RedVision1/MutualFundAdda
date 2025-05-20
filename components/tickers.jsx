"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const Tickers = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/tickers?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...data, ...data]; // Duplicate for seamless looping

  return (
    <div className="overflow-hidden bg-black py-2 relative">
      <div className="whitespace-nowrap animate-marquee flex">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-white border-r border-white px-4 min-w-[300px]"
          >
            <span className="font-bold text-sm">{item?.indexName}</span>
            <span className="font-semibold text-xs">{item?.figure}</span>
            <div className="flex items-center gap-2 bg-gray-600 p-1 px-2 rounded">
              <span
                className={`flex items-center text-xs font-bold ${
                  item?.diff_amount > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {item?.diff_amount > 0 ? <FiArrowUp /> : <FiArrowDown />}
              </span>
              <span
                className={`text-xs font-bold ${
                  item?.diff_amount > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {item?.diff_amount} ({item?.percentage}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickers;
