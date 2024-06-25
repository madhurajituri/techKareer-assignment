import React from 'react'
import atlassian from '../images/atlassian.png'

function Footer() {
    const headings = ["Company size", "Sector", "Founded in", "Type", "Funding", "Founded by"];
    const answers = ["1k - 2k Employees", "Information Technology, Infrastructure", "2019", "Private", "Bootstrapped", "Scott Farquhar, Mike Cannon-Brookes"];
    return (
        <div className='pl-[100px] pt-[32px] pb-[36px]'>
            <div>
                <div className='p-[10px] pl-0 flex gap-[12px] items-center'>
                    <img src={atlassian} alt="logo"></img>
                    <div className='text-[#4F4F4F]'>Atlassian</div>
                </div>

                <div className='mt-4 flex gap-[48px]'>
                    <div className='flex flex-col gap-[24px]'>
                        {headings.slice(0, 3).map((item, index) => (
                            <div className='flex flex-col gap-[8px]'>
                                <div className='text-[14px] leading-[18.9px] text-[#6E6D6D]'>{item}</div>
                                <div className='text-[16px] text-[#3D3D3D] leading-[21.6px]'>{answers[index]}</div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                        {headings.slice(3).map((item, index) => (
                            <div className='flex flex-col gap-[8px]'>
                                <div className='text-[14px] leading-[18.9px] text-[#6E6D6D]'>{item}</div>
                                <div className='text-[16px] text-[#3D3D3D] leading-[21.6px]'>{answers.slice(3)[index]}</div>
                            </div>
                        ))}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer