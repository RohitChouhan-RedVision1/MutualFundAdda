'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogSlider = ({ blogs }) => {
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
    <div className="main_section bg-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">OUR BLOGS</h2>
      </div>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-3 h-full">
              <Link href={`/blogs/${blog.slug}`} passHref>
                <div className="bg-white shadow-md rounded-md overflow-hidden min-h-[380px] h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300 mb-[10px]">
                  <Image
                    src={blog.image.url}
                    alt={blog.posttitle}
                    width={600}
                    height={300}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.posttitle}</h3>
                      <p className="text-gray-600 text-[16px]  line-clamp-2">{blog.description}</p>
                    </div>
                    <span className="text-[var(--primary)] text-md font-semibold mt-auto">Read More</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;
