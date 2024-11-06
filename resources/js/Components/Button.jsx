import { Link } from "@inertiajs/react";
import ArrowRight from "../../../public/svgs/arrow_right.svg";

const Button = ({ btnText, href }) => {
    return (
        <Link
            href={href}
            className="text-white bg-blue-700 w-fit text-center px-6 py-3 rounded-lg hover:bg-blue-900 duration-300 ease-in-out flex justify-center items-center gap-4 animate-bounce"
        >
            <span className="block text-base font-medium font-poppins">
                {btnText}
            </span>
            <span className="bg-white flex justify-center items-center border w-7 h-7 rounded-full">
                <img
                    className="block -rotate-45 hover:rotate-0"
                    src={ArrowRight}
                    alt="Arrow right"
                />
            </span>
        </Link>
    );
};

export default Button;
