import menu from "../../../public/svgs/menu.svg";
import close from "../../../public/svgs/close_circle.svg";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import Button from "@/Components/Button";
import Logo from "@/Components/Logo";
import HFive from "@/Components/HFive";

export default function GuestLayout({ children }) {
    //Open and close menu modal on small device
    const [isOpen, setIsOpen] = useState(false);
    //Function to handle Open and close Menu modal
    const handleIsOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="w-full h-fit bg-white px-4 relative shadow-sm">
                <div className="container h-14 bg-white flex justify-between items-center lg:h-20">
                    <Logo />

                    <ul
                        className={`${
                            isOpen ? "w-full" : "w-0"
                        } bg-gray-50 absolute top-14 right-0 duration-700 h-[calc(100vh-3.5rem)] overflow-hidden flex flex-col justify-start items-center gap-8  py-5 lg:bg-transparent lg:static lg:gap-0 lg:flex-row lg:py-0 lg:w-[25rem] lg:h-fit lg:justify-between`}
                    >
                        <li className="text-base text-gray-800 font-medium font-poppins">
                            <Link>Home</Link>
                        </li>
                        <li className="text-base text-gray-800 font-medium font-poppins">
                            <Link>Services</Link>
                        </li>
                        <li className="">
                            <Button btnText="Contact Us" />
                        </li>
                        <li className="absolute top-5 left-3 w-3 h-3 block border rounded-full shadow-lg bg-gradient-to-b from-blue-700 lg:hidden"></li>
                        <li className="absolute bottom-10 right-3 w-10 h-10 block border rounded-full shadow-xl bg-gradient-to-b from-purple-700 lg:hidden"></li>
                        <li className="absolute top-2 -right-10 w-20 h-20 block border rounded-full shadow-lg bg-gradient-to-b from-green-700 lg:hidden"></li>
                    </ul>
                    <div className="flex justify-center items-center lg:hidden">
                        <img
                            className={`${
                                isOpen ? "hidden " : "block"
                            } cursor-pointer`}
                            onClick={handleIsOpenMenu}
                            src={menu}
                            alt="open-menu"
                        />
                        <img
                            className={`${
                                !isOpen ? "hidden" : "block"
                            } cursor-pointer`}
                            onClick={handleIsOpenMenu}
                            src={close}
                            alt="close-menu"
                        />
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer className="bg-white dark:bg-gray-900 px-4">
                <div className="container  py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Logo />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <HFive title="Follow us" />
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/themesberg/flowbite"
                                            className="hover:underline "
                                        >
                                            Linkedin
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            href="https://discord.gg/4eeurUVvTy"
                                            className="hover:underline"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://discord.gg/4eeurUVvTy"
                                            className="hover:underline"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <HFive title="Legal" />
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2024{" "}
                            <a
                                href="https://flowbite.com/"
                                className="hover:underline"
                            >
                                KayorGroup™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <span className="mr-1 text-gray-500 text-sm">
                                {" "}
                                Build by
                            </span>
                            <a
                                href="https://kambatukebele.com/"
                                target="_blank"
                                className="text-blue-700 underline text-sm"
                            >
                                KambaTukebele
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
