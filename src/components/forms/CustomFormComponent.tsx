import { E164Number } from "libphonenumber-js/core";
import {
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CustomFormFieldPropTypes, FormFieldTypes } from "./formTypes";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { add, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { Textarea } from "../ui/textarea";

export default function CustomFormField(props: CustomFormFieldPropTypes) {
    const { control, formFieldType, name, label } = props;
    const RenderInput = ({
        field,
        props,
    }: {
        field: any;
        props: CustomFormFieldPropTypes;
    }) => {
        const { formFieldType, placeholder, iconAlt, iconSrc, options } = props;
        switch (formFieldType) {
            case FormFieldTypes.INPUT:
                return (
                    <div className="flex border border-dark-500 bg-dark-400">
                        {iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || "icon"}
                                className="ml-2"
                            />
                        )}
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                {...field}
                                className="text-14-medium text-dark-700 border-0"
                            />
                        </FormControl>
                    </div>
                );
            case FormFieldTypes.TEXTAREA:
                return (
                    <FormControl>
                        <Textarea
                            placeholder={placeholder}
                            className="resize-none rounded-none active:rounded-md focus:rounded-md"
                            {...field}
                        />
                    </FormControl>
                );
            case FormFieldTypes.SELECT:
                return (
                    <div className="flex border border-dark-500 bg-dark-400">
                        {iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || "icon"}
                                className="ml-2"
                            />
                        )}
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <FormControl>
                                <SelectTrigger className="focus:rounded-md active:rounded-md rounded-none border-none">
                                    <SelectValue
                                        placeholder={placeholder}
                                        className={cn(
                                            "data-[placeholder]:text-muted-foreground"
                                        )}
                                    />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {options?.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.text}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                );
            case FormFieldTypes.DATE_PICKER:
                return (
                    <div className="flex border border-dark-500 bg-dark-400">
                        {iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || "icon"}
                                className="ml-2"
                            />
                        )}
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "pl-3 !text-left font-normal rounded-none border-none justify-start w-full",
                                            !field.value &&
                                                "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "dd/MM/yyyy")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date < new Date() ||
                                        date > add(new Date(), { years: 1 })
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                );

            case FormFieldTypes.PHONE_INPUT:
                return (
                    <FormControl>
                        <PhoneInput
                            defaultCountry="TR"
                            placeholder={placeholder}
                            international
                            withCountryCallingCode
                            value={field.value as E164Number | undefined}
                            onChange={field.onChange}
                            className="mt-2 h-11 rounded-0 px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
                        />
                    </FormControl>
                );

            default:
                return null;
        }
    };
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1 mb-4 w-full">
                    {formFieldType !== FormFieldTypes.CHECKBOX && label && (
                        <FormLabel className="font-semibold">{label}</FormLabel>
                    )}
                    <RenderInput field={field} props={props} />
                    <FormMessage className="text-red-400" />
                </FormItem>
            )}
        />
    );
}
