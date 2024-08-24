import { BookAReservation, ParallaxWithHeader } from "@/components";
import GoogleMap from "@/components/GoogleMap";

const BookingPage = () => {
    return (
        <>
            <ParallaxWithHeader title="Reservation" />
            <div className="flex flex-col lg:flex-row w-full py-6">
                <GoogleMap />
                <BookAReservation />
            </div>
        </>
    );
};
export default BookingPage;
