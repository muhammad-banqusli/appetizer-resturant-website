import {
    InstagramImages,
    ImageSlider,
    Testimonial,
    OurChefs,
    About,
    Services,
    StatisticsComponent,
    OurMenu,
} from "@/components";

export default function Home() {
    return (
        <>
            <ImageSlider />
            <About />
            <StatisticsComponent />
            <Services />
            <OurMenu />
            <OurChefs />
            <Testimonial />
            <InstagramImages />
        </>
    );
}
