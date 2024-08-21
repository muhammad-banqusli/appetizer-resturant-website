import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import VideoButton from "./VideoButton";

const About = () => {
    return (
        <section className="pt-24">
            <div className="w-full h-full z-10 flex items-center justify-center">
                <MaxWidthWrapper className="h-auto flex flex-col items-center relative">
                    <div className="text-center relative mb-12">
                        <h2 className="mb-6 text-[50px] text-[#333333] font-Poppins font-black">
                            Appetizer Restuarant
                        </h2>
                        <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                            About
                        </span>
                        <p className="text-[17px] text-[#666666]">
                            On her way she met a copy. The copy warned the
                            Little Blind Text, that where it came from it would
                            have been rewritten a thousand times and everything
                            that was left from its origin would be the word
                            "and" and the Little Blind Text should turn around
                            and return to its own, safe country. A small river
                            named Duden flows by their place and supplies it
                            with the necessary regelialia. It is a paradisematic
                            country, in which roasted parts of sentences fly
                            into your mouth.
                        </p>
                    </div>
                    <VideoButton />
                </MaxWidthWrapper>
            </div>
        </section>
    );
};
export default About;
