"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldTypes, ContactFormValidation } from "./formTypes";
import { useState } from "react";
import CustomFormField from "./CustomFormComponent";
import { Button } from "../ui/button";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof ContactFormValidation>>({
        resolver: zodResolver(ContactFormValidation),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });
    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof ContactFormValidation>) => {
        console.log("submitting");
        setIsLoading(true);

        // api action
        try {
            console.log(values);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full p-12"
            >
                <h2 className="mb-12 text-[30px] font-bold">Contact Us</h2>
                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.INPUT}
                    name="name"
                    placeholder="Your Name"
                />

                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.INPUT}
                    name="email"
                    placeholder="Your Email"
                />

                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.INPUT}
                    name="subject"
                    placeholder="Subject"
                />
                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.TEXTAREA}
                    name="message"
                    placeholder="Message"
                />

                <Button
                    type="submit"
                    className="py-4 px-12 rounded-none w-full mt-3 text-base hover:text-primary hover:bg-transparent transition-all duration-300 border border-transparent hover:border-primary h-fit"
                    disabled={isLoading}
                >
                    Send Message
                </Button>
            </form>
        </Form>
    );
};
export default ContactForm;
