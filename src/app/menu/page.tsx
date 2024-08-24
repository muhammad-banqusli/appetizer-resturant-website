import {
    BookAReservation,
    InstagramImages,
    OurMenu,
    ParallaxWithHeader,
} from "@/components";
import GoogleMap from "@/components/GoogleMap";

const MenuPage = () => {
    return (
        <>
            <ParallaxWithHeader title="Our Specialities" />
            <OurMenu />
            <div className="flex flex-col lg:flex-row w-full">
                <BookAReservation />
                <GoogleMap />
            </div>
            <InstagramImages />
        </>
    );
};
export default MenuPage;
