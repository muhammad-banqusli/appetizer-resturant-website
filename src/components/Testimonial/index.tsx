import MaxWidthWrapper from "../MaxWidthWrapper";
import TestimonySlides from "./TestimonySlides";

const Testimonial = () => {
    return (
        <section className="calc-mobile-height md:calc-pc-height relative w-full">
            <div className="w-full h-full absolute bg-white bg-opacity-80 z-10 flex items-center justify-center">
                <MaxWidthWrapper className="h-auto m-4">
                    <div className="text-center relative">
                        <h2 className="mb-4 text-[50px] text-[#333333] font-Poppins font-black">
                            Happy Customers
                        </h2>
                        <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                            Testimony
                        </span>
                    </div>
                    <TestimonySlides />
                </MaxWidthWrapper>
            </div>
            <img
                className="w-screen h-auto top-0 right-0 left-0 object-cover calc-mobile-height md:calc-pc-height"
                src="/images/bg_5.jpg"
            />
        </section>
    );
};
export default Testimonial;
