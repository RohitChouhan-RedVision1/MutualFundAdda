'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sampleVideos = [
  {
    title: 'Investor Education - SIP Benefits',
    videoUrl: 'https://www.youtube.com/watch?v=vU1l1TB7GzI',
    embedUrl: 'vU1l1TB7GzI?si=9rhel-43TLzl0Gb3',
  },
  {
    title: 'How Mutual Funds Work',
    videoUrl: 'https://www.youtube.com/watch?v=abc123',
    embedUrl: 'abc123',
  },
  {
    title: 'What is SIP?',
    videoUrl: 'https://www.youtube.com/watch?v=xyz456',
    embedUrl: 'xyz456',
  },
];

const VideoSlider = () => {
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
    <div className="main_section bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold uppercase">Recent Videos</h2>
      </div>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {sampleVideos.map((video, index) => (
            <div key={index} className="px-3">
              <div className="w-full h-64">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedUrl}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
