export interface Blog {
    id: number;
    date: Date;
    title: string;
    user: string;
    commentsCount: number;
    imgSrc: string;
}

export const blogs: Blog[] = [
    {
        id: 1,
        date: new Date(2023, 6, 25),
        title: "Tast the delicious foods in Asia",
        user: "Admin",
        commentsCount: 3,
        imgSrc: "/images/image_1.jpg",
    },
    {
        id: 2,
        date: new Date(2023, 6, 25),
        title: "Tast the delicious foods in Asia",
        user: "Admin",
        commentsCount: 3,
        imgSrc: "/images/image_2.jpg",
    },
    {
        id: 3,
        date: new Date(2023, 6, 25),
        title: "Tast the delicious foods in Asia",
        user: "Admin",
        commentsCount: 3,
        imgSrc: "/images/image_3.jpg",
    },
    {
        id: 4,
        date: new Date(2023, 6, 25),
        title: "Tast the delicious foods in Asia",
        user: "Admin",
        commentsCount: 3,
        imgSrc: "/images/image_4.jpg",
    },
    {
        id: 5,
        date: new Date(2023, 6, 25),
        title: "Tast the delicious foods in Asia",
        user: "Admin",
        commentsCount: 3,
        imgSrc: "/images/bg_2.jpg",
    },
    {
        id: 6,
        date: new Date(2023, 6, 25),
        title: "Tast the delicious foods in Asia",
        user: "Admin",
        commentsCount: 3,
        imgSrc: "/images/dinner-1.jpg",
    },
];
