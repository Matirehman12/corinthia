import Image from "next/image";
import TextField from "../textFileds/TextField";
import newsLettBG from '@/images/newsLetterBgImg.svg'
import { localization } from "@/localization";
export default function NewsLetter() {
    return (
        <>
            <div className="relative">
                <div className="grid  justify-center items-center">
                    <div className="lg:me-32 mt-28">
                        <div className="header text-center mt-28 ">
                            <h1 className="text-3xl md:text-[64px] font-caslon bg-lightGray w-auto py-10 px-16 pt-16 text-black">{localization.treatment2.stayInTheLoop}</h1>
                        </div>
                        <form>
                            <div className="m-5">
                                <p className="mt-3 text-xl md:text-2xl font-caslon font-normal text-black">{localization.treatment2.signUpToTheCorinthiaNewsletter}</p>

                                <div className="grid grid-cols-12 gap-5 mt-3 items-center">
                                    <div className="col-span-6">
                                        <TextField
                                            className='border-black'
                                            placeholder='Name' />
                                    </div>
                                    <div className="col-span-6">
                                        <TextField
                                            className='border-black'
                                            placeholder="Email(required)"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex mb-5">
                                <button className="text-2xl font-caslon text-end border-b-4 w-[80px] text-black mt-10 me-32 ms-auto px-0 py-0 uppercase">{localization.treatment2.submit} </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute top-0 right-28 -z-10">
                    <Image src={newsLettBG} />
                </div>
            </div>
        </>
    )
}