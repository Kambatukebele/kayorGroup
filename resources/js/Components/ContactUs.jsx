import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/react";
import HTwo from "./HTwo";
import Underline from "./Underline";
import InputError from "./InputError";

const ContactUs = () => {
    const { data, post, setData, errors } = useForm({
        name: "",
        email: "",
        message: "",
        checkbox: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");

        post(route("send_email.store"), {
            onError: (error) => {
                alert("There is an error");
                // window.scrollTo(0, scrollPosition);
            },
        });
    };
    console.log(errors);

    return (
        <>
            <section className="w-full bg-gray-50">
                <div className="container py-14">
                    <div className="mb-10 flex flex-col justify-center items-center">
                        <HTwo title="Contact Us" />
                        <Underline />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mx-4 sm:mx-8 md:w-[600px] md:mx-auto"
                    >
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
                                        className="border-blue-300 block w-full rounded-lg text-sm py-4 pl-4 text-gray-800 font-extralight"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        id="name"
                                        placeholder="Enter your name here"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
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
                                        className="border-blue-300 block w-full rounded-lg text-sm py-4 pl-4 text-gray-800 font-extralight"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        id="email"
                                        placeholder="Enter your email here"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
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
                                    className="border-blue-300 block w-full rounded-lg text-sm py-4 pl-4 text-gray-800 font-extralight"
                                    name="message"
                                    value={data.message}
                                    id="message"
                                    placeholder="Enter your message here"
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                ></textarea>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />
                            </div>
                            <div className="">
                                <label
                                    className="text-sm text-gray-700 mb-2 w-full "
                                    htmlFor="checkbox"
                                >
                                    <div className="flex gap-2 justify-start items-start">
                                        <input
                                            className="block border border-blue-700 w-5 h-5 rounded-sm"
                                            type="checkbox"
                                            name="checkbox"
                                            checked={data.checkbox}
                                            id="checkbox"
                                            placeholder="Enter your email here"
                                            onChange={(e) =>
                                                setData(
                                                    "checkbox",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <span>
                                            I agree with the{" "}
                                            <Link
                                                href="/privacy_policy"
                                                className="underline"
                                            >
                                                {" "}
                                                Privacy policy
                                            </Link>
                                        </span>
                                    </div>
                                    <InputError
                                        message={errors.checkbox}
                                        className="mt-2"
                                    />
                                </label>
                            </div>
                            <div>
                                <button className="text-white bg-blue-700 w-fit text-center px-6 py-3 rounded-lg hover:bg-blue-900 duration-300 ease-in-out flex justify-center items-center gap-4">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
