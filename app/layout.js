import "./globals.css";
import { Poppins } from "next/font/google";
export const metadata = {
  title: {
    default: "Mutual Funds Adda",
    template: "%s - Mutual Funds Adda",
  },
  description: "Mutual Funds Adda helping them make informed decisions to achieve their financial goals with confidence",
  twitter: {
    card: "summary_large_image",
    site: "@mutualfundsadda", // Twitter handle of Alpha 72
  },
  author: "Mutual Funds Adda Team",
};


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","200","300","400","500", "600", "700","800","900"], // You can adjust the weights as needed
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
       {children}
      </body>
    </html>
  );
}
