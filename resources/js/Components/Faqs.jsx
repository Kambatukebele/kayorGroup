import HTwo from "./HTwo";
import ListFaqs from "./ListFaqs";

const Faqs = () => {
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

    return (
        <>
            <section className="w-full bg-gray-50">
                <div className="container py-10 px-4 sm:px-8">
                    <div className="mb-20 text-center">
                        <HTwo title="FAQ's" />
                        <p className="text-base text-center font-normal text-gray-600 my-3">
                            Have questions? We're here to help.
                        </p>
                    </div>
                    <div>
                        {FAQS.map((faq) => {
                            return <ListFaqs {...faq} key={faq.id} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faqs;
