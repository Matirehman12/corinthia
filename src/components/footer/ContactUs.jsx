'use client'
import { svgIcons } from '@/images'
import { localization } from '@/localization'
import TextField from '../textFileds/TextField'
import TextArea from '../textFileds/TextArea'
import Button from '../header/Button'

const ContactUs = () => {
    return (
        <>
            <div className='grid grid-cols-12 px-5'>
                <div className="xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12">
                    <div className="card bg-customGradient p-5 md:pt-[100px] border rounded-[12px] border-[#D9D9D9] xl:ms-[100px]">
                        <div className="card-body md:p-20 py-50">
                            <div className='mb-10'>
                                <h4 className='font-normal font-optima text-lg uppercase text-yellowGradient mb-2'>{localization.getInTouch}</h4>
                                <h3 className='font-normal font-caslon md:text-6xl text-3xl text-black'>{localization.contactUs}</h3>
                                <p className='font-normal font-caslon md:text-lg text-base leading-relaxed text-gray md:w-96 w-full'>{localization.dummyText}</p>
                            </div>

                            <div>
                                <div className='flex items-center gap-5 mb-10'>
                                    {svgIcons.emailIcon}
                                    <div>
                                        <p className='font-normal font-caslon md:text-lg text-base text-gray mb-0 leading-5 uppercase'>{localization.ourEmailAddress}</p>
                                        <p className='font-normal font-caslon md:text-2xl text-base text-black mb-0'>{localization.exampleEmail}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mb-10'>
                                    {svgIcons.phoneIcon}
                                    <div>
                                        <p className='font-normal font-caslon md:text-lg text-base text-gray mb-0 leading-5 uppercase'>{localization.ourPhoneNumber}</p>
                                        <p className='font-normal font-caslon md:text-2xl text-base text-black mb-0'>{localization.dummyNumber}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mb-10'>
                                    {svgIcons.addressIcon}
                                    <div>
                                        <p className='font-normal font-caslon md:text-lg text-base text-gray mb-0 leading-5 uppercase'>{localization.ourClinicAddress}</p>
                                        <p className='font-normal font-caslon md:text-2xl text-base text-black mb-0'>{localization.dummyAddress}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-10 col-span-12 md:mt-0 mt-5">
                    <div className='border border-[#D9D9D9]  p-10  relative xl:right-[243px] lg:top-[100px] xl:w-full lg:right-20 lg:w-[400px] md:right-[-60px] md:top-[-100px]  bg-white rounded-[12px]'>
                        <form>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                                <TextField
                                    label={localization.firstName}
                                    required
                                />
                                <TextField
                                    label={localization.lastName}
                                    required
                                />
                                <TextField
                                    type='number'
                                    label={localization.phoneNumber}
                                    required
                                />
                                <TextField
                                    type='email'
                                    label={localization.emailAddress}
                                    required
                                />
                                <TextField
                                    label={localization.country}
                                    required
                                />
                                <TextField
                                    label={localization.address}
                                    required
                                />
                            </div>
                            <div className='grid col-1 mt-5'>
                                <TextArea
                                    label={localization.message}
                                    required
                                />

                                <button className='bg-yellowGradient h-[60px] font-caslon font-normal text-lg leading-5 mt-5 uppercase pt-2'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactUs