import MaxWidthWrapper from "../MaxWidthWrapper";
import ChefCard from "./ChefCard";
import { ourChefs } from "./ourChefs";

const OurChefs = () => {
    return (
        <section className="calc-mobile-height md:calc-pc-height relative w-full pt-24">
            <div className="w-full h-full z-10 flex items-center justify-center">
                <MaxWidthWrapper className="h-auto flex flex-col items-center">
                <div className="text-center relative mb-12">
                        <h2 className="mb-6 text-[50px] text-[#333333] font-Poppins font-black">
                            Our Master Chefs
                        </h2>
                        <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                            Chef
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {ourChefs.map(chef => <ChefCard chefInfo={chef} key={chef.id} />)}
                    </div>
                </MaxWidthWrapper>
            </div>
        </section>
    );
};
export default OurChefs;
