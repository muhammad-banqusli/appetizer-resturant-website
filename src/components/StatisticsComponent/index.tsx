"use client";

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { statistics } from "./statistics";
import CountUp from "./CountUp";
import MaxWidthWrapper from "../MaxWidthWrapper";

const StatisticComponent = () => {
    return (
        <section className="w-full relative">
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        {
                            image: "/images/bg_4.jpg",
                            speed: -40,
                        },
                    ]}
                    className="h-[730px] md:h-64"
                >
                    <MaxWidthWrapper className="z-10 h-full absolute grid grid-cols-1 md:grid-cols-4 w-full right-0 left-0 top-0 bottom-0 m-auto">
                        {statistics.map((statistic) => (
                            <div
                                key={statistic.id}
                                className="flex flex-col items-center justify-center"
                            >
                                <div className="bg-white flex flex-col items-center justify-center py-1 px-3 bg-opacity-30 ">
                                    <CountUp
                                        from={0}
                                        to={statistic.number}
                                        separator=","
                                        duration={1}
                                        className="text-[40px] font-medium font-Poppins"
                                    />
                                    <span className="text-[#222222] text-center">
                                        {statistic.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </MaxWidthWrapper>
                </ParallaxBanner>
            </ParallaxProvider>
        </section>
    );
};
export default StatisticComponent;
