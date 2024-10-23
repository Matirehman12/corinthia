import surgicalAsthetic1 from '../../images/surgicalAsthetic1.svg'
import surgicalAsthetic2 from '../../images/surgicalAsthetic2.svg'
import surgicalAsthetic3 from '../../images/surgicalAsthetic3.svg'
import Image from "next/image";
import bgImage from '../../images/bgImage.svg'
import ReactMultiCarousel from "@/components/carousel/ReactMultiCarousel";
import treatment1Img from '../../images/treatment1Img.svg'

export default function Treatment1() {
    return (
        <>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-2 gap-10  mt-20">
                    <div className="leftDiv">
                        <h1 className="text-5xl mb-10 font-optima">BEAUTIFUL <br /> LIP ENHANCEMENTS</h1>
                        <p className="text-1xl mb-10 font-caslon"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.</p>
                        <div className="leftButtons space-x-4 mt-6">
                            <button className="px-6 py-2 bg-customGold text-black font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                                <span className='font-caslon font-1xl'> BOOK NOW</span>
                            </button>
                            <button className="px-6 py-2 bg-bgGray bg-gray-300 text-black font-semibold rounded-md hover:bg-gray-400 transition duration-300">
                                <span className='text-1xl'> REQUEST A CALLBACK</span>
                            </button>
                        </div>

                    </div>
                    <div className="rightDiv flex justify-center items-center">


                        <Image
                            src={bgImage}
                            width={400}
                            height={913}
                        />

                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1">
                <ReactMultiCarousel />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-40">
                <div className="leftDiv mx-20 text-1xl mt-8">
                    <p className="mb-4 font-caslon">Refresh your look with anti-wrinkle injections to smooth existing wrinkles and to help prevent the formation of new ones. Relaxing the muscles with carefully placed anti-wrinkle injections can quickly and effectively create a more youthful look and relax those expression lines that can cause you to look tired and sometimes even angry and detract from your natural glow.</p>
                    <p className="mb-4 font-caslon">Treatment areas include:</p>
                    <ul className="list-disc ml-4 font-caslon">
                        <li>Forehead lines</li>
                        <li>Smile & Frown lines</li>
                        <li>Neck lines - Platysma bands</li>
                        <li>Décolletage to jaw-line – Nefertiti lift</li>
                        <li>Puckering (orange peel) chin</li>
                        <li>Gummy smile</li>
                        <li>Chemical brow lift</li>
                        <li>Bunny lines</li>
                        <li>Crow’s feet around the eyes</li>
                    </ul>
                    <p className="mt-4 font-caslon">A reliable treatment that can work from around 3-4 days to smooth the skin results are individual but can last from three to six months When expertly administered, toxin injections can do more than simply reduce the look of facial lines and wrinkles. Brows can be lifted, the lip flipped for a more voluminous look and noses prevented from drooping. Anti-wrinkle or toxin injections also have multiple non-aesthetic benefits as well, such as the treatment of excessive sweating, bruxism teeth-clenching and migraines.  Book in a consultation to discuss your treatment needs.</p>
                </div>
                <div className="rightDiv">
                    <Image
                        src={treatment1Img}
                        width={1180}
                        height={973}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mx-20 mt-40">
                <Image
                    src={surgicalAsthetic3}
                    width={1380}
                    height={861}
                />
                <Image
                    src={surgicalAsthetic2}
                    width={1380}
                    height={861}

                />
                <Image
                    src={surgicalAsthetic1}
                    width={1380}
                    height={861}
                />
            </div>

            <div className="grid grid-cols-2 gap-8   mt-20">


                <div className="leftDiv ml-20">
                    <h1 className="text-4xl font-caslon font-bold mb-10">FREQUENTLY <br /> ASKED QUESTIONS</h1>

                    <div className="space-y-6">
                        <h4 className="text-lg   w-100 font-caslon font-semibold tracking-wide">IS THIS TREATMENT SUITABLE FOR ME?</h4>
                        <div className="my-10">
                            <hr className="border-t-1 border-black" />
                        </div>
                        <h4 className="text-lg font-semibold font-caslon tracking-wide">WHAT RESULTS CAN I EXPECT?</h4>
                        <h4 className="text-lg font-semibold font-caslon tracking-wide">ARE THERE ANY RISKS?</h4>
                    </div>
                </div>


                <div className="rightDiv ">
                    <div className="bg-bgDarkGray p-6 font-caslon text-1xl  mb-6 mt-40">
                        <p>
                            We believe health and wellbeing should be balanced in order to achieve optimal beauty. Treatments are seen as ‘a journey to a new you’ and we support all clients with bespoke treatment plans to ensure you see the best results. Emphasis is placed on subtle balancing, restoring, and enhancing your natural beauty, to ensure you feel empowered to become the best version of you.
                        </p>
                    </div>

                </div>


            </div>

        </>
    )
}