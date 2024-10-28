import React from 'react'

const FAQComponent = ({ accordianHeader, accordianBodyText, accordianId, isOpen, onToggle }) => {
  return (
    <div className="container-fluid mx-auto">
      <div className="grid grid-cols-1">
        <div>
          <h2 id={`accordion-collapse-heading-${accordianId}`}>
            <button
              type="button"
              className={`flex items-center rounded-none justify-between w-full font-medium text-gray-500 pb-0 border-b-0
                ${isOpen ? 'border-b-2 bg-transparent' : ' border-gray-200 hover:bg-gray-100'}
              `}
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={`accordion-collapse-body-${accordianId}`}
            >
              <span className="text-lg text-black w-100 font-caslon font-normal tracking-wide mt-10">
                {accordianHeader}
              </span>
            </button>
           
          </h2>
          <div
            id={`accordion-collapse-body-${accordianId}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
            aria-labelledby={`accordion-collapse-heading-${accordianId}`}
          >
            <div className='flex justify-end'>
              <p className="bg-bgDarkGray font-caslon text-gray text-1xl p-16 w-[50%]">
                {accordianBodyText}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQComponent