import { Link } from "@inertiajs/react";
import menu from "../../../public/svgs/menu.svg";
import close from "../../../public/svgs/close_circle.svg";
import HeroImg from "../../../public/images/heroImg.png";
import serviceImgOne from "../../../public/images/serviceImgOne.jpg";
import serviceImgTwo from "../../../public/images/serviceImgTwo.jpg";
import serviceImgThree from "../../../public/images/serviceImgThree.jpg";
import add from "../../../public/svgs/add_circle.svg";
import minus from "../../../public/svgs/minus_circle.svg";
import quote from "../../../public/svgs/quote.svg";

import { useState } from "react";
import Button from "@/Components/Button";

const Home = () => {
    //Open and close menu modal on small device
    const [isOpen, setIsOpen] = useState(false);
    //Open and close faq's
    const [isOpenFaqs, setIsOpenFaqs] = useState({});

    //Function to handle Open and close Menu modal
    const handleIsOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    // Dummy data to display services information
    const servicesData = [
        {
            id: 1,
            image: serviceImgOne,
            alt: "Man sitting with books",
            title: "English Language Editing",
            description:
                "We will correct errors in spelling, grammar, and punctuation and will polish English language usage.We will also rephrase sentences that sound unnatural, use subject expertise to point out sentences that are confusing, and make your style sound more professional.We will correct fundamental language errors and rephrase or point out awkward and confusing sentences.We will focus on the finer points of style and on improving the phrasing.",
            reverse: false,
        },
        {
            id: 2,
            image: serviceImgTwo,
            alt: "Man sitting with books",
            title: "Book Launch Campaign ",
            description:
                "We will create media assets for your book campaign focusing on the following: Interviews Marketing Social Media ",
            reverse: true,
        },
        {
            id: 3,
            image: serviceImgThree,
            alt: "Man sitting with books",
            title: "Proofreading",
            description:
                "We will edit and proofread your academic file(s) for grammar, spelling, formatting, word choice, sentence structure, style, consistency, and more.track their changes  and email you the revised file(s) before your deadline work confidentially  with a 100% satisfaction guarantee",
            reverse: false,
        },
    ];

    //Dummy data to disply faq's
    const FAQS = [
        {
            id: 1,
            question: "Is there will be a lecture?",
            response: "Yes it will be",
        },
        {
            id: 2,
            question: "Are you taking Student work as well?",
            response: "Yes, we do, contact us for more info",
        },
        {
            id: 3,
            question: "Are you accepting partial payment?",
            response: "No, we do not accept that",
        },
        {
            id: 4,
            question: "Are you accepting European and american client",
            response: "Yes and No, we will see",
        },
        {
            id: 5,
            question: "Are you accepting European and american client",
            response: "Yes and No, we will see",
        },
    ];

    //Function to handle Open and close FAQ's
    const toggleFaqs = (id) => {
        setIsOpenFaqs((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <>
            <main>
                {/* Header */}
                <header className="w-full h-fit bg-white px-4 relative shadow-sm">
                    <div className="container h-14 bg-white flex justify-between items-center lg:h-20">
                        <Link>
                            <span className="font-poppins text-sm sm:text-base md:text-2xl">
                                Kayor{" "}
                                <small className="uppercase text-blue-700 font-bold">
                                    Group
                                </small>
                            </span>
                        </Link>
                        {/* h-[calc(100vh - 3.5rem)] "w-72 */}
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
                {/* Hero section */}
                <section className="my-10 w-full h-full">
                    <div className="container px-4">
                        <div className="absolute -top-10 -left-10 sm:-top-28 lg:-top-80 w-[18.75rem] h-[18.75rem] sm:w-[37.5rem] sm:h-[37.5rem] shadow-2xl shadow-blue-700 block bg-gradient-to-tl from-blue-700 rounded-full blur-[18rem] sm:blur-[50rem]"></div>
                        <div className="absolute shadow-2xl shadow-purple-700 block bg-gradient-to-tl from-purple-700 rounded-full w-5 h-5"></div>
                        <div className="absolute top-56 right-10 shadow-2xl shadow-orange-700 block bg-gradient-to-tl from-orange-700 rounded-full w-3 h-3"></div>
                        <div className="z-50 flex flex-col justify-center items-center gap-4 sm:w-[37.5rem] mx-auto lg:w-[50rem] xl:w-[60rem]">
                            <h1 className="text-4xl font-bold text-center text-gray-950 lg:text-5xl xl:text-7xl">
                                Empoweing{" "}
                                <span className="text-blue-700">Authors</span>{" "}
                                Across{" "}
                                <span className="text-blue-700">Africa</span>{" "}
                                and Beyond
                            </h1>
                            <p className="text-gray-800 text-center">
                                At Kayor Group, we specialize in creating
                                impactful media assets tailored for authors and
                                writers. Our services include interviews,
                                advertisements, copywriting, manuscript editing,
                                and social media management, all designed to
                                elevate your presence in Africa and the
                                Diaspora.
                            </p>
                            <Button btnText="Contact Us" />
                        </div>
                        <div className="relative w-[280px] h-[400px] mx-auto sm:w-[571px] sm:h-[722px]">
                            <img
                                className="w-full h-full object-cover object-center"
                                src={HeroImg}
                                alt="Image of a Happy man holding a computer"
                            />
                            <span className="bg-white shadow-lg py-1 px-2 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm absolute top-24 sm:top-44 sm:left-20">
                                Spirituality
                            </span>
                            <span className="bg-white shadow-lg py-1 px-2 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm absolute bottom-28 left-5 sm:bottom-48 sm:left-32">
                                Religion
                            </span>
                            <span className="bg-white shadow-lg py-1 px-2 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm absolute bottom-44 right-10 hidden sm:block md:bottom-72 md:-right-20">
                                Biology - Plant Sciences
                            </span>
                        </div>
                    </div>
                </section>
                {/* Services section */}
                <section className="w-full mb-10">
                    <div className="container">
                        <div className="bg-blue-800 h-fit mx-4 rounded-3xl py-5">
                            <div className="z-50 mb-20 flex flex-col justify-center items-center gap-4 sm:w-[37.5rem] mx-auto lg:py-10 lg:w-[50rem] xl:w-[60rem]">
                                <h2 className="text-3xl font-bold text-white">
                                    Our Services
                                </h2>
                            </div>
                            <div>
                                {servicesData.map((service) => {
                                    const {
                                        id,
                                        image,
                                        alt,
                                        title,
                                        description,
                                        reverse,
                                    } = service;
                                    return (
                                        <div
                                            key={id}
                                            className={`px-8 mb-5 lg:flex lg:justify-center ${
                                                reverse
                                                    ? "flex-row-reverse"
                                                    : ""
                                            } lg:w-[800px] lg:mx-auto lg:px-0 lg:mb-10 lg:gap-4`}
                                        >
                                            <div className="w-full mx-auto rounded-lg lg:w-96">
                                                <img
                                                    className="w-full h-full object-cover object-center rounded-lg"
                                                    src={image}
                                                    alt={alt}
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center items-start  gap-4 h-fit py-2 lg:w-96">
                                                <h3 className="font-semibold text-xl text-white mt-5 lg:mt-0">
                                                    {title}
                                                </h3>
                                                <p className="font-normal text-base text-white">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Form section */}
                <section className="w-full bg-gray-50">
                    <div className="container py-10">
                        <div className="mb-20">
                            <h2 className="text-3xl text-center font-bold text-gray-950">
                                Contact Us
                            </h2>
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
                {/* FAQ section */}
                <section className="w-full bg-gray-50">
                    <div className="container py-10 px-4 sm:px-8">
                        <div className="mb-20">
                            <h2 className="text-3xl text-center font-bold text-gray-950">
                                FAQ's
                            </h2>
                            <p className="text-base text-center font-normal text-gray-600 my-3">
                                Have questions? We're here to help.
                            </p>
                        </div>
                        <div>
                            {FAQS.map((faq) => {
                                const { id, question, response } = faq;
                                return (
                                    <div
                                        key={id}
                                        className="lg:w-[700px] flex flex-col gap-4 mx-auto h-fit"
                                    >
                                        <div className="flex justify-between items-center z-50">
                                            <div className="w-1/2 sm:w-2/3">
                                                <h4 className="font-semibold text-lg">
                                                    {question}
                                                </h4>
                                            </div>
                                            <div className="flex w-1/6 justify-end">
                                                <img
                                                    onClick={() =>
                                                        toggleFaqs(id)
                                                    }
                                                    className={`${
                                                        isOpenFaqs[id]
                                                            ? "hidden"
                                                            : "block"
                                                    } w-9 h-9 sm:w-7 sm:h-7 cursor-pointer`}
                                                    src={add}
                                                    alt="This an plus button to open FAQ's description"
                                                />
                                                <img
                                                    onClick={() =>
                                                        toggleFaqs(id)
                                                    }
                                                    className={`${
                                                        isOpenFaqs[id]
                                                            ? "block"
                                                            : "hidden"
                                                    } w-9 h-9 sm:w-7 sm:h-7 cursor-pointer`}
                                                    src={minus}
                                                    alt="This an plus button to open FAQ's description"
                                                />
                                            </div>
                                        </div>
                                        {isOpenFaqs[id] && (
                                            <div
                                                className={`${
                                                    isOpenFaqs
                                                        ? "block mt-0"
                                                        : "hidden"
                                                } h-fit duration-700 ease-in-out`}
                                            >
                                                <p className="text-base font-light text-gray-950">
                                                    {response}
                                                </p>
                                            </div>
                                        )}
                                        <hr className="my-5" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                {/* Section testimonial */}
                <section className="w-full bg-gray-50">
                    <div className="container py-10 px-4 sm:px-8">
                        <div className="mb-20">
                            <h2 className="text-3xl text-center font-bold text-gray-950">
                                Testimonial
                            </h2>
                            <p className="text-base text-center font-normal text-gray-600 my-3">
                                Have questions? We're here to help.
                            </p>
                        </div>
                        <div>
                            <figure className="max-w-screen-md mx-auto text-center">
                                <img className="w-6" src={quote} alt="" />
                                <blockquote>
                                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                                        "KayorGroup is just awesome. It contains
                                        tons of predesigned components and pages
                                        starting from login screen to complex
                                        dashboard. Perfect choice for your next
                                        SaaS application."
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                                            Michael Gough
                                        </cite>
                                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                                            CEO at Google
                                        </cite>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
                {/* Foooter */}
                <footer className="bg-white dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0">
                                <Link
                                    href="https://flowbite.com/"
                                    className="flex items-center"
                                >
                                    <span className="font-poppins text-sm sm:text-base md:text-2xl">
                                        Kayor{" "}
                                        <small className="uppercase text-blue-700 font-bold">
                                            Group
                                        </small>
                                    </span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                {/* <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Quick links
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link
                                                href="https://flowbite.com/"
                                                className="hover:underline"
                                            >
                                                Flowbite
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindcss.com/"
                                                className="hover:underline"
                                            >
                                                Tailwind CSS
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Follow us
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link
                                                href="https://github.com/themesberg/flowbite"
                                                className="hover:underline "
                                            >
                                                Linkedin
                                            </Link>
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
                                            <Link
                                                href="https://discord.gg/4eeurUVvTy"
                                                className="hover:underline"
                                            >
                                                Instagram
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Legal
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link
                                                href="#"
                                                className="hover:underline"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="hover:underline"
                                            >
                                                Terms &amp; Conditions
                                            </Link>
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
            </main>
        </>
    );
};

export default Home;
