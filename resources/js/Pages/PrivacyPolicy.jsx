import HFive from "@/Components/HFive";
import HTwo from "@/Components/HTwo";
import GuestLayout from "@/Layouts/GuestLayout";

const PrivacyPolicy = () => {
    return (
        <GuestLayout>
            <section className="w-full my-14">
                <div className="container px-4">
                    <div className="lg:w-[700px] lg:mx-auto">
                        <div className="mb-10">
                            <HTwo title="Privacy Policy" />
                        </div>

                        <div className="mb-6">
                            <HFive title="Data Collection and Purpose" />
                            <p className="text-base lg:text:lg text-gray-500">
                                We collect your email address and contact name
                                for the specific purpose of contacting potential
                                client to discuss content projects. This data is
                                collected with your explicit consent
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="Lawful Basis for Processing" />
                            <p className="text-base lg:text:lg text-gray-500">
                                The lawful basis for processing your data is
                                consent. By providing your email address and
                                name, you are giving us permission to use this
                                information for the stated purpose
                            </p>
                        </div>
                        <div className="mb-6">
                            <HFive title="Data Minimization" />
                            <p className="text-base lg:text:lg text-gray-500">
                                We only collect the data that is necessary for
                                the specified purpose. We do not collect any
                                additional personal information unless
                                explicitly stated and consented to
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="Your Rights" />
                            <p className="text-base lg:text:lg text-gray-500 mb-2">
                                Under GDPR, you have the following rights
                                regarding your personal data:
                            </p>
                            <ul className="list-inside list-decimal text-gray-500 text-sm">
                                <li className="pb-2">
                                    The right to access your data
                                </li>
                                <li className="pb-2">
                                    The right to rectify inaccurate data
                                </li>
                                <li className="pb-2">
                                    The right to erasure ("right to be
                                    forgotten")
                                </li>
                                <li className="pb-2">
                                    The right to restrict processing
                                </li>
                                <li className="pb-2">
                                    The right to data portability
                                </li>
                                <li className="pb-2">
                                    The right to object to processing
                                </li>
                            </ul>
                            <p className="text-base lg:text:lg text-gray-500">
                                You may exercise these rights at any time by
                                contacting us at [kayorgroup at protonmail.com]
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="Consent Withdrawal" />
                            <p className="text-base lg:text:lg text-gray-500">
                                You have the right to withdraw your consent at
                                any time. We provide an easy opt-out option in
                                every communication we send
                            </p>
                        </div>

                        <div className="mb-6">
                            <HFive title="Data Security" />
                            <p className="text-base lg:text:lg text-gray-500">
                                We implement appropriate technical and
                                organizational measures to ensure the security
                                of your personal data, protecting it against
                                unauthorized or unlawful processing and
                                accidental loss, destruction, or damage
                            </p>
                        </div>
                        <div className="mb-6">
                            <HFive title="Data Retention" />
                            <p className="text-base lg:text:lg text-gray-500">
                                We will retain your personal data only for as
                                long as necessary to fulfill the purposes for
                                which it was collected. Once the data is no
                                longer needed, it will be securely deleted or
                                anonymized
                            </p>
                        </div>
                        <div className="mb-6">
                            <HFive title="Third-Party Sharing" />
                            <p className="text-base lg:text:lg text-gray-500">
                                We do not share your personal data with any
                                third parties unless explicitly stated and
                                consented to by you .By providing your email
                                address and name, you acknowledge that you have
                                read and understood this privacy statement and
                                consent to the collection and use of your data
                                as described herein.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default PrivacyPolicy;
