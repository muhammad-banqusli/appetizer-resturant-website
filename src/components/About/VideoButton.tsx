import { Play, X } from "lucide-react";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function VideoButton() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-primary size-[90px] rounded-full absolute -bottom-9 z-50 right-0 left-0 m-auto">
                    <Play className="fill-white" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="p-0 w-fit bg-black border-none flex justify-center items-center">
                <AlertDialogCancel className="absolute -top-10 -right-1 border-none bg-transparent hover:bg-transparent text-gray-400 hover:text-gray-200">
                    <X />
                </AlertDialogCancel>
                <AlertDialogHeader className="overflow-hidden rounded-md">
                    <div className="w-full rounded-none ">
                        <iframe
                            className="w-screen aspect-video sm:w-[512px] -m-1"
                            src="https://www.youtube.com/embed/1mXrxc_sv1o?si=qRY9c4qW-aetWS74"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
