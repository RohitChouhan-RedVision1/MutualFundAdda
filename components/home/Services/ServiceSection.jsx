'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceSection = ({ services }) => {
    console.log(services)
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };

  return (
    <section className=" main_section bg-[#EFF1F9]">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-12">
          {/* Left Content */}
          <div className='w-full lg:w-1/2'>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">Our services</h2>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)] mt-4">
              We help to make your Wealth
            </h2>
            <p className="text-[16px] md:text-[18px] text-justify text-gray-600 mt-4">
              We Believe in Your Financial Goals - Bringing Dreams to Life, Every Step of the Way.
            </p>
            <Link href="/login" target="_blank">
              <Button className="mt-8 bg-[var(--primary)]  text-white px-6 py-3 text-lg font-semibold rounded-md shadow">
                Invest Now
              </Button>
            </Link>
          </div>

          {/* Right Content: Slider with Arrows */}
          <div className="w-full relative lg:w-1/2">
            {/* Prev Arrow */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-[-12px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow w-10 h-10 flex items-center justify-center z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-[-12px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow w-10 h-10 flex items-center justify-center z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Slider */}
            <Slider {...settings} ref={sliderRef} className="lg:px-6">
              {services.map((card, index) => (
                <div key={index} className="px-2">
                  <Link href={`/services/${card.link}`}>
                    <div className="bg-white p-6  rounded-xl shadow hover:shadow-lg transition duration-300 text-center hover:scale-105 flex flex-col justify-between h-[300px]">
                      <div>
                        <div className="flex justify-center mb-4">
                          <Image
                            src={`/mf-adda/${card.imageSrc}`}
                            alt={card.name}
                            width={80}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                        <h5 className="text-xl font-semibold  mb-4">{card.name}</h5>
                        <p className="text-[16px] md:text-[18px] text-justify text-gray-600 line-clamp-3 mb-4">{card.description}</p>
                      </div>
                      <p className="text-[var(--primary)] font-medium mt-auto">Explore More</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
