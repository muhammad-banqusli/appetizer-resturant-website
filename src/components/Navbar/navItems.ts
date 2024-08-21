export interface NavItemType {
    text: string;
    target: string;
    specialStyling: boolean;
}

export const navItems: NavItemType[] = [
    {
        text: "home",
        target:"/",
        specialStyling: false,
    },
    {
        text: "about",
        target:"/about",
        specialStyling: false,
    },
    {
        text: "Menu",
        target:"/menu",
        specialStyling: false,
    },
    {
        text: "blog",
        target:"/blog",
        specialStyling: false,
    },
    {
        text: "contact",
        target:"/contact",
        specialStyling: false,
    },
    {
        text: "book a table",
        target:"/booking",
        specialStyling: true,
    },
]