
import Image from "next/image";
import surgicalAsthetic1 from '../images/surgicalAsthetic1.svg'
import surgicalAsthetic2 from '../images/surgicalAsthetic2.svg'
import surgicalAsthetic3 from '../images/surgicalAsthetic3.svg'
import enhancementImg from '../images/enhancementImg.svg'
import bgImage from '../images/bgImage.svg'
import CustomCarousel from "@/components/carousel/CustomCarousel";
import Footer from "@/components/footer/Footer";



export default function Home() {

  return (
    <>
      <div>
        <video src="https://www.corinthia.com/globalassets/corinthia-global/videos/homepage-videos/brand-homepage---2024-v2.mp4"
          autoPlay
          muted
          preload="auto"
          loop="loop"
          className="h-[489px] w-full object-cover"></video>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="grid grid-cols-12">
            <div className=" col-span-4">
              <div className="surgical-asthetic ">

                <h4 className="text-6xl font-caslon font-normal mt-[80px]">
                  Award Winning <br />
                  Non surgical <br />
                  Aesthetic <br />
                  excellence
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>

            </div>
            <div className="col-span-8">
            </div>
            <div className="col-span-6">
              <Image
                src={surgicalAsthetic3}
                className="mt-[400px]"
              />
            </div>
            <div className=" col-span-6">
              <Image
                src={surgicalAsthetic2}
              />

            </div>

          </div>
        </div>
        <div className="col-span-4">
          <Image
            src={surgicalAsthetic1}
            className="mt-[80px]"
          />

        </div>
      </div>

      <div className="grid grid-cols-12 justify-center"
        style={{
          background: 'linear-gradient(316.72deg, #FFFFFF 39.95%, #A9A9A9 77.81%)'
        }}>
        <div className="enhencementDiv col-span-12 p-6 py-32 mt-20 flex flex-col items-center justify-center text-center h-[auto]">
          <h4 className="text-6xl font-normal  mb-6">
            TRANSFORMATIVE <br />
            ENHANCEMENTS

          </h4>
          <p className="text-1xl font-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.

          </p>
          <Image
            src={enhancementImg}
            width="1920px"
            height="331px"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <CustomCarousel />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-40 mx-20">
        <div className="image-container">
          <Image
            src={surgicalAsthetic3}
          />
        </div>
        <div className="image-container">

          <Image
            src={surgicalAsthetic2}
            className="mt-[400px]"
          />
        </div>
        <div className="image-container">
          <Image
            src={surgicalAsthetic1}
            className="mt-[800px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="leftDiv mx-20 mt-20">
          <h4 className="mb-5 text-6xl">TRUSTED SKIN EXPERTISE</h4>
          <p className="text-1xl">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </div>
        <div className="rightDiv">
          <Image
            src={bgImage}
          />
        </div>


      </div>
      <Footer />

    </>
  );
}
