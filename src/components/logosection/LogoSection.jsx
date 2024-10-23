import logo1 from '../../images/logo1.svg';
import logo2 from '../../images/logo2.svg';
import logo3 from '../../images/logo3.svg';
import logo4 from '../../images/logo4.svg';
import logo5 from '../../images/logo5.svg';
import Image from "next/image";
export default function LogoSection(){
    return(
        <>
        
        <div className="grid grid-cols-1">
                <h1 className='text-5xl text-center'>FEATURED IN</h1>
                <div className="logoDiv flex justify-center aligns-center mt-10">
                    <Image
                    src={logo1}
                     />
                      <Image
                    src={logo2}
                     />
                      <Image
                    src={logo3}
                     />
                      <Image
                    src={logo4}
                     />
                      <Image
                    src={logo5}
                     />
                    
                </div>
            </div>
        </>
    )
}