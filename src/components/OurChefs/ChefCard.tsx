import { ChefInfo } from "./ourChefs";
import Link from "next/link";
import { Facebook, Instagram, XIcon } from "@/components";

const ChefCard = ({ chefInfo }: { chefInfo: ChefInfo }) => {
    return (
        <div className="px-3">
            {" "}
            <div className="flex flex-col items-start gap-y-6 max-w-[510px]">
                <img
                    src={chefInfo.imgSrc}
                    alt="chef photo"
                    className="h-64  w-full object-cover object-top rounded-sm"
                />

                <div className="">
                    <h3 className="text-[18px] font-semibold font-Poppins text-[#333333]">
                        {chefInfo.name}
                    </h3>
                    <span className="text-black opacity-30 text-[14px] mb-2">
                        {chefInfo.position}
                    </span>
                    <p className="text-[#666666] text-[17px] flex-wrap mb-4">
                        {chefInfo.text}
                    </p>
                    <div className="mb-4 flex gap-2">
                        <Link href={chefInfo.xLink}>
                            <XIcon className="w-[17px] fill-primary" />
                        </Link>
                        <Link href={chefInfo.xLink}>
                            <Facebook className="w-[17px] fill-primary" />
                        </Link>
                        <Link href={chefInfo.xLink}>
                            <Instagram className="w-[17px] fill-primary" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChefCard;
