import Button from "@/Components/Button";
import HTwo from "@/Components/HTwo";
import React from "react";
import { Head } from "@inertiajs/react";

const ThankYou = () => {
    return (
        <section className="w-full relative h-screen">
            <Head title="Thank you" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="">
                    <HTwo title="Thank you for your inquiry" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-center">
                        We will get back to you shortly
                    </p>
                    <Button href="/" btnText="Home" />
                </div>
                <div className="animate-pulse w-10 h-10 bg-blue-800 absolute -top-44 -left-[530px] rounded-full"></div>
                <div className="animate-pulse w-10 h-10 bg-blue-400 absolute -top-64 rounded-full"></div>
                <div className="animate-wiggle-more w-10 h-10 bg-purple-700 absolute top-96"></div>
            </div>
        </section>
    );
};

export default ThankYou;
