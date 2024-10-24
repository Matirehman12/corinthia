import Image from "next/image";
import TextField from "../textFileds/TextField";
import newsLettBG from '@/images/newsLetterBgImg.svg'
import { localization } from "@/localization";
export default function NewsLetter() {
    return (
        <>
            <div className="relative">
                <div className="grid  justify-center items-center">
                    <div className="me-32 mt-28">
                        <div className="header text-center mt-28 ">
                            <h1 className="text-[64px] font-caslon bg-lightGray w-auto py-10 px-16 pt-16">{localization.treatment2.stayInTheLoop}</h1>
                        </div>
                        <p className="mt-3 text-2xl font-caslon font-normal">{localization.treatment2.signUpToTheCorinthiaNewsletter}</p>

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

                        <div className="flex">
                            <button className="text-2xl font-caslon text-end border-b-2 w-[50px] text-black mt-10 me-32 ms-auto px-0 py-0 uppercase">{localization.treatment2.submit} </button>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-28">
                    <Image src={newsLettBG} />
                </div>
            </div>
        </>
    )
}