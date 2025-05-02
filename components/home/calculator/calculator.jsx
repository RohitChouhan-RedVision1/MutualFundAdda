"use client";

import { useState, useEffect } from "react";
import { Card } from "../../ui/card";
import { Slider } from "../../ui/slider";
import { Button } from "../../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
// import { Bar } from "react-chartjs-2";  // Import Bar chart component from react-chartjs-2
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Link from "next/link";
import styles from "./calculator.module.css";

import axios from "axios";

// import { Chart } from "react-google-charts";  // Import Google Chart

// Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const calculateSip = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/sip-calculator?monthlyInvestment=${monthlyInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (res.status === 200) {
        const data = res.data;
        const futureValue = data.futureValue;
        const totalInvestment = data.totalInvestment;
        const yearlyData = data.yearlyData;

        setResult({
          futureValue: Number(futureValue?.toFixed(2)),
          totalInvestment: Number(totalInvestment?.toFixed(2)),
        });
        setChartData([
          { name: "Invested Amount", value: totalInvestment },
          { name: "Estimated Return", value: futureValue - totalInvestment },
          { name: "Final Amount", value: futureValue },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(chartData);
  // console.log(result,chartData[0],"dnajkdnh")
  // Update the calculation when any of the investment values change
  useEffect(() => {
    calculateSip();
  }, [monthlyInvestment, investmentDuration, expectedReturn]);
  return (
    <div className="main_section">
      <div className="container  mx-auto px-4 md:px-14   items-center text-center ">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase">Financial Tools</h2>
          </div>
          <div className="flex flex-col gap-4 md:gap-20 md:flex-row pt-5 md:relative ">
            <Card className="w-full md:w-1/2 ">
              {/* < */}
              <div className="sm:space-y-8 ">
                {/* Invested Amount Section */}
                <div>
                  <div className="flex sm:flex-row justify-between">
                    <label className="block pt-2  text-black text-md md:text-xl font-semibold ">
                      Invested Amount (₹)
                    </label>
                    <div className="relative w-64 h-12">
                      <input
                        type="number"
                        value={monthlyInvestment}
                        onChange={(e) =>
                          setMonthlyInvestment(Number(e.target.value))
                        }
                        className="w-full h-full pl-10 bg-transparent border  border-[var(--primary)] border-solid   text-black font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[var(--primary)]">
                        ₹
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    max={100000}
                    step={1000}
                    className="mt-2 text-[var(--primary)]"
                  />
                </div>
              </div>

              <div className="space-y-8  mt-2 ">
                <div>
                  <div className="flex sm:flex-row  justify-between">
                    <label className="block pt-2  text-black text-md md:text-xl font-semibold">
                      Expected Return (%)
                    </label>
                    <div className="relative w-64 h-12">
                      <input
                        type="number"
                        value={expectedReturn}
                        onChange={(e) =>
                          setExpectedReturn(Number(e.target.value))
                        }
                        className="w-full h-full pl-10 bg-transparent border  border-[var(--primary)] border-solid   text-black font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[var(--primary)]">
                        %
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    max={30}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="space-y-8  mt-2">
                <div>
                  <div className=" flex sm:flex-row  justify-between">
                    <label className="block pt-2  text-black text-md md:text-xl font-semibold">
                      Time Period (Y)
                    </label>
                    <div className="relative w-64 h-12">
                      <input
                        type="number"
                        value={investmentDuration}
                        onChange={(e) =>
                          setInvestmentDuration(Number(e.target.value))
                        }
                        className="w-full h-full pl-10 bg-transparent border  border-[var(--primary)] border-solid   text-black font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[var(--primary)]">
                        Y
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[investmentDuration]}
                    onValueChange={(value) => setInvestmentDuration(value[0])}
                    max={40}
                    step={1}
                    className="mt-2 "
                  />
                </div>
              </div>
            </Card>
            <Card className="w-full md:w-1/2 ">
              <div className="space-y-8 ">
                {/* Invested Amount Section */}
                <div className=" bg-white h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value">
                        {chartData.map((entry, index) => {
                          let fillColor = "#ccc";
                          if (entry.name === "Invested Amount")
                            fillColor = "#FFD700"; // Yellow
                          if (entry.name === "Estimated Return")
                            fillColor = "#2C4E80"; // Blue
                          if (entry.name === "Final Amount")
                            fillColor = "#008000"; // Green
                          return (
                            <Cell key={`cell-${index}`} fill={fillColor} />
                          );
                        })}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row pt-5  md:relative ">
            <div className="w-full md:w-1/3">
              {/* Invested Amount Section */}
              <div className="border-2 border-solid border-[var(--primary)] rounded-[10px] p-4 py-6">
                <div className="flex justify-between w-full">
                  <label className="text-[var(--primary)] text-xl font-bold">
                    Invested Amount (₹)
                  </label>
                  <label className="text-[var(--primary)] text-xl font-bold">
                  ₹{result?.totalInvestment?.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              {/* Invested Amount Section */}
              <div className="border-2 border-solid border-[var(--primary)] rounded-[10px] p-4 py-6">
                <div className="flex justify-between w-full">
                  <label className="text-[var(--primary)] text-xl font-bold">
                    Estimated Return (₹)
                  </label>
                  <label className="text-[var(--primary)] text-xl font-bold">
                    ₹{(result?.futureValue-result?.totalInvestment)?.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              {/* Invested Amount Section */}
              <div className="border-2 border-solid border-[var(--primary)] rounded-[10px] p-4 py-6">
                <div className="flex justify-between w-full">
                  <label className="text-[var(--primary)] text-xl font-bold">
                    Final Amount (₹)
                  </label>
                  <label className="text-[var(--primary)] text-xl font-bold">
                    ₹{(result?.futureValue)?.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
