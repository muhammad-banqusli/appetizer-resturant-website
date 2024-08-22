"use client";

import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { NavItemType, navItems } from "./navItems";
import { cn } from "@/lib/utils";
import useClickOutside from "@/hooks/useClickOutside";

const NavItem = ({ item }: { item: NavItemType }) => {
    const pathname = usePathname();

    return (
        <Link
            href={item.target}
            className={cn("py-4 my-1 px-2 select-none w-full block", {
                "bg-primary px-4 rounded-sm": item.specialStyling,
            })}
        >
            <p
                className={cn(
                    "capitalize text-xs text-white opacity-70 hover:text-white transition-all duration-300 select-none",
                    {
                        "text-white opacity-100":
                            pathname === item.target || item.specialStyling,
                    }
                )}
            >
                {item.text}
            </p>
        </Link>
    );
};
const DynamicNavItem = ({ item }: { item: NavItemType }) => {
    const pathname = usePathname();

    return (
        <Link
            href={item.target}
            className={cn("py-2.5 my-1 px-2 select-none w-full block", {
                "bg-primary px-4 text-white": item.specialStyling,
            })}
        >
            <p
                className={cn(
                    "capitalize text-xs hover:text-white transition-all duration-300 select-none",
                    {
                        "text-primary opacity-100":
                            pathname === item.target && !item.specialStyling,
                    }
                )}
            >
                {item.text}
            </p>
        </Link>
    );
};

const Static = ({
    navbarOpen,
    toggleMenu,
    closeMenu,
}: {
    navbarOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}) => {
    const navRef = useRef(null);
    useClickOutside(navRef, () => closeMenu(), "toggle-sidebar-button");
    return (
        <div
            className="bg-black top-0 text-white lg:hidden w-full py-4 z-[9999999]"
            ref={navRef}
        >
            <MaxWidthWrapper className="h-fit">
                <div className="flex w-full justify-between items-center">
                    <div className="font-black font-Poppins text-[20px]">
                        <Link href="/">Appetizer</Link>
                    </div>
                    <button
                        id="toggle-sidebar-button"
                        className="bg-transparent text-white opacity-50 m-0 text-sm"
                        onClick={toggleMenu}
                    >
                        ☰ MENU
                    </button>
                </div>
                <div
                    className={`transition-all duration-1000 ${
                        navbarOpen ? "max-h-screen" : "max-h-0"
                    } overflow-hidden`}
                >
                    {navItems.map((item) => (
                        <NavItem key={item.text} item={item} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

const Dynamic = ({
    navbarOpen,
    toggleMenu,
    closeMenu,
}: {
    navbarOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}) => {
    const [visible, setVisible] = useState(false);
    const navRef = useRef(null);
    useClickOutside(navRef, () => closeMenu(), "toggle-sidebar-button");

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > 500) {
                setVisible(true);
            } else if (scrolled <= 500) {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible, { passive: true });

        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);
    return (
        <div
            className={cn(
                "bg-white fixed z-50 top-0 text-black lg:hidden w-full  shadow-gray-200 drop-shadow-md transition-all",
                {
                    "-translate-y-20": !visible,
                    "translate-y-0": visible,
                }
            )}
            ref={navRef}
        >
            <MaxWidthWrapper className={cn("py-4 h-fit")}>
                <div className="flex w-full justify-between items-center">
                    <div className="font-black font-Poppins text-[20px]">
                        <Link href="/">Appetizer</Link>
                    </div>
                    <button
                        id="toggle-sidebar-button"
                        className="bg-transparent text-black opacity-50 m-0 text-sm"
                        onClick={toggleMenu}
                    >
                        ☰ MENU
                    </button>
                </div>
                <div
                    className={`transition-all duration-1000 ${
                        navbarOpen ? "max-h-screen" : "max-h-0"
                    } ${!visible ? "hidden" : ""} overflow-hidden`}
                >
                    {navItems.map((item) => (
                        <DynamicNavItem key={item.text} item={item} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default function SmallScreen() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleMenu = () => setNavbarOpen((prev) => !prev);
    const closeMenu = () => setNavbarOpen(false);
    return (
        <>
            <Static
                navbarOpen={navbarOpen}
                toggleMenu={toggleMenu}
                closeMenu={closeMenu}
            />
            <Dynamic
                navbarOpen={navbarOpen}
                toggleMenu={toggleMenu}
                closeMenu={closeMenu}
            />
        </>
    );
}
