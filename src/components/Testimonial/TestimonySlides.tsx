"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useScreenSize from "@/hooks/useScreenSize";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import { Testimony, testimonies } from "./testimonies";

import { Quotes } from "@/components";

// import required modules
import { Pagination } from "swiper/modules";

const TestimonyCard = ({ testimony }: { testimony: Testimony }) => {
    return (
        <div className="pb-16 text-[#666666] font-Poppins flex flex-col items-center justify-between active:cursor-grabbing">
            <div className="flex justify-center relative">
                <img
                    src={testimony.imgSrc}
                    alt="customer picture"
                    className="mb-6 size-24 rounded-full"
                />
                <div className=" bg-primary p-2 rounded-full overflow-auto bottom-4 absolute right-2 flex justify-center items-center">
                    <Quotes className="size-3 filter-[#fff] rotate-180 fill-white -translate-y-[1px]" />
                </div>
            </div>
            <div className="p-4 flex flex-col items-center gap-3 max-w-72">
                <p className="mb-6 text-[17px] text-justify md:text-center">
                    {testimony.text}
                </p>
                <p className="text-black text-[22px] text-center">
                    {testimony.name}
                </p>
                <span className="text-[12px] font-semibold text-center uppercase tracking-widest">
                    {testimony.position}
                </span>
            </div>
        </div>
    );
};

export default function TestimonySlides() {
    const screenSize = useScreenSize();
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={
                    screenSize.width > 1024 ? 3 : screenSize.width > 800 ? 2 : 1
                }
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className} bg-primary"></span>`;
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {testimonies.map((testimonie, index) => (
                    <SwiperSlide key={index}>
                        <TestimonyCard testimony={testimonie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
