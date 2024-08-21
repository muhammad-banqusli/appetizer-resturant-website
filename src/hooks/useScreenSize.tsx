// useScreenSize.js
import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Only add the event listener if window is defined
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            // Set the initial size
            handleResize();
        }
        // Clean up the event listener when the component unmounts
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    return screenSize;
};

export default useScreenSize;
