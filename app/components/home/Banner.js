"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSliders.css";

// Import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // React Icons for navigation
import BannerImage1 from "@/public/elements/BannerImage (1).jpeg";
import BannerImage3 from "@/public/elements/BannerImage (3).jpeg";

export default function Banner() {
  const BannerImages = [
    {
      img: BannerImage1,
    },
    {
      img: BannerImage3,
    },
  ];

  return (
    <section className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev", // Link to custom prev button
          nextEl: ".custom-next", // Link to custom next button
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {BannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              // className="w-full h-fit" // This ensures the image takes full width and adjusts the height automatically
              height={400}
              width={600}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="banner_image"
              src={image.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev swiper-button-prev flex items-center justify-center rounded-full bg-blue-600 text-white p-3 absolute bottom-10 left-5 cursor-pointer z-10">
        <FiChevronLeft size={24} />
      </div>
      <div className="custom-next swiper-button-next flex items-center justify-center rounded-full bg-blue-600 text-white p-3 absolute bottom-10 right-5 cursor-pointer z-10">
        <FiChevronRight size={24} />
      </div>
    </section>
  );
}
