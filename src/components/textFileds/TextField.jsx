import React from 'react'

const TextField = ({ label, required, type = 'text', className,placeholder }) => {
    return (
        <div>
            <label className='font-caslon font-normal text-base leading-4'>{label}
                {required && <span className='text-yellowGradient'> *</span>}
            </label>
            <input type={type} placeholder={placeholder} className={`border border-[#D9D9D9] h-[60px] p-2 focus:outline-none w-full ${className}`} />
        </div>
    )
}

export default TextField