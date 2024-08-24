"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
    homeElement: ReactNode;
    separator: ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
};

const DynamicBreadcrumb = ({
    homeElement,
    separator,
    containerClasses,
    listClasses,
    activeClasses,
    capitalizeLinks,
}: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}>
                    <Link href={"/"} className="hover:opacity-85">{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                    let itemClasses =
                        paths === href
                            ? `${listClasses} ${activeClasses}`
                            : listClasses;
                    let itemLink = capitalizeLinks
                        ? link[0].toUpperCase() + link.slice(1, link.length)
                        : link;
                    if (index === pathNames.length -1)
                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses}>{itemLink}</li>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        );
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses}>
                                <Link href={href} className="hover:opacity-85">{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default DynamicBreadcrumb;
