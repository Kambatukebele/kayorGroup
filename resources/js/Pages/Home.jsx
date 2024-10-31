import GuestLayout from "@/Layouts/GuestLayout";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import ContactUs from "@/Components/ContactUs";
import Faqs from "@/Components/Faqs";
import Testimonials from "@/Components/Testimonials";

const Home = () => {
    return (
        <>
            <GuestLayout>
                {/* Hero section */}
                <Hero />
                {/* Services section */}
                <Services />
                {/* Form section */}
                <ContactUs />
                {/* FAQ section */}
                <Faqs />
                {/* Section testimonial */}
                <Testimonials />
                {/* Foooter */}
            </GuestLayout>
        </>
    );
};

export default Home;
