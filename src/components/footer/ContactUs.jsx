'use client'
import { svgIcons } from '@/images'
import { localization } from '@/localization'

const ContactUs = () => {
    return (
        <>
            <div className='grid grid-cols-1'>
                <div className="card bg-customGradient p-5 border-1 rounded border-[#D9D9D9]">
                    <div className="card-body p-20 py-50">
                        <div className='mb-10'>
                            <h4 className='font-normal font-optima text-lg uppercase text-yellowGradient'>{localization.getInTouch}</h4>
                            <h3 className='font-normal font-caslon text-6xl text-black'>{localization.contactUs}</h3>
                            <p className='font-normal font-caslon text-lg leading-relaxed text-gray'>{localization.dummyText}</p>
                        </div>

                        <div>
                            <div className='flex items-center gap-3 mb-10'>
                                {svgIcons.emailIcon}
                                <div>
                                    <p className='font-normal font-caslon text-lg text-gray mb-0 leading-5 uppercase'>{localization.ourEmailAddress}</p>
                                    <p className='font-normal font-caslon text-2xl text-black'>{localization.exampleEmail}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mb-10'>
                                {svgIcons.phoneIcon}
                                <div>
                                    <p className='font-normal font-caslon text-lg text-gray mb-0 leading-5 uppercase'>{localization.ourPhoneNumber}</p>
                                    <p className='font-normal font-caslon text-2xl text-black'>{localization.dummyNumber}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mb-10'>
                                {svgIcons.addressIcon}
                                <div>
                                    <p className='font-normal font-caslon text-lg text-gray mb-0 leading-5 uppercase'>{localization.ourClinicAddress}</p>
                                    <p className='font-normal font-caslon text-2xl text-black'>{localization.dummyAddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactUs