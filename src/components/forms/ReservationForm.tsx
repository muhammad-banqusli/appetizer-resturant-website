"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldTypes, ReservationFormValidation } from "./formTypes";
import { useState } from "react";
import CustomFormField from "./CustomFormComponent";
import { personOptions, timeOptions } from "./selectOptions";
import { Button } from "../ui/button";

const ReservationForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof ReservationFormValidation>>({
        resolver: zodResolver(ReservationFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            date: undefined,
            time: undefined,
        },
    });
    // 2. Define a submit handler.
    const onSubmit = async (
        values: z.infer<typeof ReservationFormValidation>
    ) => {
        console.log("submitting");
        setIsLoading(true);

        // api action
        try {
            console.log(values)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 px-3"
            >
                <CustomFormField
                    
                    control={form.control}
                    formFieldType={FormFieldTypes.INPUT}
                    name="name"
                    label="Name"
                    placeholder="Your Name"
                />

                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.INPUT}
                    name="email"
                    label="Email"
                    placeholder="Your Email"
                />

                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.PHONE_INPUT}
                    name="phone"
                    label="Phone"
                    placeholder="(xxx) xxx xx xx"
                />

                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.DATE_PICKER}
                    name="date"
                    label="Date"
                    placeholder="Pick A Date"
                />
                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.SELECT}
                    name="time"
                    label="Time"
                    placeholder="Choose a Time"
                    options={timeOptions}
                />
                <CustomFormField
                    control={form.control}
                    formFieldType={FormFieldTypes.SELECT}
                    name="person"
                    label="Person"
                    placeholder="Person"
                    options={personOptions}
                />
                <Button
                    type="submit"
                    className="py-4 rounded-none w-full mt-3"
                    disabled={isLoading}
                >
                    Make a Reservation
                </Button>
            </form>
        </Form>
    );
};
export default ReservationForm;
