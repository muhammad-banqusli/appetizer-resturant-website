import {
    About,
    InstagramImages,
    OurChefs,
    ParallaxWithHeader,
    Services,
    StatisticsComponent,
    Testimonial,
} from "@/components";

const AboutPage = () => {
    return (
        <>
            <ParallaxWithHeader title="About" />
            <About />
            <StatisticsComponent />
            <Services />
            <OurChefs />
            <Testimonial />
            <InstagramImages />
        </>
    );
};
export default AboutPage;
