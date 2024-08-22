import { RefObject, useEffect } from "react";

const useClickOutside = (
    ref: RefObject<HTMLElement>,
    handler: () => void,
    toggleSidebarButtonDynamicId: string,
    toggleSidebarButtonStaticId?: string
) => {
    useEffect(() => {
        function listener(event: MouseEvent | TouchEvent) {
            const toggleSidebarButtonDynamic = document.getElementById(
                toggleSidebarButtonDynamicId
            );
            const toggleSidebarButtonStatic = document.getElementById(
                toggleSidebarButtonStaticId|| 'asdjfl;asjfdl;kajsfljas;lfjd;ajf'
            );

            // Check if click is outside the menu or on the toggle button
            if (
                !ref.current ||
                ref.current.contains(event.target as Node) ||
                (toggleSidebarButtonDynamic &&
                    toggleSidebarButtonDynamic.contains(
                        event.target as Node
                    )) ||
                (toggleSidebarButtonStatic &&
                    toggleSidebarButtonStatic.contains(event.target as Node))
            ) {
                return;
            }

            handler();
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler, ref]);
};

export default useClickOutside;
