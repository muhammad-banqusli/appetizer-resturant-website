import {
    InstagramImages,
    ImageSlider,
    Testimonial,
    OurChefs,
    About,
    Services,
    StatisticsComponent,
    OurMenu,
    BookAReservation,
} from "@/components";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
    return (
        <>
            <ImageSlider />
            <About />
            <StatisticsComponent />
            <Services />
            <OurMenu />
            <div className="flex flex-col lg:flex-row w-full">
                <BookAReservation />
                <GoogleMap />
            </div>
            <OurChefs />
            <Testimonial />
            <InstagramImages />
        </>
    );
}
