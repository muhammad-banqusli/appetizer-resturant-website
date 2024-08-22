import { Divide } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { menu } from "./menu";
import MenuItem from "./MenuItem";

const OurMenu = () => {
    return (
        <section className="relative w-full pt-24">
            <div className="w-full h-full z-10 flex flex-col items-center justify-center">
                <MaxWidthWrapper className="h-auto flex flex-col items-center">
                    <div className="text-center relative mb-12">
                        <h2 className="mb-6 text-[50px] text-[#333333] font-Poppins font-black">
                            Our Menu
                        </h2>
                        <span className="font-Fajardose text-[100px] text-primary opacity-100 absolute -top-[68px] right-0 left-0 -z-10">
                            Specialities
                        </span>
                    </div>
                </MaxWidthWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full place-content-center px-4">
                    {menu.map((category) => (
                        <div
                            key={category.id}
                            className="w-full px-3 flex items-center flex-col mb-10"
                        >
                            <h3 className="text-[30px] font-Poppins text-[#333333] mb-6 capitalize font-black text-center leading-normal">
                                {category.title}
                            </h3>
                            {category.menuItems.map((item) => (
                                <MenuItem key={item.id} item={item} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default OurMenu;
