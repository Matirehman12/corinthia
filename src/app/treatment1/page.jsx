"use client"
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
import FAQComponent from "./FAQComponent";
import { useState } from "react";

export default function Treatment1() {
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordionId(prevId => (prevId === id ? null : id));
    };
    return (
        <>
            <div className="container mx-auto px-5 md:px-10">
                <div className="md:grid md:grid-cols-12 gap-10 md:mt-28 relative">
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 mt-20">
                        <h1 className="text-2xl md:text-5xl mb-10 text-lightBlack2c font-caslon  xl:w-2/3">{localization.treatment1.beautifulLipEnhancement}</h1>
                        <p className="text-base md:text-1xl text-gray mb-10 font-caslon xl:w-1/2">{localization.dummyText3}</p>
                        <div className="flex  space-x-4 mt-6">
                            <button className="px-4 md:px-6 py-2 pt-[13px] bg-yellowGradient text-sm md:text-lg	 text-black font-base font-caslon rounded-lg uppercase">
                                {localization.treatment1.bookNow}
                            </button>
                            <button className="px-4 md:px-6 py-2 pt-[13px] bg-bgGray bg-gray-300 text-sm md:text-lg	 text-black font-base font-caslon rounded-lg uppercase">
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

            <div className="grid grid-cols-3 gap-4 md:mx-20 mt-10 md:mt-40">
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
                <Image src={treatment1TopLines} alt='topLines' className='absolute left-0 -top-[500px] w-full -z-10' />
                <div className="grid grid-cols-1">
                    <h1 className="text-4xl font-caslon font-noraml mb-2 text-lightBlack2c">{localization.treatment1.frequently}</h1>
                    <h1 className="text-4xl font-caslon font-noraml mb-10 text-lightBlack2c">{localization.treatment1.askedQuestion}</h1>
                </div>
                <FAQComponent
                    accordianHeader={`${localization.treatment1.isThisTreatmentSuitableForMe}?`}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"1"}
                    isOpen={openAccordionId === "1"}
                    onToggle={() => toggleAccordion("1")}
                />
                 <FAQComponent
                    accordianHeader={`${localization.treatment1.whatResultCanIExpect}?`}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"2"}
                    isOpen={openAccordionId === "2"}
                    onToggle={() => toggleAccordion("2")}
                />
                 <FAQComponent
                    accordianHeader={`${localization.treatment1.areThereAnyRisk}?`}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"3"}
                    isOpen={openAccordionId === "3"}
                    onToggle={() => toggleAccordion("3")}
                />
            </div>

            <div className='mt-52'>
                <Footer />
            </div>

        </>
    )
}