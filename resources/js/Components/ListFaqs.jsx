import add from "../../../public/svgs/add_circle.svg";
import minus from "../../../public/svgs/minus_circle.svg";
import { useState } from "react";

const ListFaqs = ({ id, question, response }) => {
    //Open and close faq's
    const [isOpenFaqs, setIsOpenFaqs] = useState({});
    //Function to handle Open and close FAQ's
    const toggleFaqs = (id) => {
        setIsOpenFaqs((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <>
            <div className="lg:w-[700px] flex flex-col gap-4 mx-auto h-fit">
                <div className="flex justify-between items-center z-50">
                    <div className="w-1/2 sm:w-2/3">
                        <h4 className="font-semibold text-lg">{question}</h4>
                    </div>
                    <div className="flex w-1/6 justify-end">
                        <img
                            onClick={() => toggleFaqs(id)}
                            className={`${
                                isOpenFaqs[id] ? "hidden" : "block"
                            } w-9 h-9 sm:w-7 sm:h-7 cursor-pointer`}
                            src={add}
                            alt="This an plus button to open FAQ's description"
                        />
                        <img
                            onClick={() => toggleFaqs(id)}
                            className={`${
                                isOpenFaqs[id] ? "block" : "hidden"
                            } w-9 h-9 sm:w-7 sm:h-7 cursor-pointer`}
                            src={minus}
                            alt="This an plus button to open FAQ's description"
                        />
                    </div>
                </div>
                {isOpenFaqs[id] && (
                    <div
                        className={`${
                            isOpenFaqs ? "block mt-0" : "hidden"
                        } h-fit duration-700 ease-in-out`}
                    >
                        <p className="text-base font-light text-gray-950">
                            {response}
                        </p>
                    </div>
                )}
                <hr className="my-5" />
            </div>
        </>
    );
};

export default ListFaqs;
