import { Link } from "@inertiajs/react";
import menu from "../../../public/svgs/menu.svg";
import close from "../../../public/svgs/close_circle.svg";
import { useState } from "react";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <main>
                <header className="w-full h-fit bg-red-400 px-4 relative">
                    <div className="container h-14 flex justify-between items-center">
                        <Link>
                            <span className="font-poppins">KayorGroup</span>
                        </Link>
                        <ul
                            className={`${
                                isOpen
                                    ? "right-0  ease-in-out"
                                    : "-right-[5000px]"
                            } absolute top-14 duration-700  bg-gray-400 min-w-72 flex flex-col justify-start items-center gap-8 h-screen py-5`}
                        >
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Services</Link>
                            </li>
                            <li className="bg-blue-700 w-[8.5rem] text-center py-4 rounded-lg">
                                <Link className="text-white">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="flex justify-center items-center">
                            <img
                                className={`${isOpen ? "hidden " : "block"}`}
                                onClick={handleIsOpenMenu}
                                src={menu}
                                alt="open-menu"
                            />
                            <img
                                className={`${!isOpen ? "hidden" : "block"} `}
                                onClick={handleIsOpenMenu}
                                src={close}
                                alt="close-menu"
                            />
                        </div>
                    </div>
                </header>
            </main>
        </>
    );
};

export default Home;
