import Image from "next/image";
import advertisement from '../../images/advertisement.svg'
import advertisement2 from '../../images/advertisement2.svg'
import cosmetic1 from '../../images/cosmetic1.svg'
import cosmetic2 from '../../images/cosmetic2.svg'
import cosmetic3 from '../../images/cosmetic3.svg'
import cosmetic4 from '../../images/cosmetic4.svg'

import LogoSection from "@/components/logosection/LogoSection";
import Footer from "@/components/footer/Footer";
import { localization } from "@/localization";



export default function Advertisement() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 relative">
                    <div className="text-center flex items-center justify-between">
                        <h1 className="font-caslon font-normal text-2xl md:text-6xl text-white absolute w-full uppercase">{localization.Advertisement.hereBeautyBodyAndMindAlign}</h1>
                        <Image
                            src={advertisement}
                            alt="advertisement"
                        />
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 mt-20">
                <Image
                    src={advertisement2}
                    alt="advertisement2"
                />
            </div>

            <div className="grid grid-cols-12 justify-center items-center mt-20">
                <div className="md:col-span-3"></div>
                <div className="col-span-12 md:col-span-6 text-center">
                    <h1 className="text-2xl md:text-6xl font-caslon">{localization.Advertisement.bestSelling}</h1>
                    <h1 className="text-2xl md:text-6xl font-caslon">{localization.Advertisement.treatment}</h1>
                    <p className="text-large  items-center font-caslon">{localization.Advertisement.dummyText5}</p>
                </div>
                <div className="md:col-span-3"></div>
            </div >

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
            <div className="logo-section mt-20">
                <Footer />
            </div>

        </>
    )
}