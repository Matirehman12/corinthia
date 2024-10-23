"use client"; // Mark the component as a client component

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import surgicalAsthetic3 from '../../images/surgicalAsthetic3.svg'; // Your images
import containerImg5 from '../../images/containerImg5.svg';
import surgicalAsthetic2 from '../../images/surgicalAsthetic2.svg';
import surgicalAsthetic1 from '../../images/surgicalAsthetic1.svg';
import containerImg2 from '../../images/containerImg2.svg';

const images = [
  surgicalAsthetic3,
  containerImg5,
  surgicalAsthetic2,
  surgicalAsthetic1,
  containerImg2,
  surgicalAsthetic3,
  containerImg5,
  surgicalAsthetic2,
  surgicalAsthetic1,
  containerImg2,
  surgicalAsthetic1,
  containerImg2,
  surgicalAsthetic3,
  containerImg5,
  surgicalAsthetic2,
  surgicalAsthetic1,
  containerImg2,
  containerImg2,

];

// Responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ReactMultiCarousel() {
  return (
    <div className="relative overflow-hidden grid grid-cols-1">
      <Carousel responsive={responsive} draggable={true}  sliderClass="gap-3">
      {images.map((image, index) => (
        // <div className="image-container w-full flex-shrink-0" key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            height={250}
            width={233}
            className="h-[250px]  object-cover rounded-[10px] "
            // style={{ height: '300px' }}
          />
        // </div>
      ))}
    </Carousel>
    </div>
  );
}
