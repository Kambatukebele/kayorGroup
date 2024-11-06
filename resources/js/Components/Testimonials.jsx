import quote from "../../../public/svgs/quote.svg";
import HTwo from "./HTwo";
import Underline from "./Underline";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: `"KayorGroup is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`,
            name: "Michael Gough",
            role: "CEO at Google",
        },
        {
            id: 2,
            text: `"Working with KayorGroup has been a game changer. It made developing our project faster and easier. I couldn't have asked for a better design kit."`,
            name: "Sarah Lee",
            role: "Lead Developer at Facebook",
        },
        {
            id: 3,
            text: `"This platform has saved us so much time with its beautiful and responsive components. The customization is easy, and we love how it scales!"`,
            name: "John Doe",
            role: "Product Manager at Amazon",
        },
    ];
    return (
        <>
            <section className="w-full bg-blue-50" id="testimonial">
                <div className="container py-10 px-4 sm:px-8">
                    <div className="mb-10 flex flex-col justify-center items-center">
                        <HTwo title="Testimonial" />
                        <Underline />
                    </div>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map(({ id, text, name, role }) => (
                            <figure
                                key={id}
                                className="max-w-screen-md mx-auto text-center p-6 bg-white rounded-lg shadow-lg"
                            >
                                <img
                                    className="w-6 mx-auto"
                                    src={quote}
                                    alt="quote"
                                />
                                <blockquote>
                                    <p className="text-xl italic font-medium text-gray-900 dark:text-white lg:text-xl">
                                        {text}
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                                            {name}
                                        </cite>
                                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                                            {role}
                                        </cite>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                        {/* <figure className="max-w-screen-md mx-auto text-center">
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
                        </figure> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
