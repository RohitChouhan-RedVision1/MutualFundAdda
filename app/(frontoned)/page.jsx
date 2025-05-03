import BlogSlider from "@/components/home/blogs/blogs";
import Calculator from "@/components/home/calculator/calculator";
import Features from "@/components/home/features/features";
import { HeroSection } from "@/components/home/herosection/herosection";
import Howwework from "@/components/home/Howwework/howwework";
import MythFacts from "@/components/home/MythFacts/MythFacts";
import SubscribCard from "@/components/home/partners/partners";
import ServiceSection from "@/components/home/Services/ServiceSection";
import TestimonialsSlider from "@/components/home/testimonials/testimonials";
import ToolsSection from "@/components/home/toolssection/toolssection";
import VideoSlider from "@/components/home/Vidios/vidios";
import WhytoChooseus from "@/components/home/whytochooseus";
import SocialMediaSidebar from "@/components/socialMedia";
import { getBlogBySlug, getBlogs, getServiceData, getSiteData, getTestimonials, getVidios } from "@/lib/functions";

export default async function Page() {
  const services= await getServiceData()
  const sitedata = await getSiteData();
  const testimonial= await getTestimonials()
  const blogs =await getBlogs()
  const video =await getVidios()
  return (
    <div className="">
        <main className="overflow-x-hidden">
        <HeroSection/>
        <WhytoChooseus sitedata={sitedata}/>
        <Features />
        <ServiceSection services={services}/>
        <ToolsSection />
        <Calculator/>
        <Howwework/>
        <MythFacts/>
        <TestimonialsSlider testimonial={testimonial}/>
        <BlogSlider blogs={blogs}/>
        <VideoSlider video={video}/>
          <SubscribCard/>
          <SocialMediaSidebar sitedata={sitedata} />
        </main>
    </div>
  );
}