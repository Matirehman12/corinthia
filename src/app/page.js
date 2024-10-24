
import Image from "next/image";
import surgicalAsthetic1 from '../images/surgicalAsthetic1.svg'
import surgicalAsthetic2 from '../images/surgicalAsthetic2.svg'
import surgicalAsthetic3 from '../images/surgicalAsthetic3.svg'
import enhancementImg from '../images/enhancementImg.svg'
import bgImage from '../images/bgImage.svg'
import CustomCarousel from "@/components/carousel/CustomCarousel";
import Footer from "@/components/footer/Footer";
import bottomLines from '../images/bottomLines.svg'
import topLines from '../images/topLines.svg'
import { localization } from "@/localization";



export default function Home() {

  return (
    <>
      <div className="mt-20">
        <video src="https://www.corinthia.com/globalassets/corinthia-global/videos/homepage-videos/brand-homepage---2024-v2.mp4"
          autoPlay
          muted
          preload="auto"
          loop="loop"
          className="h-[489px] w-full object-cover"></video>
      </div>
      <div className="relative">
        <div className="absolute top-0">
          <Image
            src={topLines}
            alt="top-lines"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-12 gap-10 xl:px-20 bottom-lines relative z-10">
          <div className="col-span-10 md:col-span-8">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-10 lg:ps-40 md:ps-20">
                <div className="surgical-asthetic mx-3">
                  <h4 className="text-4xl md:text-6xl font-caslon font-normal mt-[80px] md:w-[75%] uppercase">
                    {localization.awardWinningNonSurgical}
                  </h4>
                  <p className="font-base font-caslon font-gray md:w-[55%]">
                    {localization.dummyText2}
                  </p>
                </div>

              </div>
              {/* <div className="col-span-8"></div> */}
              <div className="col-span-10 md:col-span-6">
                <Image
                  src={surgicalAsthetic3}
                  alt="surgicalAsthetic3"
                  className="md:mt-[400px] w-full mx-3 sticky top-0 z-20"
                />
              </div>
              <div className="col-span-10 md:col-span-6">
                <Image
                  src={surgicalAsthetic2}
                  alt="surgicalAsthetic2"
                  className="w-full mx-3 sticky top-0 z-20"
                />

              </div>

            </div>
          </div>
          <div className="col-span-10 md:col-span-4">
            <Image
              src={surgicalAsthetic1}
              alt="surgicalAsthetic1"
              className="md:mt-[80px] w-full mx-3 sticky top-0 z-20"
            />
          </div>
        </div>
        <div className="absolute bottom-[-80px]">
          <Image
            src={bottomLines}
            alt="bootomLines"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 justify-center mt-20"
        style={{
          background: 'linear-gradient(327.72deg, #FFFFFF 43.95%, #A9A9A9 141.81%)'
        }}>
        <div className="enhencementDiv col-span-12 p-6 py-32 mt-20 flex flex-col items-center justify-center text-center h-[auto]">
          <h4 className="text-3xl md:text-6xl font-normal font-caslon text-[#2C2C2C] mb-6 md:w-[50%]">
            {localization.transformativeEnhancement}
          </h4>
          <p className="text-1xl font-normal font-caslon text-gray mb-6 md:w-1/2">
            {localization.dummyText3}
          </p>
          <Image
            src={enhancementImg}
            alt="enhancementImg"
            width="1920px"
            height="331px"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 ps-3">
        <CustomCarousel />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-40 mx-20">
        <div className="image-container">
          <Image
            src={surgicalAsthetic3}
            alt="surgicalAsthetic3"
            className="sticky top-0 z-20"
          />
        </div>
        <div className="image-container">

          <Image
            src={surgicalAsthetic2}
            alt="surgicalAsthetic2"
            className="md:mt-[400px] w-full sticky top-0 z-20"
          />
        </div>
        <div className="image-container">
          <Image
            src={surgicalAsthetic1}
            alt="surgicalAsthetic1"
            className="md:mt-[800px] sticky top-0 z-20"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:relative lg:top-[-340px]">
        <div className="leftDiv mx-10 lg:mx-20 mt-20 z-40">
          <h4 className="mb-5 text-3xl md:text-6xl font-caslon">{localization.trustedSkinExpertise}</h4>
          <p className="text-2xl font-caslon text-gray lg:w-[80%]">{localization.dummyText4} </p>
        </div>
        <div className="relative right-[50px]">
          <Image
            alt="bgImage"
            src={bgImage}
          />
        </div>
      </div>
      <div className="relative lg:top-[-340px]">
        <div className="absolute lg:top-[-100px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
