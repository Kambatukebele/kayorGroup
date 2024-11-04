import HeroImg from "../../../public/images/heroImg.png";
import Button from "@/Components/Button";
const Hero = () => {
    return (
        <>
            <section className="my-10 w-full h-full">
                <div className="container px-4">
                    <div className="absolute -top-10 -left-10 sm:-top-28 lg:-top-80 w-[18.75rem] h-[18.75rem] sm:w-[37.5rem] sm:h-[37.5rem] shadow-2xl shadow-blue-700 block bg-gradient-to-tl from-blue-700 rounded-full blur-[18rem] sm:blur-[50rem]"></div>
                    <div className="absolute shadow-2xl shadow-purple-700 block bg-gradient-to-tl from-purple-700 rounded-full w-5 h-5"></div>
                    <div className="absolute top-56 right-10 shadow-2xl shadow-orange-700 block bg-gradient-to-tl from-orange-700 rounded-full w-3 h-3"></div>
                    <div className="z-50 flex flex-col justify-center items-center gap-4 sm:w-[37.5rem] mx-auto lg:w-[50rem] xl:w-[60rem]">
                        <h1 className="text-4xl font-bold text-center text-gray-950 lg:text-5xl xl:text-7xl">
                            Empowering{" "}
                            <span className="text-blue-700">Authors</span>{" "}
                            Across <span className="text-blue-700">Africa</span>{" "}
                            and Beyond
                        </h1>
                        <p className="text-gray-800 text-center">
                            At Kayor Group, we focus on developing powerful
                            media assets specifically designed for authors and
                            writers. Our services encompass interviews,
                            advertising, copywriting, manuscript editing, and
                            social media management, all aimed at enhancing your
                            visibility in Africa and the African Diaspora.
                        </p>
                        <Button href="#contactus" btnText="Contact Us" />
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
        </>
    );
};

export default Hero;
