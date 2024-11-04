import quote from "../../../public/svgs/quote.svg";
import HTwo from "./HTwo";
import Underline from "./Underline";

const Testimonials = () => {
    return (
        <>
            <section className="w-full bg-blue-50">
                <div className="container py-10 px-4 sm:px-8">
                    <div className="mb-10 flex flex-col justify-center items-center">
                        <HTwo title="Testimonial" />
                        <Underline />
                    </div>
                    <div>
                        <figure className="max-w-screen-md mx-auto text-center">
                            <img className="w-6" src={quote} alt="" />
                            <blockquote>
                                <p className="text-xl italic font-medium text-gray-900 dark:text-white lg:text-xl">
                                    "KayorGroup is just awesome. It contains
                                    tons of predesigned components and pages
                                    starting from login screen to complex
                                    dashboard. Perfect choice for your next SaaS
                                    application."
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
        </>
    );
};

export default Testimonials;
