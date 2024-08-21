import SocialMediaLinks from "./SocialMediaLinks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
    return (
        <div className="bg-[#141313] text-white font-Poppins py-20 px-4 flex flex-col items-center">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between mb-10">
                <div className="flex flex-col px-4">
                    <h2 className="text-[18px] mb-10 font-extrabold">
                        Appetizer
                    </h2>
                    <p className="text-[14px] opacity-70 mb-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </p>
                    <SocialMediaLinks />
                </div>
                <div className="flex flex-col justify-between px-4">
                    <h2 className="text-[18px] mb-10 font-extrabold">
                        Open Hours
                    </h2>
                    <div className="mb-6 text-[14px] opacity-70 space-y-1.5">
                        <div className="w-full flex justify-between">
                            <span>Monday</span>
                            <span>9:00 - 24:00</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Tuesday</span>
                            <span>9:00 - 24:00</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Wednesday</span>
                            <span>9:00 - 24:00</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Thursday</span>
                            <span>9:00 - 24:00</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Friday</span>
                            <span>9:00 - 02:00</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Saturdau</span>
                            <span>9:00 - 02:00</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Sunday</span>
                            <span>9:00 - 02:00</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between px-4">
                    <h2 className="text-[18px] mb-10 font-extrabold">
                        Newsletter
                    </h2>
                    <p className="mb-4 text-[14px] opacity-70">
                        Far far away, behind the word mountains, far from the
                        countries.
                    </p>
                    <Input
                        type="email"
                        placeholder="Enter email address"
                        className="bg-white bg-opacity-10 rounded-[2px] border-none text-center font-Poppins font-medium text-white text-opacity-70 placeholder:text-opacity-70 border-0 border-b-2 border-gray-500 px-6  focus-visible:ring-offset-0 focus-visible:ring-0 mb-2"
                    />
                    <Button className="rounded-[2px] text-sm font-medium mb-6">
                        Subscribe
                    </Button>
                </div>
                <div className="flex flex-col px-4 w-full mb-5">
                    <h2 className="text-[18px] mb-10 font-extrabold">
                        Instagram
                    </h2>
                    <div className="w-full grid grid-cols-3">
                        <img
                            src="/images/insta-1.jpg"
                            alt="instagram image"
                            className="w-full h-[100px] object-cover"
                        />
                        <img
                            src="/images/insta-2.jpg"
                            alt="instagram image"
                            className="w-full h-[100px] object-cover"
                        />
                        <img
                            src="/images/insta-3.jpg"
                            alt="instagram image"
                            className="w-full h-[100px] object-cover"
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3">
                        <img
                            src="/images/insta-4.jpg"
                            alt="instagram image"
                            className="w-full h-[100px] object-cover"
                        />
                        <img
                            src="/images/insta-5.jpg"
                            alt="instagram image"
                            className="w-full h-[100px] object-cover"
                        />
                        <img
                            src="/images/insta-6.jpg"
                            alt="instagram image"
                            className="w-full h-[100px] object-cover"
                        />
                    </div>
                </div>
            </div>
            <p className="mb-5">
                Copyright ©2024 All rights reserved | This template is made with 
                ❤ 
                by Mohammad Nour
            </p>
        </div>
    );
}
