'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blogs = [
  {
    image: '/blog1.jpg',
    title: 'Chinese Bamboo Tree–Investment Concept',
    excerpt: 'Chinese Bamboo Tree–Investment Concept',
    link: '#',
  },
  {
    image: '/blog2.jpg',
    title: 'Growth v/s Value Investing: Which One to Choose?',
    excerpt: 'Investors have a wide range of options to choose from when it comes to making investments...',
    link: '#',
  },
  {
    image: '/blog3.jpg',
    title: 'Top 3 Benefits of SIP in Mutual Funds',
    excerpt: 'Using a structured investment plan like SIP to invest in mutual funds has become quite popular...',
    link: '#',
  },
  {
    image: '/blog4.jpg',
    title: '5 Tips for Financial Planning for Women',
    excerpt: 'Women are known to be multi-taskers. They are better at switching between tasks...',
    link: '#',
  },
];

const BlogSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="main_section bg-white">
       <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase">OUR BLOGS</h2>
          </div>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-3">
              <div className="bg-white shadow-md rounded-md overflow-hidden h-full flex flex-col">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={300}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">{blog.title}</h3>
                  <p className="text-gray-500 text-sm flex-grow">{blog.excerpt}</p>
                  <a href={blog.link} className="text-purple-600 text-sm font-semibold mt-2">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;
