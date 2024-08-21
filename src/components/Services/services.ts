import { ReactNode } from "react";
import { Cake, HandPlatter, Handshake } from "lucide-react";

export interface ServiceInfo {
    icon: any;
    title: string;
    description: string;
    id: number;
}

export const services: ServiceInfo[] = [
    {
        icon: Cake,
        title: "Birthday Party",
        description:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        id: 1,
    },
    {
        icon: Handshake,
        title: "Business Meeting",
        description:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        id: 2,
    },
    {
        icon: HandPlatter,
        title: "Wedding Party",
        description:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
        id: 3,
    },
];
