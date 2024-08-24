import { cn } from "@/lib/utils";

import {
    Pagination,
    PaginationContent,
    // PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const MyPaginationItem = ({
    isActive,
    page,
}: {
    isActive: boolean;
    page: number;
}) => (
    <PaginationItem>
        <PaginationLink
            href="#"
            aria-disabled={isActive ? "true" : "false"}
            className={cn(
                "rounded-full border border-primary text-primary p-0 flex items-center justify-center size-8",
                {
                    "text-white bg-primary pointer-events-none": isActive,
                    "hover:bg-primary hover:text-white transition-all duration-300":
                        !isActive,
                }
            )}
        >
            {page}
        </PaginationLink>
    </PaginationItem>
);

const PaginationNextPrev = ({
    disabled,
    type,
}: {
    disabled: boolean;
    type: "next" | "prev";
}) => (
    <PaginationItem>
        {type === "prev" ? (
            <PaginationPrevious
                href="#"
                aria-disabled={disabled ? "true" : "false"}
                className={cn(
                    "rounded-full border p-0 flex items-center justify-center size-8",
                    {
                        "cursor-not-allowed text-gray-400 border-gray-400 pointer-events-none":
                            disabled,
                        "transition-all duration-300  border-primary text-primary  hover:bg-primary hover:text-white":
                            !disabled,
                    }
                )}
            />
        ) : (
            <PaginationNext
                href="#"
                aria-disabled={disabled ? "true" : "false"}
                className={cn(
                    "rounded-full border p-0 flex items-center justify-center size-8",
                    {
                        "cursor-not-allowed text-gray-400 border-gray-400 pointer-events-none":
                            disabled,
                        "transition-all duration-300  border-primary text-primary  hover:bg-primary hover:text-white":
                            !disabled,
                    }
                )}
            />
        )}
    </PaginationItem>
);

const PaginationComponent = () => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationNextPrev type="prev" disabled={true} />
                <MyPaginationItem isActive={true} page={1} />
                <MyPaginationItem isActive={false} page={2} />
                <MyPaginationItem isActive={false} page={3} />
                <MyPaginationItem isActive={false} page={4} />
                <MyPaginationItem isActive={false} page={5} />
                <PaginationNextPrev type="next" disabled={false} />
            </PaginationContent>
        </Pagination>
    );
};
export default PaginationComponent;
