"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MaxWidthWrapper from "../MaxWidthWrapper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

export interface SliderItemType {
    text: string;
    imgSrc: string;
    imgAlt: string;
}

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { sliderItems } from "./sliderItems";
import { Button } from "../ui/button";

const SwiperItem = ({
    item,
    isActive,
}: {
    item: SliderItemType;
    isActive: boolean;
}) => {
    return (
        <>
            <div
                className={`pointer-events-none w-full h-full absolute bg-white ${
                    isActive ? "opacity-0" : "opacity-50"
                } transition-all duration-700 z-50`}
            />
            <div className="w-full h-full absolute bg-black opacity-50 z-10" />
            <div className="w-full h-full flex justify-center">
                <MaxWidthWrapper className="h-full w-full absolute z-10 flex flex-col items-center justify-center">
                    <h1
                        className={`text-white font-Monoton font-normal text-center line-h tracking-[2px] uppercase text-[30px] md:text-[5vw] ${
                            isActive ? "translate-y-0" : "translate-y-8"
                        } transition-all duration-1000`}
                    >
                        {item.text}
                    </h1>
                    <div className="w-full flex gap-1 justify-center mt-6 flex-col xs:flex-row">
                        <Button className="bg-primary hover:bg-transparent border border-transparent hover:border-primary hover:text-primary transition-all px-4 py-7 text-base leading-6 rounded-[2px] duration-300">
                            Order Now
                        </Button>
                        <Button className="bg-transparent hover:bg-[#212529] border border-white border-opacity-80 hover:text-primary transition-all px-4 py-7 text-base leading-6 rounded-[2px] duration-300">
                            View Menu
                        </Button>
                    </div>
                </MaxWidthWrapper>
            </div>

            <img
                className={`${
                    isActive ? "scale-105" : "scale-100"
                } transition-all duration-700 h-screen w-screen object-cover`}
                src={item.imgSrc}
                alt="restaurant"
            />
        </>
    );
};

export default function ImageSlider() {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination, Autoplay, Navigation]}
                className="mySwiper w-full max-h-screen"
                autoplay={{
                    delay: 3000, // Time between slides in milliseconds
                    disableOnInteraction: false, // Autoplay won't stop after user interaction
                }}
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <SwiperItem isActive={isActive} item={item} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
