import MaxWidthWrapper from "../MaxWidthWrapper";
import LargeScreenDynamic from "./LargeScreenDynamic";
import LargeScreenStatic from "./LargeScreenStatic";
import SmallScreen from "./SmallScreen";
export default function Navbar() {
    return (
        <nav className="z-[999999] w-full">
            <LargeScreenStatic />

            <LargeScreenDynamic />
            <SmallScreen />
        </nav>
    );
}
