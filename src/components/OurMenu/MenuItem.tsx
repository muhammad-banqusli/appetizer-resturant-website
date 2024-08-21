import { formatIngredients } from "@/lib/utils";
import { MenuItem as MenuItemType } from "./menu";

const MenuItem = ({ item }: { item: MenuItemType }) => {
    return (
        <div className="flex border rounded-sm py-6 px-4 mb-4 group hover:bg-primary transition-all duration-300 w-full max-w-[640px]">
            <img
                src={item.image}
                alt="food image"
                className="rounded-full size-20"
            />
            <div className="ps-4 w-full">
                <div className="flex justify-between w-full items-start gap-2">
                    <h3 className="mb-2 text-[20px] sm:text-[24px] text-[#333333]">
                        {item.name}
                    </h3>
                    <span className="text-[20px] sm:text-[24px] border-b-2 border-b-primary  font-semibold font-Poppins transition-all duration-300 group-hover:border-b-white group-hover:text-white">
                        {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                    </span>
                </div>
                <p>{formatIngredients(item.gredients)}</p>
            </div>
        </div>
    );
};
export default MenuItem;
