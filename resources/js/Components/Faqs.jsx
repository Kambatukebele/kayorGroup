import HTwo from "./HTwo";
import ListFaqs from "./ListFaqs";
import Underline from "./Underline";

const Faqs = () => {
    //Dummy data to disply faq's
    const FAQS = [
        {
            id: 1,
            question: "Can you work with non-native English writers?",
            response:
                "Yes, we definitely work with non-native English writers.",
        },
        {
            id: 2,
            question:
                "What's the difference between proofreading and copyediting?",
            response: `The Difference Between Proofreading and Copyediting

                While proofreading and copyediting are both essential steps in the editing process, they serve different purposes and occur at different stages:

                Copyediting:

                1. Occurs earlier in the editing process
                2. Focuses on improving the overall quality and clarity of the writing
                3. Involves:
                    - Correcting grammar, spelling, and punctuation
                    - Ensuring consistency in style, tone, and formatting
                    - Improving sentence structure and flow
                    - Checking for proper word usage and clarity
                    - Addressing issues with logic and coherence
                4. May include some fact-checking and verifying references
                5. Can involve substantial rewriting or restructuring of text

                Proofreading:

                1. Is the final step before publication or submission
                2. Focuses on catching any remaining errors or inconsistencies
                3. Involves:
                    - Correcting minor errors in spelling, grammar, and punctuation
                    - Checking for consistent formatting (e.g., fonts, headings, page numbers)
                    - Ensuring proper layout and design elements
                    - Verifying that all edits from previous stages have been correctly implemented
                4. Does not typically involve major rewrites or content changes
                5. Aims to produce an error-free final draft.

                In essence, copyediting is a more in-depth process that improves the overall quality of the writing, while proofreading is a final check to catch any lingering errors before the document is finalized.`,
        },
        {
            id: 3,
            question:
                "How do you ensure the confidentiality and security of my document?",
            response: `Ensuring Document Confidentiality and Security at Kayor Group, we take the confidentiality and security of your documents extremely seriously. We adhere strictly to the General Data Protection Regulation (GDPR) requirements. Here's how we protect your data:

            . Secure data storage: We use encrypted, GDPR-compliant cloud storage systems to keep your documents safe.

            . Limited access: Only authorized editors working on your project have access to your documents.

            . Non-disclosure agreements: All our staff sign confidentiality agreements.

            . Secure file transfer: We use encrypted channels for sending and receiving files.

            . Data minimization: We only collect and retain information necessary for providing our services.

            . Regular security audits: We conduct periodic reviews of our security measures to ensure they remain effective.

            . Data deletion policy: We securely delete your documents after project completion, unless you request otherwise.

            . Staff training: Our team undergoes regular training on data protection and GDPR compliance.

            . Incident response plan: We have procedures in place to quickly address any potential data breaches.

            . No third-party sharing: We never share your documents with unauthorized third parties.

            We are committed to maintaining the integrity and confidentiality of your data, as mandated by Article 5(1)(f) of the GDPR, which requires appropriate security of personal data. Our measures ensure protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage.`,
        },
        {
            id: 4,
            question: "What types of documents do you work on?",
            response: `Types of Documents We Edit

                At Kayor Group, we offer editing and proofreading services for a wide range of document types across various fields. Our experienced editors are equipped to handle:

                1. Academic Documents:
                .Research papers and journal articles
                .Theses and dissertations
                .Conference papers and presentations
                .Grant proposals

                2. Business Documents:
                .Reports and white papers
                .Business plans and proposals
                .Marketing materials and brochures
                .Website content and blog posts

                3. Non-Fiction Writing:
                .History
                .Spiritual / Religious
                .Essays and articles
                .Travel writing and personal narratives

                4. Technical Documents:
                .Scientific papers

                5. Professional Documents:
                .Resumes and Cvs
                .Cover letters
                .Personal statements
                .Professional bios

                6. Educational Materials:
                .Textbooks and study guides
                .Course materials and syllabi
                .E-learning content

                We tailor our editing approach to the specific requirements of each document type, ensuring that we maintain the appropriate style, tone, and formatting for your particular needs. If you have a document type not listed here, please don't hesitate to contact us – we're likely able to assist you.
`,
        },
        {
            id: 5,
            question: "How long will it take to edit/proofread my document?",
            response:
                "On average about 5 days from the time we get the go ahead, though this depends on the size and scope of the project.",
        },
        {
            id: 6,
            question: "Do you offer rush services for urgent projects?",
            response: "Yes",
        },
        {
            id: 7,
            question:
                "What style guides do you use (e.g., Chicago Manual of Style, AP Stylebook)?",
            response: "We typically use Chicago Manual",
        },
    ];

    return (
        <>
            <section className="w-full bg-white">
                <div className="container py-10 px-4 sm:px-8">
                    <div className="mb-20 flex flex-col justify-center items-center">
                        <HTwo title="FAQ's" />
                        <p className="text-base text-center font-normal text-gray-600 my-3">
                            Have questions? We're here to help.
                        </p>
                        <Underline />
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
