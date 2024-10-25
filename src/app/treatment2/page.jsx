"use client";
import Accordian from '@/components/accordian/Accordian';
import LogoSection from '@/components/logosection/LogoSection';
import after from '../../images/after.svg';
import after1 from '../../images/after1.svg';
import containerImg from '../../images/containerImg.svg';
import containerImg5 from '../../images/containerImg5.svg';
import relatedImg1 from '../../images/relatedImg1.svg';
import relatedImg2 from '../../images/relatedImg2.svg';
import surgicalAsthetic3 from '../../images/surgicalAsthetic3.svg';
import testemonialsImg from '../../images/testemonialsImg.svg';
import arrowIcon from '../../images/arrowIcon.svg';
import Footer from '@/components/footer/Footer';
import NewsLetter from '@/components/newsletter/NewsLetter';
import { localization } from '@/localization';
import Image from "next/image";
import bottomLines from '@/images/bottomLines.svg';
import treatment1TopLines from '@/images/treatment1TopLines.svg';
import { useState } from 'react';
export default function Treatment2() {

    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (id) => {
      setOpenAccordionId(prevId => (prevId === id ? null : id));
    };

    return (

        <>
            <div className='relative'>
                <div className="container mx-auto mt-20 ">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="imgContainer">
                            <Image
                                src={surgicalAsthetic3}
                                alt="surgicalAsthetic3"
                                width={512}
                                height={1138}
                                className='ml-20 rounded-none'
                            />
                        </div>
                        <div className="textContainer ">
                            <div className="hrDiv flex">
                                <h1 className='text-4xl font-caslon font-normal w-1/2'>{localization.treatment2.antiWrinkleInjection}</h1>
                                <div className="border-l-2 border-gray-300  ml-10 h-[170px] z-50"></div>

                                <span className='mt-8 font-normal text-1xl ml-10 font-caslon'>{localization.treatment2.atAglace}</span>
                            </div>
                            <div className="textDiv bg-customGold mr-40 pt-10 pb-10">
                                <p className='text-large font-base text-white mx-20 font-caslon  mb-5'>
                                    {localization.treatment2.refreshYourLook}
                                </p>
                                <p className=' mb-5 text-white text-1xl ml-20 font-caslon'>Treatment areas include :</p>
                                <ul className="list-disc list-inside font-caslon mx-20 mb-5 text-white text-1xl">
                                    {localization.treatment2.treatmentAreas.map((area, index) => (
                                        <li key={index}>{area}</li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-1xl font-normal mx-20 mb-5 font-caslon text-white">
                                    {localization.treatment2.reliableTreatmentText1}
                                </p>
                                <p className="mt-4 text-1xl font-normal mx-20 mb-5 font-caslon text-white">
                                    {localization.treatment2.reliableTreatmentText2}
                                </p>
                                <p className="mt-4 text-1xl font-normal mx-20 mb-5 font-caslon text-white">
                                    {localization.treatment2.reliableTreatmentText3}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <Image src={treatment1TopLines} alt='topLines' className='absolute top-32 -z-10' />
            </div>


            <div className="grid grid-cols-1 mt-44">
                <h1 className="text-4xl text-center font-caslon mb-4">FAQ</h1>
            </div>
            <div className='mt-10 mb-20'>
                <Accordian
                    accordianHeader={"IS THIS TREATMENT SUITABLE FOR ME?"}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"1"}
                    isOpen={openAccordionId === "1"}
                    onToggle={() => toggleAccordion("1")}
                />
            </div>
            <div className='mt-20 mb-20'>
                <Accordian
                    accordianHeader={"WHAT RESULT CAN I EXPECT?"}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"2"}
                    isOpen={openAccordionId === "2"}
                    onToggle={() => toggleAccordion("2")}
                />
            </div>
            <div className='mt-20 mb-20'>
                <Accordian
                    accordianHeader={"ARE THERE ANY RISKS?"}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"3"}
                    isOpen={openAccordionId === "3"}
                    onToggle={() => toggleAccordion("3")}
                />
            </div>
            <div className='mt-20 mb-20'>
                <Accordian
                    accordianHeader={"WHAT ABOUT AFTERCARE?"}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"4"}
                    isOpen={openAccordionId === "4"}
                    onToggle={() => toggleAccordion("4")}
                />

            </div>
            <div className='mt-20 mb-20'>
                <Accordian
                    accordianHeader={"WHAT CAN I EXPECT ON THIS DAY?"}
                    accordianBodyText={"We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you."}
                    accordianId={"5"}
                    isOpen={openAccordionId === "5"}
                    onToggle={() => toggleAccordion("5")}
                />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-60  bg-lightGray p-8 py-16 mr-60 relative">

                <div className="flex flex-col items-start ml-[115px] ">
                    <h1 className="text-4xl font-caslon font-bold mb-4">{localization.treatment2.testimonials}</h1>
                    <p className="text-lg text-gray-700 font-caslon mb-6 w-1/3">
                        {localization.treatment2.weValueFeedback}
                    </p>
                    <div>
                        <Image
                            src={containerImg5}
                            alt="Client Image"
                            width={338}
                            height={339}
                            className="mb-4  h-[420px] absolute"
                        />
                    </div>
                </div>


                <div className="relative">
                    <div>
                        <Image
                            src={testemonialsImg}
                            width={177}
                            height={163}
                            className='absolute -left-28 -top-3'
                            alt="testemonialsImg"
                        />
                    </div>

                    <div className='w-[70%] bg-white p-8 py-20 mt-5'>
                        <p className="text-lg italic font-caslon mx-8 mb-4">
                            {localization.treatment2.teamAreTheMostProfessional}
                        </p>
                        <p className="text-lg font-semibold font-caslon text-right">{localization.treatment2.sarah}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-[300px]">
                <div className="grid grid-cols-1 mt-20">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-semibold">{localization.treatment2.seeTheResult}</h1>
                        <hr className="w-24 mx-auto mt-4 border-black border-t-2" />
                    </div>

                    <div className="grid grid-cols-5 mx-40">
                        <div>
                            <Image
                                src={after}
                                alt="Before Image 1"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">{localization.treatment2.before}</p>
                        </div>
                        <div className='mt-14'>
                            <Image
                                src={after}
                                alt="After Image 1"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">{localization.treatment2.after}</p>
                        </div>

                        <div className="text-center font-caslon font-normal text-base mt-20 p-4">
                            <p className="text-1xl text-gray-600 w-11/12">
                                {localization.treatment2.proudOfResult}
                            </p>
                        </div>
                        <div className='mt-28'>
                            <Image
                                src={after1}
                                alt="Before Image 2"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">{localization.treatment2.before}</p>

                        </div>
                        <div className='mt-44'>
                            <Image
                                src={after1}
                                alt="After Image 2"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">{localization.treatment2.after}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-20">
                <Image
                    src={containerImg}
                    alt="containerImg"
                    className='w-full'
                    height={800}
                />
            </div>

            <div className="grid grid-cols-2 items-center gap-10 relative">
                <div>
                    <h1 className='text-4xl font-caslon text-center  mt-20 mb-16'>{localization.treatment2.relatedTreatment}</h1>
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <Image
                                src={relatedImg1}
                                alt='relatedImg1'
                                height={800}
                                className='h-[600px] object-cover'
                            />
                        </div>
                        <div className="col-span-6">
                            <Image
                                src={relatedImg2}
                                alt='relatedImg2'
                                height={800}
                                className='h-[600px] object-cover'
                            />
                        </div>

                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-12  mt-20 px-16'>
                        <div className="col-span-12">
                            <h1 className="text-4xl font-caslon mb-20 w-1/2">{localization.treatment2.relatedConditions}</h1>
                        </div>

                        <div className="col-span-6">
                            <div className='w-[70%]'>
                                <div className="flex justify-between items-center mb-10">
                                    <p className='font-caslon font-normal text-2xl text-black'>{localization.treatment2.excessiveSweating}</p>
                                    <Image src={arrowIcon}
                                        alt='arrowIcon'
                                        className='h-[50px]'
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-10">
                                    <p className='font-caslon font-normal text-2xl text-black w-3/4'>{localization.treatment2.tiredEyesEyebagsDarkCircles}</p>
                                    <Image src={arrowIcon}
                                        alt='arrowIcon'
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-10">
                                    <p className='font-caslon font-normal text-2xl text-black '>{localization.treatment2.antiAgeing}</p>
                                    <Image src={arrowIcon}
                                        alt='arrowIcon'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className='w-[70%]'>
                                <div className="flex justify-between items-center mb-10">
                                    <p className='font-caslon font-normal text-2xl text-black w-3/4'>{localization.treatment2.teethGrindlingJawLineSlimming}</p>
                                    <Image src={arrowIcon}
                                        alt='arrowIcon'
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-10">
                                    <p className='font-caslon font-normal text-2xl text-black w-3/4'>{localization.treatment2.thinLipUnevenLipsLipLines}</p>
                                    <Image src={arrowIcon}
                                        alt='arrowIcon'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-10 mt-10">
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='absolute w-full top-0 -z-10' >
                    <Image src={bottomLines} alt='bottom-lines' />
                </div>
            </div>

            <div className="newsLetter mt-20">
                <NewsLetter />
            </div>

            <div className="logoSection mt-72">
                <LogoSection />
            </div>


            <div className='mt-52'>
                <Footer />
            </div>


        </>
    )
}
