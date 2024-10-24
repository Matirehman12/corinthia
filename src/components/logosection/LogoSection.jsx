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
          <div className="logoDiv grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
            <div className="flex justify-center">
              <Image src={logo4} alt="Logo 4" className='h-24 w-56' />
            </div>
            <div className="flex justify-center">
              <Image src={logo3} alt="Logo 3" className='h-24 w-56' />
            </div>
            <div className="flex justify-center">
              <Image src={logo5} alt="Logo 5" className='h-24 w-56' />
            </div>
            <div className="flex justify-center">
              <Image src={logo6} alt="Logo 6" className='h-24 w-56' />
            </div>
            <div className="flex justify-center">
              <Image src={logo2} alt="Logo 2" className='h-24 w-56' />
            </div>
            <div className="flex justify-center">
              <Image src={logo1} alt="Logo 1" className='h-24 w-56' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}