import {
    InstagramImages,
    MaxWidthWrapper,
    ParallaxWithHeader,
} from "@/components";
import ContactInfo from "./ContactInfo";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/forms/ContactForm";

const ContactPage = () => {
    return (
        <>
            <ParallaxWithHeader title="Contact Us" />
            <ContactInfo />
            <MaxWidthWrapper className="flex flex-col-reverse md:flex-row mb-12">
                <GoogleMap hasNoTitle={true} />
                <ContactForm />
            </MaxWidthWrapper>
            <InstagramImages />
        </>
    );
};
export default ContactPage;
