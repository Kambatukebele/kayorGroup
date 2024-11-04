import serviceImgOne from "../../../public/images/serviceImgOne.jpg";
import serviceImgTwo from "../../../public/images/serviceImgTwo.jpg";
import serviceImgThree from "../../../public/images/serviceImgThree.jpg";
import HTwo from "./HTwo";
import Underline from "./Underline";

const Services = () => {
    // Dummy data to display services information
    const servicesData = [
        {
            id: 1,
            image: serviceImgOne,
            alt: "Man sitting with books",
            title: "English Language Enhancement",
            description:
                "Our comprehensive editing service refines your writing to ensure clarity and professionalism. We meticulously correct spelling, grammar, and punctuation errors while enhancing overall English language usage. Our expert editors will:",
            lists: [
                "Rephrase awkward sentences for natural flow",
                "Clarify confusing passages using subject-specific knowledge",
                "Elevate your writing style to a more polished, professional tone",
                "Address fundamental language issues",
                "Fine-tune stylistic elements to improve overall phrasing",
            ],
            extraText:
                "We focus on both the essential aspects of language correction and the nuanced elements of style, resulting in a significantly improved and more impactful manuscript.",
            reverse: false,
        },
        {
            id: 2,
            image: serviceImgTwo,
            alt: "Man sitting with books",
            title: "Book Launch Campaign",
            description:
                "We will develop media assets for your book launch campaign with a focus on the following areas: interviews, marketing, and social media.",
            reverse: true,
        },
        {
            id: 3,
            image: serviceImgThree,
            alt: "Man sitting with books",
            title: "Proofreading",
            description:
                "We will meticulously edit and proofread your academic documents for grammar, spelling, formatting, word choice, sentence structure, style, consistency, and more. We will track all changes and send you the revised documents via email before your deadline. Our work is conducted with complete confidentiality, and we offer a 100% satisfaction guarantee.",
            reverse: false,
        },
    ];
    return (
        <>
            <section className="bg-white py-14 relative" id="services">
                <div className="px-4 flex flex-col justify-center items-center mx-auto max-w-screen-xl">
                    <HTwo title="Services" />
                    <Underline />
                </div>
                {servicesData.map((service) => {
                    const {
                        id,
                        image,
                        title,
                        description,
                        reverse,
                        lists,
                        extraText,
                    } = service;
                    return (
                        <div
                            key={id}
                            className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
                        >
                            <img
                                className={`rounded-lg w-full ${
                                    reverse ? "order-1" : ""
                                } order-1"`}
                                src={image}
                                alt="dashboard image"
                            />
                            <div className="mt-4 md:mt-0">
                                <h3 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 lg:text-3xl">
                                    {title}
                                </h3>
                                <p class="mb-2 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                    {description}
                                </p>
                                {lists && (
                                    <ul className="ml-10">
                                        {lists.map((list, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="mb-2 list-disc indent-1 pb-1 font-light text-gray-500"
                                                >
                                                    {list}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                                {extraText && (
                                    <p className="font-light text-gray-500 md:text-lg dark:text-gray-400">
                                        {extraText}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default Services;
