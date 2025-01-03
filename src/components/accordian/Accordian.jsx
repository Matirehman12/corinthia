import expandImg from '../../images/expandImg.svg';
import Image from "next/image";

function Accordion({ accordianHeader, accordianBodyText, accordianId, isOpen, onToggle }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 mx-5">
        <div className="border border-black">
          <h2 id={`accordion-collapse-heading-${accordianId}`}>
            <button
              type="button"
              className={`flex items-center rounded-none justify-between w-full p-5 font-medium text-gray-500 pb-0 text-black
                ${isOpen ? 'border-b-0 bg-transparent' : ' border-black-200 hover:bg-gray-100'}
              `}
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={`accordion-collapse-body-${accordianId}`}
            >
              <span className="text-2xl font-caslon text-center flex flex-col justify-center items-center w-full pt-7">
                {accordianHeader}
              </span>
            </button>
            {!isOpen &&
              <div className="flex justify-center items-center">
                <Image
                  src={expandImg}
                  alt="expandImg"
                  className="relative top-[20px] cursor-pointer"
                  onClick={onToggle}
                  aria-expanded={isOpen}
                />
              </div>
            }
          </h2>
          <div
            id={`accordion-collapse-body-${accordianId}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-500 opacity-100" : "max-h-0 opacity-0"}`}
            aria-labelledby={`accordion-collapse-heading-${accordianId}`}
          >
            <div className="p-5 text-center items-center">
              <p className="text-lg font-normal font-caslon w-[67%] mx-auto items-center text-center text-black">
                {accordianBodyText}
              </p>
              {isOpen && (
                <div className="flex justify-center items-center">
                  <Image
                    src={expandImg}
                    alt="expandImg"
                    className="absolute z-20 mt-[40px] cursor-pointer"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
