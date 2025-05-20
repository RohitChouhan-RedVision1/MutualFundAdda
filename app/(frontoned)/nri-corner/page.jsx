import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "NRI Corner – Invest in Indian Mutual Funds from Abroad",
  description:
    "Your gateway to mutual fund investments in India as an NRI. Learn about repatriation, KYC, account types, and compliance requirements.",
};

const NriCorner = () => {
  return (
    <div className="main_section">
      <div className="container mx-auto px-4 md:px-32">
        {/* Heading */}
        <h2 className="text-lg md:text-3xl font-bold uppercase mb-8">
          NRI CORNER
        </h2>
        {/* Introduction */}
        <div className="mb-8 text-lg text-gray-700 text-justify space-y-4">
          <p>NRI Corner – Your Gateway to Mutual Fund Investments in India</p>
          <p>
            Welcome to the NRI Corner of <span className="font-bold">mutual</span>fundsadda – your trusted partner for investing in
Indian mutual funds from anywhere in the world. We help you stay connected with
India’s growth story while managing your investments seamlessly and compliantly.
          </p>
          <p>
            However, NRIs are required to comply with all regulatory requirements such as
completion of KYC before investing. Also, a few countries such as US and Canada have
certain restrictions on investments by NRIs in Mutual Funds without relevant
disclosures. Hence, NRIs from these countries must check with their Mutual fund
distributor before investing in Indian funds.
          </p>
        </div>

        {/* Why Should NRIs Invest in India */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Why Should NRIs Invest in India?
          </h2>
          <p>
            India continues to be one of the most attractive investment
            destinations for NRIs. Here’s why:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>India’s Strong Economic Growth:</strong> India is one of
                the fastest-growing major economies in the world, offering
                attractive long-term growth prospects and robust financial
                markets.
              </div>
            </li>
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>High Return Potential:</strong> Indian mutual funds,
                especially equity funds, have historically delivered strong
                returns compared to many developed markets, making them a
                compelling choice for capital growth.
              </div>
            </li>
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>Rupee Appreciation Potential:</strong> Long-term
                appreciation in the Indian Rupee can enhance overall returns
                when funds are repatriated in foreign currency.
              </div>
            </li>
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>Diversification:</strong> Investing in India helps NRIs
                diversify their global portfolio by including exposure to
                emerging markets and domestic sectors.
              </div>
            </li>
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>Professional Fund Management:</strong>NRIs gain access
                to funds managed by seasoned professionals and top-rated Asset
                Management Companies (AMCs), backed by SEBI regulation.
              </div>
            </li>
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>Transparent and Well-Regulated Market:</strong> India’s
                mutual fund industry is regulated by SEBI, ensuring investor
                protection, transparency, and adherence to global compliance
                norms.
              </div>
            </li>
            <li className="flex items-start">
              <FaRegCheckCircle className="text-green-600 text-lg flex-shrink-0 mt-1 mr-3" />
              <div>
                <strong>Tax-Efficient Investment:</strong> Certain mutual fund
                categories offer tax-efficient growth, and NRIs may also benefit
                under Double Taxation Avoidance Agreements (DTAA) depending on
                their country of residence.
              </div>
            </li>
          </ul>
        </div>

        {/* Repatriation Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Repatriation
          </h2>
          <p className="text-gray-700 mb-4">
            As an NRI, you can invest on either on a repatriation basis or a
            non-repatriation basis. Repatriation implies that you can transfer
            your investment capital, dividends and returns out of India.
            Non-repatriation implies the opposite, that is, your investment
            capital, dividends and returns cannot be transferred outside India.
          </p>
          <p className="text-gray-700 mb-4">
            You can have three kinds of bank accounts in India. You can open all
            these three accounts with any bank in India and the accounts can be
            used to make investments in India.
          </p>
          <p className="text-gray-700 mb-4">
            Non-Resident External Rupee account (NRE account): Funds from an NRE
            account can be repatriated abroad.
          </p>

          <p className="text-gray-700 mb-4">
            Fully Convertible Non-Resident account (FCNR account): The FCNR
            account involves a fixed deposit in a foreign currency. Funds from
            this account can be repatriated abroad. However, this account cannot
            be used for investing in a foreign currency.
          </p>

          <p className="text-gray-700 mb-4">
            Non-Residential Ordinary account (NRO account): Funds from an NRO
            account cannot be repatriated abroad.
          </p>

          <p className="text-gray-700 mb-4">
            It must be noted that income and redemption amounts can be
            repatriated only if you continue being an NRI at the time of
            repatriation. Also note that you cannot invest in foreign currency;
            in other words, your investments in Indian mutual funds must be made
            in Indian rupees.
          </p>
        </div>

        {/* How to Invest */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            How Can NRIs Invest in Indian Mutual Funds?
          </h2>
          <p className="text-gray-700 mb-6">
            Investing in Indian mutual funds as an NRI is simple when the right
            process is followed. Here’s a step-by-step guide:
          </p>

          <ul className="space-y-6 text-gray-700">
            {/* Step 1 */}
            <li>
              <div className="flex items-start">
                <FaRegCheckCircle className="text-green-600 text-lg mt-1 mr-3 flex-shrink-0" />
                <div>
                  <strong>Step 1: Open an NRE/NRO Bank Account</strong>
                  <p className="mt-1">
                    To invest in India, NRIs must have either of the following
                    Indian bank accounts:
                  </p>
                  <ul className="list-disc list-inside mt-2 pl-5 space-y-1">
                    <li>
                      <strong>NRE (Non-Resident External) Account:</strong>{" "}
                      Fully repatriable
                    </li>
                    <li>
                      <strong>NRO (Non-Resident Ordinary) Account:</strong>{" "}
                      Repatriation permitted with limits
                    </li>
                  </ul>
                  <p className="mt-2 italic text-sm text-gray-600">
                    Note: Investments cannot be made from foreign bank accounts.
                  </p>
                </div>
              </div>
            </li>

            {/* Step 2 */}
            <li>
              <div className="flex items-start">
                <FaRegCheckCircle className="text-green-600 text-lg mt-1 mr-3 flex-shrink-0" />
                <div>
                  <strong>Step 2: Complete KYC & FATCA Compliance</strong>
                  <p className="mt-1">
                    You need to complete your Know Your Customer (KYC)
                    formalities, which includes:
                  </p>
                  <ul className="list-disc list-inside mt-2 pl-5 space-y-1">
                    <li>PAN Card</li>
                    <li>Passport (with visa/PIO/OCI details)</li>
                    <li>Overseas address proof</li>
                    <li>Recent passport-size photograph</li>
                    <li>
                      In-person verification or video KYC (depending on
                      AMC/distributor)
                    </li>
                    <li>FATCA declaration form</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Step 3 */}
            <li>
              <div className="flex items-start">
                <FaRegCheckCircle className="text-green-600 text-lg mt-1 mr-3 flex-shrink-0" />
                <div>
                  <strong>Step 3: Choose Investment Mode</strong>
                  <p className="mt-1">You can invest:</p>
                  <ul className="list-disc list-inside mt-2 pl-5 space-y-1">
                    <li>
                      <strong>Online:</strong> through our secure portal (paperless onboarding & transactions)
                    </li>
                    <li>
                      <strong>Offline:</strong> via physical forms submitted to your mutual fund distributor or AMC
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Step 4 */}
            <li>
              <div className="flex items-start">
                <FaRegCheckCircle className="text-green-600 text-lg mt-1 mr-3 flex-shrink-0" />
                <div>
                  <strong>Step 4: Select the Right Fund</strong>
                  <p className="mt-1">
                    Choose from a wide range of schemes based on your:
                  </p>
                  <ul className="list-disc list-inside mt-2 pl-5 space-y-1">
                    <li>Investment goals</li>
                    <li>Risk profile</li>
                    <li>Time horizon</li>
                    <li>Repatriation preference</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600 italic">
                    Our expert advisory team is available to help you with
                    customized suggestions.
                  </p>
                </div>
              </div>
            </li>

            {/* Step 5 */}
            <li>
              <div className="flex items-start">
                <FaRegCheckCircle className="text-green-600 text-lg mt-1 mr-3 flex-shrink-0" />
                <div>
                  <strong>Step 5: Start Investing</strong>
                  <p className="mt-1">
                    You can invest via:
                  </p>
                  <ul className="list-disc list-inside mt-2 pl-5 space-y-1">
                    <li>Lumpsum Investment</li>
                    <li>SIP (Systematic Investment Plan)</li>
                    <li>SWP (Systematic Withdrawal Plan)</li>
                    <li>STP (Systematic Transfer Plan)</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Step 6 */}
            <li>
              <div className="flex items-start">
                <FaRegCheckCircle className="text-green-600 text-lg mt-1 mr-3 flex-shrink-0" />
                <div>
                  <strong>Step 6: Repatriate Your Funds</strong>
                  <p className="mt-1">
                    Redemption proceeds can be repatriated easily based on the type of account
(NRE/NRO) used for investment. TDS may apply based on fund category and holding
period.
                  </p>
                  <p className="mt-1">
                    TDS may apply based on fund category and holding period.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-700 mb-4">
            The above information is provided for basic guidance for investments in mutual funds
and is based on provisions of the Income-tax Act, 1961, as sought to be amended by
the Finance Bill, 2022. The tax implications may vary for each assessee based on the
details of his income. All rates and figures appearing are for illustrative purposes only.
Tax benefits are subject to change in tax laws. Contents of this note have been drawn
for informative purpose only and it is neither a complete disclosure of every material
fact of Income-tax Act, 1961 nor does it constitute tax or legal advice. The
AMC/Trustee/ Sponsor accept no liability whatsoever for any direct or consequential
loss arising from any information provided in this note. Investors are advised to
consult their tax advisor before taking any investment decision.

          </p>
        </div>

      </div>
    </div>
  );
};

export default NriCorner;
