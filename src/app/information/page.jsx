
import Image from "next/image";
import patientJourney from '../../images/patientJourney.svg'
import consultantImg from '../../images/consultantImg.svg'
import facialImg1 from '../../images/facialImg1.svg'
import facialImg2 from '../../images/facialImg2.svg'
import facialImg3 from '../../images/facialImg3.svg'
import surgicalAsthetic2 from '../../images/surgicalAsthetic2.svg'
import surgicalAsthetic1 from '../../images/surgicalAsthetic1.svg'
import NewsLetter from "@/components/newsletter/NewsLetter";
import LogoSection from "@/components/logosection/LogoSection";
import { localization } from "@/localization";
import Footer from "@/components/footer/Footer";
import treatment1TopLines from '@/images/treatment1TopLines.svg'

export default function Information() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 mx-5 md:mx-20 my-10 gap-10">
                    <div className="img-container">
                        <Image
                            src={patientJourney}
                            width={705}
                            height={917}
                            alt="PatientJourney"
                            className="object-cover h-[705]"
                        />
                    </div>
                    <div className="img-content flex flex-col xl:ml-20 mt-20">
                        <h1 className="text-5xl font-normal mb-5  font-caslon text-black">{localization.information.patient}</h1>
                        <h1 className="text-5xl font-normal mb-5  font-caslon text-black">{localization.information.journey}</h1>
                        <div className="flex items-start">
                            <div className="border-l-2 border-black h-48 mr-5"></div>
                            <div>
                                <h4 className="text-2xl font-normal mb-2 xl:mx-20 mt-8 font-caslon text-black">{localization.information.aJourneyToANewYou}</h4>
                                <p className="mb-5 xl:w-[72%] xl:ml-20 txet-lg font-normal text-black font-caslon">
                                    {localization.information.ourMedicalDirector}
                                </p>
                                <h4 className="text-2xl font-normal mb-2 xl:mx-20 font-caslon text-black">{localization.information.lookGoodFeelGood}</h4>
                                <p className="xl:mx-20 txet-lg font-normal text-black font-caslon xl:w-[72%]">
                                    {localization.information.weRealiseTheWay}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-24">
                <div className="lg:flex flex-row  gap-5 md:mx-20">
                    <div className="consultant-container bg-black pb-20 md:w-[490px] flex flex-col justify-between p-4">
                    <h1 className="text-[32px] mt-20 font-normal font-caslon text-white text-center uppercase md:px-20">{localization.information.yourContant}</h1>
                        <p className="text-lg text-white  font-normal font-caslon xl:mx-16">
                            <span className="text-xl">All </span>{localization.information.clientsStartWithAMedicalLifestyle}
                        </p>
                        <button className="font-caslon font-normal px-20 md:mx-20 pt-4 py-3 text-btnGolden border border-btnGolden mt-4">{localization.information.book}</button>
                    </div>
                    <hr class="border-t-2 font-bold border-gray-300 mt-20 lg:mt-80 w-[150px] my-4" />
                    <div className="flex flex-col items-center">


                        <div className="right-container  mt-20">
                            <Image src={consultantImg} className="" alt="ConsultantImg" />
                            <p className="font-normal mx-5 xl:ml-20   font-caslon mt-10 xl:w-[48%] text-black">
                                {localization.information.togetherBespoke}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-24">
                        <Image
                            src={facialImg1}
                            alt="facialImg1"
                            className="lg:h-[660px]"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 mt-10 lg:mt-24">
                        <Image
                            src={facialImg2}
                            alt="facialImg2"
                            className="lg:h-[660px] w-full"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 mt-10 lg:mt-24">
                        <Image
                            src={facialImg3}
                            alt="facialImg3"
                            className="lg:h-[660px] w-full"
                        />
                    </div>
                </div>
                <div className="grid xl:grid-cols-2">
                    <div className="flex items-center gap-5 xl:gap-20 mt-10 px-5 lg:ps-44">
                        <hr className="border-l-2 border-gray-300 h-40 w-0 2xl:ml-10 text-black" />
                        <div className="2xl:ml-10">
                            <h1 className="text-4xl font-caslon font-normal mb-8 text-black">{localization.information.yourTreatment}</h1>
                            <p className="text-lg font-caslon 2xl:w-[77%] text-black">
                                {localization.information.weStriveToDeliverExcellence}
                            </p>
                        </div>
                    </div>
                    <p className="text-lg font-caslon  mx-5  lg:ms-52 xl:mx-44 xl:ms-20 xl:ps-6 2xl:ms-24 pt-7 2xl:mx-72 lg:mt-20 text-black">
                        {localization.information.onEnteringTheClinic}

                    </p>
                </div>
                <Image src={treatment1TopLines} alt='topLines' className='absolute top-72 -z-10' />


            </div>
            <div className="container mx-auto md:px-4">
                <div className="md:grid md:grid-cols-12  items-center">
                    {/* Left Section with Images */}
                    <div className="col-span-12 lg:col-span-6 gap-5 items-center relative">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-6">
                                <Image
                                    src={surgicalAsthetic2}
                                    alt="surgicalAsthetic2"
                                    className="h-[350px] object-cover"
                                />
                            </div>
                            <div className="col-span-6">
                                <Image
                                    src={surgicalAsthetic1}
                                    alt="surgicalAsthetic1"
                                    className="h-[350px] object-cover mt-52"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex col-span-6 md:w-[70%] md:ms-28 mt-52">
                        <hr className="border-t-2 border-gray-300 absolute ms-[-300px] mt-20 w-[300px] my-4 text-black" />
                        <div className="md:flex justify-end">
                            <div className="bg-darkGray p-20 lg:p-16 xl:p-24 2xl:p-36  shadow-md ">
                                <h1 className="text-2xl  font-caslon text-start	mb-4 uppercase text-black">{localization.information.afterCare}</h1>
                                <p className="text-lg  font-normal text-start  font-caslon mb-4 text-black">
                                    {localization.information.yourAftercareWillBeDiscussed}
                                </p>
                                <button className="font-caslon font-normal w-full px-20 py-3 text-white border border-btnGolden hover:bg-transparent hover:text-btnGolden transition duration-300">
                                    <span className="text-btnGolden">{localization.information.book}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsLetter mt-20 relative">
                <NewsLetter />
                <Image src={treatment1TopLines} alt='topLines' className='absolute top-0 -z-10' />

            </div>
            <div className="logo-section md:mt-36 lg:mt-96">
                <LogoSection />
            </div>

            <div className="mt-20">
                <Footer />
            </div>

        </>
    )
}