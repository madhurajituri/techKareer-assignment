import React from 'react'
import figma from '../images/figma.png'
import adobeIllustrator from '../images/adobeIllustrator.png'
import adobeXD from '../images/adobeXD.png'

function Skills() {
    const logo = {
        "logoImg": [figma, adobeIllustrator, adobeXD],
        "logoNames": ["Figma", "Adobe Illustrator", "Adobe XD"]
    }

    return (
        <div>
            <div className='ml-[100px] my-[32px] flex gap-16 h-[115px]'>
                <div className='w-[170px] gap-[8px] flex flex-col'>

                    <div className='text-[#6E6D6D] text-[14px] leading-[18.9px]'>Skills Required</div>
                    {logo.logoImg.map((img, index) => (
                        <div key={index} className="px-[6px] py-[4px] flex gap-[4px] items-center w-fit border-[1px] border-[#D0D5DD] rounded-sm">
                            <img src={img} alt={logo.logoNames[index]} className="skill-logo" />
                            <div className="text-[12px] leading-[16.2px] text-[#344054]">{logo.logoNames[index]}</div>
                        </div>
                    ))}

                </div>

                <div className='w-[170px]'>
                    <div className='text-[#6E6D6D] text-[14px] leading-[18.9px]'>Preferred Language</div>
                    <div className='text-[16px] font-semibold leading-[21.6px]'>English</div>
                </div>

                <div className='w-[170px]'>
                    <div className='text-[#6E6D6D] text-[14px] leading-[18.9px]'>Type</div>
                    <div className='text-[16px] font-semibold leading-[21.6px]'>Full Time</div>
                </div>

                <div className='w-[170px]'>
                    <div className='text-[#6E6D6D] text-[14px] leading-[18.9px]'>Years of Experience</div>
                    <div className='text-[16px] font-semibold leading-[21.6px]'>3+ Years of Experience</div>
                </div>

            </div>
            
            <div className='w-full h-[1px] bg-[--border-grey]'></div>
        </div>
    )
}

export default Skills