"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const SubscribCard = () => {
    const images = [
        "/AMC NEW LOGOS/all/mf1.png",
        "/AMC NEW LOGOS/all/axis-mf.png",
        "/AMC NEW LOGOS/all/1.png",
        "/AMC NEW LOGOS/all/mf4.png",
        "/AMC NEW LOGOS/all/28.png",
        "/AMC NEW LOGOS/all/mf25.png",
        "/AMC NEW LOGOS/all/mf8.png",
        "/AMC NEW LOGOS/all/mf10.png",
        "/AMC NEW LOGOS/all/edilweiss.webp",
        "/AMC NEW LOGOS/all/mf12.png",
        "/AMC NEW LOGOS/all/mf14.png",
        "/AMC NEW LOGOS/all/samco-mf.webp",
        "/AMC NEW LOGOS/all/730005348.webp",
        "/AMC NEW LOGOS/all/468005205.webp",
        "/AMC NEW LOGOS/all/299006530.webp",
        "/AMC NEW LOGOS/all/mf19.png",
        "/AMC NEW LOGOS/all/mf33.png",
        "/AMC NEW LOGOS/all/unifi.png",
        "/AMC NEW LOGOS/all/153000901.webp",
        "/AMC NEW LOGOS/all/HSBC.png",

    ];

  return (
    <div className="container main_section mx-auto text-center">
      <motion.h2
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: false, amount: 0.2 }}
        // variants={fadeInVariants}
        // custom={1}
        className="text-2xl md:text-3xl font-bold uppercase mb-4"
      >
        Our Esteemed Partners
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
        custom={2}
        className="em_bar mx-auto"
      >
        <div className="em_bar_bg" />
      </motion.div>

      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="mt-6"
      >
        {images.map((src, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <Image
              src={src}
              alt={`AMC Logo ${index + 1}`}
              width={200}
              height={100}
              className="opacity-50 hover:opacity-100 transition ease-in-out duration-150"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SubscribCard;
