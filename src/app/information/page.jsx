
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
export default function Information() {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 mx-20 my-10 gap-10">
                    <div className="img-container">
                        <Image
                            src={patientJourney}
                            width={705}
                            height={917}
                            alt="PatientJourney"
                            className="object-cover h-[705]"
                        />
                    </div>
                    <div className="img-content flex flex-col ml-20 mt-20">
                        <h1 className="text-5xl font-normal mb-5  font-caslon">PATIENT</h1>
                        <h1 className="text-5xl font-normal mb-5  font-caslon">JOURNEY</h1>
                        <div className="flex items-start">
                            <div className="border-l-2 border-gray-800 h-48 mr-5"></div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2 mx-20 mt-8 font-caslon">A JOURNEY TO A NEW YOU</h4>
                                <p className="mb-5  w-[60%] ml-20 font-caslon">
                                    Our medical director Charmelle believes health and wellbeing should be balanced in order to achieve optimal beauty. With a background in psychology, holistic health and healing, it is our goal to ensure all treatments performed protect the wellbeing of our clients. Focusing on subtle changes to the face and body can inspire us to lead a positive healthier lifestyle, which is fundamentally what we are about. Treatments are seen as ‘a journey to a new you’, and we support all clients with customised treatment plans and guidance to ensure they see optimum results. Emphasis is placed on subtle balancing, restoring, and enhancing beauty.
                                </p>
                                <h4 className="text-lg font-semibold mb-2 mx-20 font-caslon">LOOK GOOD & FEEL GOOD</h4>
                                <p className="mx-20 font-caslon">
                                    We realise the way that we look greatly affects our self-  confidence and body image perception. Feeling dissatisfied with our features, body, or skin can lead to depression, insecurity and withdrawal from certain situations and relationships. Often, aesthetic treatments can have a great impact on our psychological wellbeing and body confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-20">
                <div className="flex flex-row  gap-5 mx-20">
                    <div className="consultant-container bg-black h-[750px] w-[490px] flex flex-col justify-between p-4">
                        <h1 className="text-5xl mt-20 font-normal font-caslon text-white text-center">YOUR <br /> CONSULTANT</h1>
                        <p className="text-lg text-white  font-normal font-caslon mx-20">
                            <span className="text-xl">All </span>clients start with a medical lifestyle consultation virtually or in clinic. Your detailed medical and aesthetic history will be discussed, including your goals and desires. You can expect to have a face and skin analysis, these unique assessments will confirm which treatments are most suitable for you. We will discuss realistic outcomes and expectations from each treatment, as well as any lifestyle changes that may be suitable including referrals to our in-house team.
                        </p>
                        <button className="font-caslon font-normal px-20 mx-20  py-3 text-btnGolden border border-btnGolden mt-4">BOOK</button>
                    </div>
                    <hr class="border-t-2 font-bold border-gray-300 mt-80 w-[150px] my-4" />
                    <div className="flex flex-col items-center">


                        <div className="right-container  mt-20">
                            <Image src={consultantImg} className="" alt="ConsultantImg" />
                            <p className="font-normal ml-20  font-caslon mt-10">
                                Together a bespoke treatment plan will be devised to <br /> ensure you feel empowered to become the best version <br /> of you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 justify-center mt-20">
                <div className="treatment-container">
                    <Image
                        src={facialImg1}
                        alt="facialImg1"
                        className="h-[660px] ml-4"
                    />
                    <div className="flex items-center mt-10">
                        <hr className="border-l-2 border-gray-300 h-40 w-0 ml-10" />
                        <div className="ml-10">
                            <h1 className="text-4xl font-caslon font-normal text-center">YOUR TREATMENT</h1>
                            <p className="text-large font-caslon mx-60">
                                We strive to deliver excellence with a personal touch. All treatments are performed professionally and discretely by our expert team. We have implemented industry leading COVID-19 protocols and procedures, which we kindly ask you to follow.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="treaming-container flex flex-col">
                    <div className="imagesDiv flex">
                        <Image
                            src={facialImg2}
                            alt="facialImg2"
                            className="h-[660px]"
                        />
                        <Image
                            src={facialImg3}
                            alt="facialImg3"
                            className="h-[660px] ml-4"
                        />
                    </div>
                    <p className="text-large font-caslon mx-60 mt-20">
                        On entering the clinic, you will be required to use hand sanitisers,have your temperature taken and complete a questionnaire to update us on your health and wellbeing. All treatment rooms are sanitized between clientsfor your safety. We hope this helps you to feel comfortable to fully enjoy your experience with us.

                    </p>


                </div>


            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2  items-center">
                    {/* Left Section with Images */}
                    <div className="flex flex-row gap-5 items-center">
                        <Image
                            src={surgicalAsthetic2}
                            alt="surgicalAsthetic2"
                            className="h-[350px] object-cover"
                        />
                        <Image
                            src={surgicalAsthetic1}
                            alt="surgicalAsthetic1"
                            className="h-[350px] object-cover mt-80"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-center  text-center relative">
                        <hr className="border-t-2 border-gray-300 absolute top-1/2 transform -translate-y-1/2 left-[-125px] h-[80%] w-[312px] my-4" />
                        <div className="bg-darkGray  py-10 px-10   shadow-md  w-[50%]">
                            <h1 className="text-2xl  font-caslon items-center  mb-4">AFTER CARE</h1>
                            <p className="  w-[70%] text-large font-caslon mb-4">
                                Your aftercare will be discussed with your Practitioner following your treatment, you will also receive this by email. We are on hand to support your unique journey and welcome you to call or email us if you were to have any concerns. Including an out of hours emergency contact, for your complete reassurance.
                            </p>
                            <button className="font-caslon font-normal px-20 py-3 text-white border border-btnGolden hover:bg-transparent hover:text-btnGolden transition duration-300">
                               <span className="text-btnGolden"> BOOK</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsLetter mt-10">
                <NewsLetter />
            </div>
            <div className="logo-section">
                <LogoSection />
            </div>

        </>
    )
}