import Link from "next/link";
import { Instagram, Facebook, XIcon } from "@/components";

const SocialMediaLinks = () => {
    return (
        <div className="my-5 flex gap-3 justify-around sm:justify-start">
            <Link
                href="#"
                className="bg-zinc-800 rounded-full hover:bg-opacity-80 transition-all duration-300"
            >
                <XIcon className="fill-white size-8  p-2 " />
            </Link>
            <Link
                href="#"
                className="rounded-full bg-zinc-800 hover:bg-opacity-80 transition-all duration-300"
            >
                <Instagram className="fill-white size-8 p-2" />
            </Link>
            <Link
                href="#"
                className="rounded-full bg-zinc-800 hover:bg-opacity-80 transition-all duration-300"
            >
                <Facebook className="fill-white size-8 p-2" />
            </Link>
        </div>
    );
};
export default SocialMediaLinks;
