import { MaxWidthWrapper } from "@/components";

const contactInfo: { title: string; value: string; href?: string }[] = [
    {
        title: "Adress",
        value: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    { title: "Phone", value: " + 1235 2355 98", href: "tel://+1235235598" },
    {
        title: "Email",
        value: "info@yoursite.com",
        href: "mailto:info@yoursite.com",
    },
    {
        title: "Website",
        value: "yoursite.com",
        href: "https://google.com",
    },
];

const ContactInfo = () => {
    return (
        <section className="py-24">
            <MaxWidthWrapper className="h-fit">
                <div className="px-2 mb-6">
                    <h2 className="text-[30px] mb-2 font-bold">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {contactInfo.map((info) => (
                        <p className="px-3 mb-4" key={info.title}>
                            {info.title}:{" "}
                            {info.href ? (
                                <span className="text-primary">
                                    <a href={info.href}>{info.value}</a>
                                </span>
                            ) : (
                                <span className="px-3 mb-4">{info.value}</span>
                            )}
                        </p>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};
export default ContactInfo;
