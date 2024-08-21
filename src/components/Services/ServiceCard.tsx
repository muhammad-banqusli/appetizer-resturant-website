import { ServiceInfo } from "./services";

const ServiceCard = ({ serviceInfo }: { serviceInfo: ServiceInfo }) => {
    return (
        <div className="px-3 flex w-full flex-col items-center">
            <div className="size-[130px] bg-black rounded-full flex justify-center items-center">
                <serviceInfo.icon className="text-white size-11 stroke-[1.3px]" />
            </div>
            <div className="mt-4 p-2 flex flex-col items-center text-center">
                <h3 className="text-[24px] mb-4 font-Poppins text-[#333333] font-medium">
                    {serviceInfo.title}
                </h3>
                <p className="mb-4 text-[17px] text-[#666666] text-center leading-loose">
                    {serviceInfo.description}
                </p>
            </div>
        </div>
    );
};
export default ServiceCard;
