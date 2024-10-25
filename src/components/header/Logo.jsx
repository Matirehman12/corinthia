import Link from "next/link";
import clsx from "clsx";
import logo from '../../images/logo.svg'
import Image from "next/image";


const Logo = ({ className, props }) => {
    return (
        <Link href={"/"}>
            {/* <h2
                className={clsx(
                    "text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300",
                    className
                )}
                {...props}
            >
                Investa

            </h2> */}
            <Image
                src={logo}
                alt="brand logo"
                // width={180}
                // height={38}
                priority
                className="w-[160px] md:w-[340px] md:h-[145px]  -ms-[6px]"
            />
        </Link>
    );
};

export default Logo;
