"use client";

import { navItems, NavItemType } from "./navItems";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../MaxWidthWrapper";

const NavItem = ({ item }: { item: NavItemType }) => {
    const pathname = usePathname();

    return (
        <Link
            href={item.target}
            className={cn("py-4 my-2 px-2 select-none", {
                "bg-primary px-4 rounded-sm": item.specialStyling,
            })}
        >
            <p
                className={cn(
                    "capitalize text-xs text-white hover:text-white transition-all duration-300 select-none",
                    {
                        "text-primary":
                            pathname === item.target && !item.specialStyling,
                    }
                )}
            >
                {item.text}
            </p>
        </Link>
    );
};

export default function LargeScreenStatic() {
    return (
        <MaxWidthWrapper className="absolute top-0 z-10 right-0 left-0 h-fit">
            <div className="hidden lg:flex flex-row justify-between items-center w-full text-white">

                <div className="font-black font-Poppins"><Link href='/'>Appetizer</Link></div>
                <div className="flex gap-x-6">
                    {navItems.map((item) => (
                        <NavItem item={item} key={item.text}/>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
