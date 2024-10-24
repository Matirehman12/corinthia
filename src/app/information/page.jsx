
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
export default function Information() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 mx-20 my-10 gap-10">
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
                        <h1 className="text-5xl font-normal mb-5  font-caslon">{localization.information.patient}</h1>
                        <h1 className="text-5xl font-normal mb-5  font-caslon">{localization.information.journey}</h1>
                        <div className="flex items-start">
                            <div className="border-l-2 border-gray-800 h-48 mr-5"></div>
                            <div>
                                <h4 className="text-2xl font-normal mb-2 xl:mx-20 mt-8 font-caslon">{localization.information.aJourneyToANewYou}</h4>
                                <p className="mb-5 xl:w-[72%] xl:ml-20 txet-lg font-normal text-black font-caslon">
                                    {localization.information.ourMedicalDirector}
                                </p>
                                <h4 className="text-2xl font-normal mb-2 xl:mx-20 font-caslon">{localization.information.lookGoodFeelGood}</h4>
                                <p className="xl:mx-20 txet-lg font-normal text-black font-caslon xl:w-[72%]">
                                    {localization.information.weRealiseTheWay}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-24">
                <div className="lg:flex flex-row  gap-5 mx-20">
                    <div className="consultant-container bg-black h-[750px] md:w-[490px] flex flex-col justify-between p-4">
                        <h1 className="text-5xl mt-20 font-normal font-caslon text-white text-center">{localization.information.yourContant}</h1>
                        <p className="text-lg text-white  font-normal font-caslon xl:mx-16">
                            <span className="text-xl">All </span>{localization.information.clientsStartWithAMedicalLifestyle}
                        </p>
                        <button className="font-caslon font-normal px-20 mx-20  py-3 text-btnGolden border border-btnGolden mt-4">{localization.information.book}</button>
                    </div>
                    <hr class="border-t-2 font-bold border-gray-300 mt-20 lg:mt-80 w-[150px] my-4" />
                    <div className="flex flex-col items-center">


                        <div className="right-container  mt-20">
                            <Image src={consultantImg} className="" alt="ConsultantImg" />
                            <p className="font-normal xl:ml-20  font-caslon mt-10 xl:w-[48%]">
                                {localization.information.togetherBespoke}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6 mt-24">
                    <Image
                        src={facialImg1}
                        alt="facialImg1"
                        className="h-[660px] object-cover"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 mt-24">
                    <Image
                        src={facialImg2}
                        alt="facialImg2"
                        className="h-[660px] w-full object-cover"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 mt-24">
                    <Image
                        src={facialImg3}
                        alt="facialImg3"
                        className="h-[660px] w-full object-cover"
                    />
                </div>
            </div>
            <div className="grid xl:grid-cols-2">
                <div className="flex items-center gap-20 mt-10 md:ps-44">
                    <hr className="border-l-2 border-gray-300 h-40 w-0 ml-10" />
                    <div className="ml-10">
                        <h1 className="text-4xl font-caslon font-normal mb-8">{localization.information.yourTreatment}</h1>
                        <p className="text-lg font-caslon w-[77%]">
                            {localization.information.weStriveToDeliverExcellence}
                        </p>
                    </div>
                </div>
                <p className="text-lg font-caslon md:ms-52 lg:mx-60 mt-20">
                    {localization.information.onEnteringTheClinic}

                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12  items-center">
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
                        <hr className="border-t-2 border-gray-300 absolute ms-[-300px] mt-20 w-[300px] my-4" />
                        <div className="md:flex justify-end">
                            <div className="bg-darkGray p-20 md:p-36  shadow-md ">
                                <h1 className="text-2xl  font-caslon text-start	mb-4 uppercase">{localization.information.afterCare}</h1>
                                <p className="text-lg  font-normal text-start  font-caslon mb-4">
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

            <div className="newsLetter mt-20">
                <NewsLetter />
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