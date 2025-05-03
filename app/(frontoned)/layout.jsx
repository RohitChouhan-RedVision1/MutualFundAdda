import { Footer } from "@/components/footer/footer";
import LoginPage from "@/components/loginhome/loginhome";
import Navbar from "@/components/navbar/navbar";
import Tickers from "@/components/tickers";
import Topbar from "@/components/topbar/page";
import { Skeleton } from "@/components/ui/skeleton";
import WebPopup from "@/components/webpopup";
import { getArn, getServiceData, getSiteData } from "@/lib/functions";
import { Suspense } from "react";

export default async function Layout({ children }) {
  // const sitedata = await getSiteData();
  const services = await getServiceData();
  const arn=await getArn();
  // console.log(arn)
  return (
    <div className="">
      <Suspense fallback={<Skeleton />}>
        <Tickers />
      </Suspense>
      <div className="hidden lg:block">
        {/* <Topbar sitedata={sitedata} /> */}
      </div>
      <Navbar servicedata={services}/>
      {children}

      {/* <Footer sitedata={sitedata} servicedata={services} arn={arn[0]}/> */}

      <WebPopup />
    </div>
  );
}
