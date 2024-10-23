
import Image from "next/image";
import patientJourney from '../../images/patientJourney.svg'
export default function Information() {
    return (
        <>
            <div className="grid grid-cols-2 mx-20 my-10 gap-10">
                <div className="img-container">
                    <Image
                        src={patientJourney}
                        width={705}
                        height={917}
                        alt="Patient Journey"
                        className="object-cover"
                    />
                </div>
                <div className="img-content flex flex-col ml-10">
                    <h1 className="text-4xl font-bold mb-5">PATIENT <br /> JOURNEY</h1>
                    <div className="flex items-start">
                        <div className="border-l-2 border-gray-800 h-48 mr-5"></div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2 mx-20 mt-8">A JOURNEY TO A NEW YOU</h4>
                            <p className="mb-5 mx-20">
                                Our medical director Charmelle believes health and wellbeing should be balanced in order to achieve optimal beauty. With a background in psychology, holistic health and healing, it is our goal to ensure all treatments performed protect the wellbeing of our clients. Focusing on subtle changes to the face and body can inspire us to lead a positive healthier lifestyle, which is fundamentally what we are about. Treatments are seen as ‘a journey to a new you’, and we support all clients with customised treatment plans and guidance to ensure they see optimum results. Emphasis is placed on subtle balancing, restoring, and enhancing beauty.
                            </p>
                            <h4 className="text-lg font-semibold mb-2 mx-20">LOOK GOOD & FEEL GOOD</h4>
                            <p className="mx-20">
                                We realise the way that we look greatly affects our self-confidence and body image perception. Feeling dissatisfied with our features, body, or skin can lead to depression, insecurity and withdrawal from certain situations and relationships. Often, aesthetic treatments can have a great impact on our psychological wellbeing and body confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}