import MaxWidthWrapper from "../MaxWidthWrapper";
import ServiceCard from "./ServiceCard";
import { services } from "./services";

const Services = () => {
    return (
        <section className="py-24">
            <MaxWidthWrapper className="min-w-full">
                <div className="text-center relative">
                    <h2 className="mb-4 text-[50px] text-[#333333] font-Poppins font-black">
                        Catering Services
                    </h2>
                    <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                        Services
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 min-w-full">
                    {services.map((service) => (
                        <ServiceCard serviceInfo={service} key={service.id} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};
export default Services;
