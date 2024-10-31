import { Link } from "@inertiajs/react";

const Logo = () => {
    return (
        <>
            <Link href="/">
                <span className="font-poppins text-xl md:text-2xl">
                    Kayor{" "}
                    <small className="uppercase text-blue-700 font-bold">
                        Group
                    </small>
                </span>
            </Link>
        </>
    );
};

export default Logo;
