import Footer from "@/components/footer/Footer";
import Image from "next/image";

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
              <h4 className="text-6xl font-caslon font-normal">
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
        </div>
        <div className="col-span-4">
          sasa
        </div>
      </div>
      
    </>
  );
}
