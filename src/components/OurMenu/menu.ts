export interface MenuItem {
    id: number;
    image: string;
    gredients: string[];
    price: number;
    categoryId: number;
    name: string;
}

export interface MenuCategory {
    id: number;
    title: string;
}

const categories: MenuCategory[] = [
    { id: 1, title: "breakfast" },
    { id: 2, title: "lunch" },
    { id: 3, title: "dinner" },
    { id: 4, title: "desserts" },
    { id: 5, title: "drinks" },
    { id: 6, title: "drinks" },
];

const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Grilled Beef with Potatoes",
        image: "/images/breakfast-1.jpg",
        price: 29,
        categoryId: 1,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 2,
        name: "Grilled Beef with Potatoes",
        image: "/images/breakfast-2.jpg",
        price: 29,
        categoryId: 1,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 3,
        name: "Grilled Beef with Potatoes",
        image: "/images/breakfast-3.jpg",
        price: 29,
        categoryId: 1,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 4,
        name: "Grilled Beef with Potatoes",
        image: "/images/lunch-1.jpg",
        price: 29,
        categoryId: 2,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 5,
        name: "Grilled Beef with Potatoes",
        image: "/images/lunch-2.jpg",
        price: 29,
        categoryId: 2,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 6,
        name: "Grilled Beef with Potatoes",
        image: "/images/lunch-3.jpg",
        price: 29,
        categoryId: 2,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 7,
        name: "Grilled Beef with Potatoes",
        image: "/images/dinner-1.jpg",
        price: 29,
        categoryId: 3,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 8,
        name: "Grilled Beef with Potatoes",
        image: "/images/dinner-2.jpg",
        price: 29,
        categoryId: 3,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 9,
        name: "Grilled Beef with Potatoes",
        image: "/images/dinner-3.jpg",
        price: 29,
        categoryId: 3,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 10,
        name: "Grilled Beef with Potatoes",
        image: "/images/dessert-1.jpg",
        price: 29,
        categoryId: 4,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 11,
        name: "Grilled Beef with Potatoes",
        image: "/images/dessert-2.jpg",
        price: 29,
        categoryId: 4,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 12,
        name: "Grilled Beef with Potatoes",
        image: "/images/dessert-3.jpg",
        price: 29,
        categoryId: 4,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 13,
        name: "Grilled Beef with Potatoes",
        image: "/images/drink-1.jpg",
        price: 29,
        categoryId: 5,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 14,
        name: "Grilled Beef with Potatoes",
        image: "/images/drink-2.jpg",
        price: 29,
        categoryId: 5,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 15,
        name: "Grilled Beef with Potatoes",
        image: "/images/drink-3.jpg",
        price: 29,
        categoryId: 5,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 16,
        name: "Grilled Beef with Potatoes",
        image: "/images/drink-1.jpg",
        price: 29,
        categoryId: 6,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 17,
        name: "Grilled Beef with Potatoes",
        image: "/images/drink-2.jpg",
        price: 29,
        categoryId: 6,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
    {
        id: 18,
        name: "Grilled Beef with Potatoes",
        image: "/images/drink-3.jpg",
        price: 29,
        categoryId: 6,
        gredients: ["meat", "potatoes", "rice", "tomatoes"],
    },
];

export const menu = [
    ...categories.map((category) => ({
        ...category,
        menuItems: menuItems.filter((item) => item.categoryId === category.id),
    })),
];
