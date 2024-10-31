import serviceImgOne from "../../../public/images/serviceImgOne.jpg";
import serviceImgTwo from "../../../public/images/serviceImgTwo.jpg";
import serviceImgThree from "../../../public/images/serviceImgThree.jpg";
import HTwo from "./HTwo";

const Services = () => {
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
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="px-4 text-center mx-auto max-w-screen-xl">
                    <HTwo title="Services" />
                </div>
                {servicesData.map((service) => {
                    const { id, image, title, description, reverse } = service;
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
                                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                    {description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default Services;
