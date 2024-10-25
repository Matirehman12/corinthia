import ReactMultiCarousel from "@/components/carousel/ReactMultiCarousel";
import Footer from '@/components/footer/Footer';
import { localization } from '@/localization';
import Image from "next/image";
import surgicalAsthetic1 from '../../images/surgicalAsthetic1.svg';
import surgicalAsthetic2 from '../../images/surgicalAsthetic2.svg';
import surgicalAsthetic3 from '../../images/surgicalAsthetic3.svg';
import bgImage from '../../images/treatment1header.svg';
import treatment1Img from '../../images/treatment1Img.svg';
import treatment1TopLines from '@/images/treatment1TopLines.svg';

export default function Treatment1() {
    return (
        <>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-12 gap-10 md:mt-28 relative">
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 mt-20">
                        <h1 className="text-2xl md:text-5xl mb-10 font-optima md:w-2/3">{localization.treatment1.beautifulLipEnhancement}</h1>
                        <p className="text-base md:text-1xl mb-10 font-caslon w-1/2">{localization.dummyText3}</p>
                        <div className="leftButtons space-x-4 mt-6">
                            <button className="px-6 py-2 pt-4 bg-yellowGradient text-black font-base font-caslon rounded-lg uppercase">
                                {localization.treatment1.bookNow}
                            </button>
                            <button className="px-6 py-2 pt-4 bg-bgGray bg-gray-300 text-black font-base font-caslon rounded-lg uppercase">
                                {localization.treatment1.requestACallBack}
                            </button>
                        </div>

                    </div>
                    <div className="col-span-12 lg:col-span-6 xl:col-span-7 hidden lg:block">
                        <div className='relative h-[600px]'>
                            <Image
                                src={bgImage}
                                alt="bgImage"
                                height={500}
                                className='absolute w-[200px] md:w-[669px] -top-20'
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 mt-20 lg:mt-0">
                <ReactMultiCarousel />
            </div>
            <div className='relative'>
                <Image src={treatment1TopLines} alt='topLines' className='absolute -top-[700px] -z-10' />
                <div className="grid lg:grid-cols-2 gap-4 mt-40 ">
                    <div className="leftDiv mx-10 xl:mx-20 text-1xl mt-8 xl:px-28">
                        <p className="mb-4 font-caslon text-2xl font-normal text-gray">{localization.treatment1.refreshYourLook}</p>
                        <p className="mb-4 font-caslon text-2xl font-normal text-gray">{localization.treatment1.treatmentAreasInclude}:</p>
                        <ul className="list-disc ml-4 font-caslon text-xl font-normal text-gray">
                            {localization.treatment1.treatmentAreas.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                        <p className="mt-4 font-caslon text-2xl font-normal text-gray">{localization.treatment1.reliableTreatmentText}</p>
                    </div>
                    <div className="rightDiv">
                        <Image
                            src={treatment1Img}
                            alt="treatment1Img"
                            width={1180}
                            height={973}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mx-20 mt-40">
                <Image
                    src={surgicalAsthetic3}
                    alt="surgicalAsthetic3"
                    width={1380}
                    height={861}
                />
                <Image
                    src={surgicalAsthetic2}
                    alt="surgicalAsthetic2"
                    width={1380}
                    height={861}

                />
                <Image
                    src={surgicalAsthetic1}
                    alt="surgicalAsthetic1"
                    width={1380}
                    height={861}
                />
            </div>


            <div className='mt-28 px-10 md:ps-28 relative'>
                <Image src={treatment1TopLines} alt='topLines' className='absolute left-0 -top-[550px] w-full -z-10' />
                <div className="grid grid-cols-1">
                    <h1 className="text-4xl font-caslon font-noraml mb-2">{localization.treatment1.frequently}</h1>
                    <h1 className="text-4xl font-caslon font-noraml mb-10">{localization.treatment1.askedQuestion}</h1>

                    <h4 className="text-lg text-black w-100 font-caslon font-normal tracking-wide mt-10">{localization.treatment1.isThisTreatmentSuitableForMe}?</h4>
                    <div>
                        <hr className="border-t-1 border-gray mt-2" />
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className="col-span-12 md:col-span-6">
                        <h4 className="text-lg text-black font-normal font-caslon tracking-wide mt-8">{localization.treatment1.whatResultCanIExpect}?</h4>
                        <h4 className="text-lg text-black font-normal font-caslon tracking-wide mt-10">{localization.treatment1.areThereAnyRisk}?</h4>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <div className="bg-bgDarkGray font-caslon text-gray text-1xl p-16">
                            <p>
                                {localization.treatment1.weBeliveHealth}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-52'>
                <Footer />
            </div>

        </>
    )
}