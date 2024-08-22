import { Control } from "react-hook-form";

import { z } from "zod";

export const ReservationFormValidation = z.object({
    name: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(50, "Name must be at most 50 characters"),
    email: z.string().email(),
    phone: z
        .string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    date: z.date(),
    time: z.string(),
    person: z.number().int()
});

export interface CustomFormFieldPropTypes {
    control: Control<any>;
    name: string;
    label?: string;
    formFieldType: FormFieldTypes;
    placeholder?: string;
    iconAlt?: string;
    iconSrc?: string;
    disabled?: boolean;
    dateForma?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    options?: { value: string; text: string }[];
    renderSkeleton?: (field: any) => React.ReactNode;
}

export enum FormFieldTypes {
    INPUT = "input",
    TEXTAREA = "textarea",
    CHECKBOX = "checkbox",
    PHONE_INPUT = "phoneInput",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}
