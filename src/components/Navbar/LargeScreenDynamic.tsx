"use client";

import { navItems, NavItemType } from "./navItems";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const NavItem = ({ item }: { item: NavItemType }) => {
    const pathname = usePathname();

    return (
        <Link
            href={item.target}
            className={cn("py-3 select-none", {
                "bg-primary px-5 rounded-none": item.specialStyling,
            })}
        >
            <p
                className={cn(
                    "capitalize text-xs text-black hover:text-black transition-all duration-300",
                    {
                        "text-primary":
                            pathname === item.target && !item.specialStyling,
                        "text-white": item.specialStyling
                    }
                )}
            >
                {item.text}
            </p>
        </Link>
    );
};

export default function LargeScreenDynamic() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            // calculation for a progress bar
            // const calcHeight =
            //     document.documentElement.scrollHeight -
            //     document.documentElement.clientHeight;
            // const scrollValue = Math.round((scrolled * 100) / calcHeight);

            // setProgress(scrollValue);

            if (scrolled > 400) {
                setVisible(true);
            } else if (scrolled <= 400) {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible, { passive: true });

        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <div
            className={cn(
                "fixed z-50 bg-white top-0 hidden lg:flex w-full justify-center text-black transition-all duration-300 shadow-gray-200 drop-shadow-sm",{
                    "-translate-y-11": !visible,
                    "translate-y-0": visible,
                }
            )}
        >
            {" "}
            <MaxWidthWrapper className="flex flex-row justify-between items-center w-full">
                <div className="font-black font-Poppins"><Link href='/'>Appetizer</Link></div>
                <div className="flex gap-x-8">
                    {navItems.map((item) => (
                        <NavItem key={item.text} item={item} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
