import React from 'react'
import ContactUs from './ContactUs'
import { svgIcons } from '@/images'
import Logo from '@/images/logo.svg'
import Image from 'next/image'
// import footerBg from '@/images/footer-bg.svg'
const Footer = () => {
    return (
        <div className='footer-bg relative z-10'>
            <div>
                <ContactUs />
                <footer className=" dark:bg-gray-900 mt-20">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        {/* <div className="md:flex md:justify-between"> */}

                        <div className="grid md:grid-cols-12  ">
                            <div className='md:col-span-8 flex gap-20'>
                                <div>
                                    <h2 className="mb-6 font-medium	uppercase text-slate-700 text-2xl font-caslon">Explore</h2>
                                    <ul className="text-lg font-caslon font-normal text-slate-600">
                                        <li>
                                            <a href="#" className="hover:underline">Home</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:underline">Our programs</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:underline">About</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:underline">The founders</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 ont-medium uppercase text-slate-700 text-2xl font-caslon">Connect</h2>
                                    <ul className="text-lg font-caslon font-normal text-slate-600">
                                        <li>
                                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Contact us</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:underline">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:col-span-4 mb-6 md:mb-0">
                                <a href="#" className="flex items-center gap-4">
                                    <span className="font-normal font-caslon text-2xl text-slate-700">Social:</span>
                                    <div className='flex items-center gap-3'>
                                        {svgIcons.facebookIcon}
                                        {svgIcons.instagramIcon}
                                        {svgIcons.linkdenIcon}
                                    </div>
                                </a>
                            </div>

                        </div>
                        {/* </div> */}
                        <div className='md:flex items-center gap-5 py-5 pt-10'>
                            <Image
                                src={Logo}
                                alt="brand logo"
                                width={180}
                                height={38}
                                priority
                            />
                            <p className='font-normal font-caslon text-base text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="sm:flex sm:items-center sm:justify-between mt-32">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-caslon">© 2024   <a href="https://flowbite.com/" className="hover:underline text-yellowGradient">Corinthia Clinic</a>. All Rights Reserved.
                            </span>
                            <div className='flex items-center gap-3'>
                                {svgIcons.powerddBy}
                                <h4 className='font-semibold text-base'>Powered By Managed</h4>
                            </div>
                            <div className="flex mt-4 gap-4 sm:justify-center sm:mt-0 text-slate-400 font-caslon font-normal">
                                <p>Terms of use</p> | <p>Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* <div className='absolute bottom-0 -z-10'>
                <Image src={footerBg}
                    alt='footerBg'
                />
            </div> */}
        </div>
    )
}

export default Footer