import GuestLayout from "@/Layouts/GuestLayout";
import HFive from "@/Components/HFive";
import HTwo from "@/Components/HTwo";

const CookiePolicy = () => {
    return (
        <GuestLayout>
            <section className="w-full my-14">
                <div className="container px-4">
                    <div className="lg:w-[700px] lg:mx-auto">
                        <div className="mb-10">
                            <HTwo title="Cookie Policy" />
                            <p className="text-gray-500 text-base lg:text-lg">
                                This Cookie Policy explains how we use cookies
                                and similar technologies on our website. We are
                                committed to protecting your privacy and
                                complying with the General Data Protection
                                Regulation (GDPR).
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="What are Cookies?" />
                            <p className="text-base lg:text:lg text-gray-500">
                                Cookies are small text files that are placed on
                                your device when you visit our website. They
                                allow us to recognize your device and store
                                certain information about your preferences or
                                past actions.
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="Types of Cookies We Use" />
                            <p className="text-base lg:text:lg text-gray-500 mb-2">
                                We use the following types of cookies:
                            </p>
                            <ul className="list-inside list-decimal text-gray-500 text-sm">
                                <li className="pb-2">
                                    <strong>Strictly Necessary Cookies:</strong>{" "}
                                    These are essential for the website to
                                    function properly and cannot be switched
                                    off. They do not store any personal
                                    information.
                                </li>
                                <li className="pb-2">
                                    <strong>
                                        Analytical/Performance Cookies:
                                    </strong>{" "}
                                    These allow us to recognize and count the
                                    number of visitors and see how visitors move
                                    around our website. This helps us improve
                                    the way our website works.
                                </li>
                                <li className="pb-2">
                                    <strong>Functionality Cookies:</strong>{" "}
                                    These are used to recognize you when you
                                    return to our website. This enables us to
                                    personalize our content for you and remember
                                    your preferences
                                </li>
                                <li className="pb-2">
                                    <strong>Targeting Cookies:</strong> These
                                    record your visit to our website, the pages
                                    you have visited, and the links you have
                                    followed. We may use this information to
                                    make our website and the advertising
                                    displayed on it more relevant to your
                                    interests.
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <HFive title="How We Use Cookies" />
                            <p className="text-base lg:text:lg text-gray-500 mb-2">
                                We use cookies to:
                            </p>
                            <ul className="list-inside list-decimal text-gray-500 text-sm">
                                <li className="pb-2">
                                    Ensure the proper functioning of our website
                                </li>
                                <li className="pb-2">
                                    Analyze how our website is used to improve
                                    its performance
                                </li>
                                <li className="pb-2">
                                    Personalize your experience
                                </li>
                                <li className="pb-2">
                                    Provide relevant advertising (where
                                    applicable)
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <HFive title="Third-Party Cookies" />
                            <p className="text-base lg:text:lg text-gray-500">
                                Some cookies may be set by third-party services
                                that appear on our pages. We do not control the
                                setting of these cookies. Please check the
                                third-party websites for more information about
                                these cookies and how to manage them.
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="Your Consent" />
                            <p className="text-base lg:text:lg text-gray-500">
                                When you first visit our website, we will ask
                                for your consent to use cookies. You can choose
                                to accept or decline cookies. You can also
                                change your cookie settings at any time by
                                clicking on the "Cookie Settings" link in the
                                footer of our website.
                            </p>
                        </div>
                        <div className="mb-6">
                            <HFive title="Managing Cookies" />
                            <p className="text-base lg:text:lg text-gray-500">
                                Most web browsers allow you to manage cookies
                                through their settings. You can usually find
                                these settings in the "options" or "preferences"
                                menu of your browser. You can also use your
                                browser settings to delete existing cookies and
                                to prevent future cookies from being set.
                            </p>
                        </div>
                        <div className="mb-6">
                            <HFive title="Changes to This Policy" />
                            <p className="text-base lg:text:lg text-gray-500">
                                We may update this Cookie Policy from time to
                                time. Any changes will be posted on this page
                                with an updated revision date.
                            </p>
                        </div>
                        <div className="mb-6">
                            <HFive title="Contact Us" />
                            <p className="text-base lg:text:lg text-gray-500">
                                If you have any questions about this Cookie
                                Policy, please contact us at kayorgroup at gmail
                                .com .By using our website, you consent to our
                                use of cookies as described in this policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default CookiePolicy;
