import logo1 from '../../images/logo1.svg';
import logo2 from '../../images/logo2.svg';
import logo3 from '../../images/logo3.svg';
import logo4 from '../../images/logo4.svg';
import logo5 from '../../images/logo5.svg';
import logo6 from '../../images/logo6.svg';
import Image from "next/image";
export default function LogoSection() {
    return (
        <>

            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <h1 className='text-5xl text-center'>FEATURED IN</h1>
                    <div className="logoDiv flex  mt-10">
                        <Image
                            src={logo4}
                            alt='logo4'

                        />
                        <Image
                            src={logo3}
                            alt='logo3'
                        />
                        <Image
                            src={logo5}
                            alt='logo5'

                        />
                        <Image
                            src={logo6}
                            alt='logo6'
                        />

                        <Image
                            src={logo2}
                            alt='logo2'
                        />
                        <Image
                            src={logo1}
                            alt='logo1'
                        />



                    </div>
                </div>
            </div>

        </>
    )
}