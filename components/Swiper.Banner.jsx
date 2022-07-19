import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const SwiperBanners = ({
  slidePerView,
  navigation = false,
  pagination = false,
}) => {
  return (
    <div className="w-full h-full  ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={navigation}
        autoplay={{ delay: 5000 }}
        slidesPerView={slidePerView}
        spaceBetween={30}
        className="w-full h-full p-5"
        loop={true}
        pagination={pagination}
      >
        <SwiperSlide>
          <Link href={"/about"}>
            <div className="w-full h-full bg-blue-500 ">
              <img
                src="https://images.pexels.com/photos/7867915/pexels-photo-7867915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-green-500 ">
            <img
              src="https://images.pexels.com/photos/7867915/pexels-photo-7867915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-yellow-500 ">
            <img
              src="https://images.pexels.com/photos/7867915/pexels-photo-7867915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanners;
