"use client";

import surgicalAsthetic3 from '../../images/surgicalAsthetic3.svg';
import containerImg5 from '../../images/containerImg5.svg';
import expandImg from '../../images/expandImg.svg';
import testemonialsImg from '../../images/testemonialsImg.svg';
import after from '../../images/after.svg';
import after1 from '../../images/after1.svg';
import containerImg from '../../images/containerImg.svg';
import relatedImg1 from '../../images/relatedImg1.svg';
import relatedImg2 from '../../images/relatedImg2.svg';
import LogoSection from '@/components/logosection/LogoSection';

import arrowIcon from '../../images/arrowIcon.svg';

import Image from "next/image";
import NewsLetter from '@/components/newsletter/NewsLetter';
import Footer from '@/components/footer/Footer';


export default function Treatment2() {

    return (

        <>
            <div className="container mx-auto mt-20">
                <div className="grid grid-cols-2 gap-10">
                    <div className="imgContainer">
                        <Image
                            src={surgicalAsthetic3}
                            alt="surgicalAsthetic3"
                            width={512}
                            height={1138}
                            className='ml-20'
                        />
                    </div>
                    <div className="textContainer ">
                        <div className="hrDiv flex">
                            <h1 className='text-4xl font-caslon font-normal'>ANTI-WRINKLE <br /> INJECTIONS</h1>
                            <div class="border-l-2 border-gray-300  ml-10 h-[170px] z-50"></div>

                            <span className='mt-8 font-normal text-1xl ml-10 font-caslon'> At a glance </span>
                        </div>
                        <div className="textDiv bg-customGold mr-40 pt-10 pb-10">
                            <p className='text-large font-normal text-white mx-20 font-caslon  mb-5'>
                                Refresh your look with anti-wrinkle injections to smooth existing wrinkles and to help prevent the formation of new ones. Relaxing the muscles with carefully placed anti-wrinkle injections can quickly and effectively create a more youthful look and relax those expression lines that can cause you to look tired and sometimes even angry and detract from your natural glow.
                            </p>
                            <p className=' mb-5 text-white text-1xl ml-20 font-caslon'>Treatment areas include :</p>
                            <ul className="list-disc list-inside font-caslon mx-20 mb-5 text-white text-1xl">
                                <li>Forehead lines</li>
                                <li>Crow’s feet around the eyes</li>
                                <li>Smile & Frown lines</li>
                                <li>Neck lines – Platysma bands</li>
                                <li>Décolletage to jaw-line – Nefertiti lift</li>
                                <li>Puckering (orange peel) chin</li>
                                <li>Gummy smile</li>
                                <li>Chemical brow lift</li>
                                <li>Bunny lines</li>
                            </ul>
                            <p className="mt-4 text-1xl font-normal mx-20 mb-5 font-caslon text-white">
                                A reliable treatment that can work from around 3-4 days to smooth the skin results are individual but can last from three to six months <br /> <br /> When expertly administered, toxin injections can do more than simply reduce the look of facial lines and wrinkles. Brows can be lifted, the lip flipped for a more voluminous look and noses prevented from drooping. <br /> <br /> Anti-wrinkle or toxin injections also have multiple non-aesthetic benefits as well, such as the treatment of excessive sweating, bruxism teeth-clenching and migraines.  Book in a consultation to discuss your treatment needs.
                            </p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="container mx-auto">
                <div className="grid grid-cols-1 mt-20">
                    <h1 className='d-flex items-center text-center text-4xl font-caslon justify-center'>FAQs</h1>
                    <div className="flex flex-col items-center justify-center mx-40 my-10">
                        <div className="w-full  border border-gray-300 p-4 flex flex-col items-center">
                            <h2 className="text-2xl font-caslon font-medium text-center">
                                IS THIS TREATMENT SUITABLE FOR ME?
                            </h2>

                            <div className="flex items-center justify-center w-full mt-2">

                                <Image
                                    src={expandImg}
                                    className='absolute  translate-y-1/2'
                                    alt="expandImage"

                                />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-40 my-10">
                        <div className="w-full  border border-gray-300 p-4 flex flex-col items-center">
                            <h2 className="text-2xl font-caslon font-medium text-center">
                                WHAT RESULT CAN I EXPECT?
                            </h2>
                            <p className='text-center font-caslon mx-40 mt-3'>We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you.</p>

                            <div className="flex items-center justify-center w-full mt-2">

                                <Image
                                    src={expandImg}
                                    className='absolute  translate-y-1/2'
                                    alt="expandImage"

                                />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-40 my-10">
                        <div className="w-full  border border-gray-300 p-4 flex flex-col items-center">
                            <h2 className="text-2xl  font-medium text-center">
                                ARE THERE ANY RISKS?
                            </h2>


                            <div className="flex items-center justify-center w-full mt-2">

                                <Image
                                    src={expandImg}
                                    className='absolute  translate-y-1/2'
                                    alt="expandImage"

                                />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-40 my-10">
                        <div className="w-full  border border-gray-300 p-4 flex flex-col items-center">
                            <h2 className="text-2xl  font-medium text-center">
                                WHAT ABOUT AFTERCARE?
                            </h2>

                            <div className="flex items-center justify-center w-full mt-2">

                                <Image
                                    src={expandImg}
                                    className='absolute  translate-y-1/2'
                                    alt="expandImage"

                                />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-40 my-10">
                        <div className="w-full  border border-gray-300 p-4 flex flex-col items-center">
                            <h2 className="text-2xl  font-medium text-center">
                                WHAT CAN I EXPECT ON THIS DAY?
                            </h2>

                            <div className="flex items-center justify-center w-full mt-2">

                                <Image
                                    src={expandImg}
                                    className='absolute  translate-y-1/2'
                                    alt="expandImage"

                                />

                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-60  bg-lightGray p-8 py-16 mr-60 relative">

                <div className="flex flex-col items-start ml-[115px] ">
                    <h1 className="text-4xl font-caslon font-bold mb-4">TESTIMONIALS</h1>
                    <p className="text-lg text-gray-700 font-caslon mb-6">
                        We value feedback from <br /> our clients, here are some <br /> of our recent testimonials.
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
                            This team are the most professional. I wouldn&apos;t trust anyone else with my injectables. Cham has been a great support through the years. I always leave feeling uplifted and empowered!
                        </p>
                        <p className="text-lg font-semibold font-caslon text-right">Sarah</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-[300px]">
                <div className="grid grid-cols-1 mt-20">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-semibold">SEE THE RESULTS</h1>
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
                            <p className="text-center font-caslon font-normal text-base mt-3">Before</p>
                        </div>
                        <div className='mt-14'>
                            <Image
                                src={after}
                                alt="After Image 1"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">After</p>
                        </div>

                        <div className="text-center font-caslon font-normal text-base mt-16">
                            <p className="text-1xl text-gray-600">
                                We&apos;re proud of the results we < br /> achieve for our clients. Scroll <br /> to see more of our incredible <br /> patient before & afters.
                            </p>
                        </div>
                        <div className='mt-28'>
                            <Image
                                src={after1}
                                alt="Before Image 2"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">Before</p>

                        </div>
                        <div className='mt-44'>
                            <Image
                                src={after1}
                                alt="After Image 2"
                                height={282}
                                className="shadow-md w-full"
                            />
                            <p className="text-center font-caslon font-normal text-base mt-3">After</p>
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

            <div className="grid grid-cols-2 gap-10">
                <div className="leftRelated mt-20">
                    <h1 className='text-4xl font-caslon text-center'>RELATED TREATMENTS</h1>
                    <div className="relatedImgs flex mt-10">
                        <Image
                            src={relatedImg1}
                            alt='relatedImg1'
                            width={400}
                            height={800}
                            className='h-[600px]'
                        />
                        <Image
                            src={relatedImg2}
                            alt='relatedImg2'
                            width={400}
                            height={800}
                            className='h-[600px]'
                        />
                    </div>

                </div>
                <div className="rightRelated flex justify-center mt-20 flex-col ml-20">
                    <h1 className="text-4xl font-caslon mb-20">RELATED <br /> CONDITIONS</h1>
                    <div className="list-one font-caslon flex gap-10">
                        <div className="flex items-center gap-10 mb-5">
                            <p className='font-caslon font-normal text-2xl text-black'>Excessive sweating</p>
                            <Image src={arrowIcon}
                                alt='arrowIcon'
                                className='h-[50px]'
                            />
                        </div>
                        <div className="flex items-start gap-10 mb-5">
                            <p className='font-caslon font-normal text-2xl text-black'>Teeth grindling & <br /> Jaw Line Slimming</p>
                            <Image src={arrowIcon}
                            alt='arrowIcon'
                            />
                        </div>
                    </div>
                    <div className="list-two font-caslon flex  gap-10 mb-5">
                        <div className="flex items-start gap-8">
                            <p className='font-caslon font-normal text-2xl text-black'>Tired Eyes, Eyebags  <br /> & Dark Circles</p>
                            <Image src={arrowIcon}
                            alt='arrowIcon'
                            />
                        </div>
                        <div className="flex items-start gap-10 mb-5">
                            <p className='font-caslon font-normal text-2xl text-black'>Thin Lips, Uneven <br /> Lips & Lip Lines</p>
                            <Image src={arrowIcon}
                            alt='arrowIcon'
                            />
                        </div>
                    </div>
                    <div className="list-three font-caslon mb-5 max-w-lg pb-20 border-b">
                        <div className="flex items-center gap-20">
                            <p className='font-caslon font-normal text-2xl text-black'>Anti-Ageing</p>
                            <Image src={arrowIcon}
                            alt='arrowIcon'
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="newsLetter">
                <NewsLetter />
            </div>

            <div className="logoSection">
                <LogoSection />
            </div>

            <div className='mt-52'>
                <Footer />
            </div>

        </>
    )
}
