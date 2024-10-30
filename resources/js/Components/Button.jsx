import { Link } from "@inertiajs/react";
import ArrowRight from "../../../public/svgs/arrow_right.svg";

const Button = ({ btnText }) => {
    return (
        <Link className="text-white bg-blue-700 w-[10.5rem] text-center py-3 rounded-lg hover:bg-blue-900 duration-300 ease-in-out flex justify-center items-center gap-4">
            <span className="block text-base font-medium font-poppins">
                {btnText}
            </span>
            <span className="bg-white flex justify-center items-center border w-7 h-7 rounded-full">
                <img className="block" src={ArrowRight} alt="Arrow right" />
            </span>
        </Link>
    );
};

export default Button;
