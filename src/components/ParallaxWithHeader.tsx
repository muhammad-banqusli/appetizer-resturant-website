"use client";

import { DynamicBreadcrumb } from "@/components";
import { ChevronRight } from "lucide-react";

import { motion, useTransform, useScroll } from "framer-motion";

const ParallaxWithHeader = ({ title }: { title: string }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, 200]); // Adjust this to control the parallax effect
    return (
        <div className="h-80 w-full overflow-hidden relative ">
            <motion.div
                className="absolute inset-0 bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url(/images/bg_3.jpg)",
                    y, // Apply the scroll effect to the background container
                    backgroundPosition: "center top", // Start background from the top
                    scale: 1.2,
                }}
            />
            <div className="w-full h-full bg-black opacity-50" />
            <div className="w-full absolute bottom-0 flex flex-col items-center animate-fadeInUp">
                <h1 className="font-black text-white text-center w-full text-[50px] mb-2 font-Poppins">
                    {title}
                </h1>
                <DynamicBreadcrumb
                    homeElement={"Home"}
                    separator={<ChevronRight className="size-3"/>}
                    containerClasses="flex text-white text-[13px] flex items-center uppercase font-Poppins mb-5 tracking-[1px]"
                    capitalizeLinks={true}
                />
            </div>
        </div>
    );
};
export default ParallaxWithHeader;
