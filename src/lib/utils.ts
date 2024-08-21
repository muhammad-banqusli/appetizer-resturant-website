import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatIngredients(ingredients: string[]) {
    // Capitalize the first letter of each ingredient
    const capitalizedIngredients = ingredients.map((ingredient) => {
        return ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    });

    // Join the ingredients with commas and "and"
    if (capitalizedIngredients.length === 1) {
        return capitalizedIngredients[0];
    } else if (capitalizedIngredients.length === 2) {
        return capitalizedIngredients.join(" and ");
    } else {
        return (
            capitalizedIngredients.slice(0, -1).join(", ") +
            ", and " +
            capitalizedIngredients.slice(-1)
        );
    }
}
