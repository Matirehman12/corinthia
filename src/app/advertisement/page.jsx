import Image from "next/image";
import advertisement from '../../images/advertisement.svg'
import advertisement2 from '../../images/advertisement2.svg'
import cosmetic1 from '../../images/cosmetic1.svg'
import cosmetic2 from '../../images/cosmetic2.svg'
import cosmetic3 from '../../images/cosmetic3.svg'
import cosmetic4 from '../../images/cosmetic4.svg'

import LogoSection from "@/components/logosection/LogoSection";



export default function Advertisement(){
    return(
        <>
        <div className="container mx-auto">
            <div className="grid grid-cols-1">
                <Image 
                src={advertisement}
                alt="advertisement"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 mt-20">
            <Image
            src={advertisement2}
            alt="advertisement2"
             />
        </div>

        <div className="grid grid-col-1 text-center items-center mt-20">
            <h1 className="text-4xl font-caslon">BEST SELLING</h1>
            <h1 className="text-4xl font-caslon">TREATMENTS</h1>
            <p className="text-large w-[50%] items-center font-caslon">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat. </p>



        </div>

        <div className="grid grid-cols-4 mt-10">
            <Image
            src={cosmetic1}
            alt="cosmetic1"
             />
               <Image
            src={cosmetic2}
            alt="cosmetic2"
             />
               <Image
            src={cosmetic3}
            alt="cosmetic3"
             />
               <Image
            src={cosmetic4}
            alt="cosmetic4"
             />
        </div>

        <div className="logo-section mt-20">
            <LogoSection />
        </div>
        
        </>
    )
}