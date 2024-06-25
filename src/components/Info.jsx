import React from 'react'

function Info() {
    const about = ["Handle the UI/UX research design", "Work on researching on latest web applications designs & trends", "Work on conceptualizing and visualizing", "Work on creating graphics content and other graphic related works"];
    const info = {
        Benefits: ["Health insurance", "Provident Fund"],
        Schedule: ["Day shift"],
        Supplemental: ["Performance bonus", "Yearly bonus"]
    }
    return (
        <div>

            <div className='px-[100px] py-8 '>

                <div className='text-[14px] leading-[18.9px] text-[#6E6D6D]'>About the job</div>

                <div className='mt-2 w-[526px] text-[#3D3D3D]'>

                    <ol style={{ listStyleType: 'decimal' }} className='pl-3'>
                        {about.map((item, index) => (
                            <li key={index} className='text-[16px] leading-7'>{item}</li>
                        ))}
                    </ol>

                    <div className='text-[16px] leading-7'>Benefits:</div>
                    <ul style={{ listStyleType: 'disc' }} className='pl-4'>
                        {info.Benefits.map((benefit, index2) => (
                            <li key={index2} className='text-[16px] leading-7'>{benefit}</li>
                        ))}
                    </ul>

                    <div className='text-[16px] leading-7'>Schedule:</div>
                    <ul style={{ listStyleType: 'disc' }} className='pl-4'>
                        {info.Schedule.map((benefit, index2) => (
                            <li key={index2} className='text-[16px] leading-7'>{benefit}</li>
                        ))}
                    </ul>

                    <div className='text-[16px] leading-7'>Supplemental pay types:</div>
                    <ul style={{ listStyleType: 'disc' }} className='pl-4'>
                        {info.Supplemental.map((benefit, index2) => (
                            <li key={index2} className='text-[16px] leading-7'>{benefit}</li>
                        ))}
                    </ul>

                    <div className='text-[16px] leading-7'>Work Location: In person</div>

                </div>
            </div>
            <div className='w-full h-[1px] bg-[--border-grey]'></div>
        </div>
    )
}

export default Info