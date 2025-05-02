import React from "react";
import styles from "./mutualfund.module.css";

const MythFacts = () => {
  return (
    <div>
      <div>
        <div>
          <section className="container mx-auto">
            <div className="flex flex-wrap p-2 md:p-6">
              <div className="w-full py-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-full">
                    {/* <h2 className="font-bold opacity-70 w-max mx-auto mb-5 text-2xl font-londrina-outline">
                      No Mutual Funds
                    </h2> */}
                    <h2 className="text-3xl font-bold uppercase">
                      Know Mutual Funds
                    </h2>
                  </div>
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="flex items-center justify-between max-w-[800px] px-6 m:px-10 py-2 rounded-full shadow-[0_0_10px_0_#013FCD] mx-auto mb-[50px] relative">
                  <div className="md:px-5 py-2 text-center font-semibold text-2xl">
                    Myths
                  </div>

                  <span className="absolute left-0 right-0 mx-auto w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_#013FCD] p-2">
                    <img src="/favicon 3.ico" alt="" />
                  </span>

                  <div className="md:px-5 py-2 text-center font-semibold text-2xl">
                    Facts
                  </div>
                </div>

                <table className={styles.table}>
      <tbody className="flex flex-col">
        <tr className={styles.tr}>
          <th className={styles.th}>
            <div className={`${styles.card}`}>
            <img src="/mf-adda/cancel (1).png" alt="cancelicon" className="w-16 h-16" />
            One needs a large sum to invest in mutual funds
            </div>
          </th>
          <td className={`${styles.td} ${styles.right}`}>
            <div className={styles.card}>
            <img src="/mf-adda/comment (3).png" alt="cancelicon" className="w-16 h-16" />
              <p>
              "A prevalent myth is that a substantial amount of capital is required to begin investing. However, this is not the case; one can start with a modest sum,” individuals can invest in mutual funds with as little as Rs 500 by signing up with any of the new-age online platforms.”
              </p>
            </div>
          </td>
        </tr>
        <tr className={styles.tr}>
          <th className={styles.th}>
            <div className={`${styles.card}`}>
            <img src="/mf-adda/cancel (1).png" alt="cancelicon" className="w-16 h-16" />
            One needs to be an expert in equities to invest in mutual funds
            </div>
          </th>
          <td className={`${styles.td} ${styles.right}`}>
            <div className={styles.card}>
            <img src="/mf-adda/comment (3).png" alt="cancelicon" className="w-16 h-16" />
              <p>
              "One doesn’t have to be an expert in equities to be able to make the most of investing in mutual funds.

Mutual funds are managed by expert fund managers who make decisions based on the mandate of the fund, market movement, and their expertise all to maximise returns for their investors.”
              </p>
            </div>
          </td>
        </tr>
        <tr className={styles.tr}>
          <th className={styles.th}>
            <div className={`${styles.card}`}>
            <img src="/mf-adda/cancel (1).png" alt="cancelicon" className="w-16 h-16" />
            One should only invest in mutual funds for the long term
            </div>
          </th>
          <td className={`${styles.td} ${styles.right}`}>
            <div className={styles.card}>
            <img src="/mf-adda/comment (3).png" alt="cancelicon" className="w-16 h-16" />
              <p>
              "There are several mutual funds available in the market designed with all sorts of timeframes in mind.  A mutual fund can be used to for long as well as short terms —it all depends on the investor’s goals, say experts.”
              </p>
            </div>
          </td>
        </tr>
        {/* Repeat other rows similarly... */}
      </tbody>
    </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MythFacts;
