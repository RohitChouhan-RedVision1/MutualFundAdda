// components/TestimonialsSlider.jsx
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priyanka Choudhary",
    message:
      "Impressed with their financial expertise. They’ve made a significant difference in my investments, and their strategies have maximized my returns.",
    image: "/user.png", // Replace with actual path or use a default avatar
  },
  {
    name: "Ashmeet",
    message:
      "Incredible support and guidance – they’ve helped me achieve financial stability and growth quickly. I’m a highly satisfied client.",
    image: "/user.png",
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = ({testimonial}) => {
  function createMarkup(item) {
    return { __html: item };
  }
  console.log(testimonial)
  const sliderRef = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="main_section bg-[#f3f6fa]">
      <div className="text-center">
            <h2 className="text-3xl font-bold uppercase">OUR TESTIMONIALS</h2>
          </div>
      <div className="container mx-auto px-4 lg:px-15 relative">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-5 top-1/2 -translate-y-1/2   w-10 h-10 flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-10 h-10 text-gray-700" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
        >
          <ChevronRight className="w-10 h-10 text-gray-700" />
        </button>
        <Slider {...settings} ref={sliderRef}>
          {testimonial.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="">
                <div className="relative text-5xl text-[#791c1c] top-[40px] left-10">
                  <img src="/mf-adda/arrow-4.png" alt="arrow.png" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-10 m-4 h-[350px] md:h-[300px] mt-5">
                {testimonial?.content && (
                    <div
                      dangerouslySetInnerHTML={createMarkup(testimonial?.content)}
                      className="italic [display:-webkit-box] text-gray-600 text-sm  [-webkit-line-clamp:5] [-webkit-box-orient:vertical] overflow-hidden mb-4"
                    />
                  )}
                  <div className="flex  items-center gap-3 mt-4">
                    <Image
                      src={testimonial?.image?.url}
                      alt={testimonial?.author}
                      width={80}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                    <span className="font-semibold text-xl">
                      {testimonial?.author}
                    </span>
                    <span className="text-[16px] text-gray-600">
                      {testimonial?.designation}
                    </span>
                    </div>
                  </div>
                  <div className="absolute text-5xl text-[#791c1c] bottom-2 right-4 rotate-180">
                    “
                  </div>
                </div>
                {/* <div className="relative text-5xl text-[#791c1c] bottom-[40px] right-30 ">
                  <img src="/mf-adda/arrow-1.png" alt="arrow.png" />
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
