import React from 'react'

const TextArea = ({ label, required, className, rows, cols }) => {
    return (
        <div>
            <label className='font-caslon font-normal text-base leading-4'>{label}
                {required && <span className='text-yellowGradient'> *</span>}
            </label>
            <textarea
                rows={rows}
                cols={cols}
                className={`border border-[#D9D9D9] h-[60px] p-2 focus:outline-none w-full ${className}`} ></textarea>
        </div>
    )
}

export default TextArea