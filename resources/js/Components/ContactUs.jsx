import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";
import HTwo from "./HTwo";

const ContactUs = () => {
    return (
        <>
            <section className="w-full bg-gray-50">
                <div className="container py-10">
                    <div className="mb-20 text-center">
                        <HTwo title="Contact Us" />
                    </div>
                    <form className="mx-4 sm:mx-8 md:w-[600px] md:mx-auto">
                        <div className="flex flex-col justify-center gap-4">
                            <div className="sm:flex sm:justify-center sm:gap-3">
                                <div className="mb-3 flex flex-col sm:w-1/2">
                                    <label
                                        className="block text-sm text-gray-700 mb-2 w-full"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="border-gray-50 block w-full rounded-lg text-sm py-4 pl-4 text-gray-500 font-extralight"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name here"
                                    />
                                </div>
                                <div className="mb-3 flex flex-col sm:w-1/2">
                                    <label
                                        className="block text-sm text-gray-700 mb-2 w-full"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="border-gray-50 block w-full rounded-lg text-sm py-4 pl-4 text-gray-500 font-extralight"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email here"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="block text-sm text-gray-700 mb-2 w-full"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="9"
                                    className="border-gray-50 block w-full rounded-lg text-sm py-4 pl-4 text-gray-500 font-extralight"
                                    name="message"
                                    id="message"
                                    placeholder="Enter your message here"
                                ></textarea>
                            </div>
                            <div className="">
                                <label
                                    className="text-sm text-gray-700 mb-2 w-full flex gap-2 justify-start items-start"
                                    htmlFor="checkbox"
                                >
                                    <input
                                        className="border-gray-50 block w-5 h-5 rounded-sm"
                                        type="checkbox"
                                        name="checkbox"
                                        id="checkbox"
                                        placeholder="Enter your email here"
                                    />
                                    <span>
                                        I agree with the{" "}
                                        <Link className="underline">
                                            {" "}
                                            Privacy policy and terms
                                        </Link>
                                    </span>
                                </label>
                            </div>
                            <div>
                                <Button btnText="Send" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
