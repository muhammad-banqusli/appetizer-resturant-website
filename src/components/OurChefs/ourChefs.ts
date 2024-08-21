import internal from "stream";

export interface ChefInfo {
    name: string;
    position: string;
    text: string;
    xLink: string;
    facebookLink: string;
    instagramLink: string;
imgSrc: string;
id: number
}

export const ourChefs: ChefInfo[] = [
    {
        name: "John Smooth",
        position: "Restaurant Owner",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        xLink: "#",
        facebookLink: "#",
        instagramLink: "#",
        imgSrc: '/images/chef-4.jpg',
        id: 1
    },
    {
        name: "Rebeca Welson",
        position: "Head Chef",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        xLink: "#",
        facebookLink: "#",
        instagramLink: "#",
        imgSrc: '/images/chef-2.jpg',
        id: 2
    },
    {
        name: "Karl Branyt",
        position: "Chef",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        xLink: "#",
        facebookLink: "#",
        instagramLink: "#",
        imgSrc: '/images/chef-3.jpg',
        id: 3
    },
    {
        name: "Luke Simon",
        position: "Chef",
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        xLink: "#",
        facebookLink: "#",
        instagramLink: "#",
        imgSrc: '/images/chef-1.jpg',
        id: 4
    },
];
