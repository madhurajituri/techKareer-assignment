import React from 'react'
import jobs from '../images/briefcase-02.png'
import message from '../images/message.png'
import payments from '../images/coins-hand.png'
import bell from '../images/bell-02.png'
import atlassian from '../images/atlassian.png'
import downArrow from '../images/chevron-down.png'

function Navbar() {
    return (
        <div className='w-full h-[109px] p-[24px] pl-[40px]'>
            <div className='w-full h-full flex relative'>
                <div className='font-bold bg-[--border-grey] w-[100px] h-[61px] flex items-center justify-center text-[--primary]'>Logo</div>
                <div className='text-[#B0B0B0] left-[555px] absolute pl-[8px] h-[74px] pr-[23px] flex items-center rounded-[36px] border-[#D1D1D1] border-[0.5px]'>
                    <div className='rounded-[49px] bg-[--primary] border-[--border] border-2 w-[109px] h-[58px] flex items-center justify-center gap-[8px]'>
                        <img src={jobs} alt="jobs"></img>
                        <div className='text-white'>Jobs</div>
                    </div>
                    <div className='flex gap-[8px] relative ml-[65px]'>
                        <img src={message} alt="message" />
                        <div className='absolute rounded-full bg-[--primary] -top-[0.5px] left-[16px] h-[6px] w-[6px]'></div>
                        <div>Messages</div>
                    </div>
                    <div className='flex gap-[8px] relative ml-[65px]'>
                        <img src={payments} alt="payments" />
                        <div>Payments</div>
                    </div>
                </div>
                <div className='right-0 absolute w-[134px] flex h-[60px] px-[10px] gap-4 py-[14px] justify-between items-center'>
                    <img src={bell} alt="notifications"></img>
                    <div className='absolute rounded-full bg-[--primary] top-3 left-[32px] h-[6px] w-[6px]'></div>
                    <div className='flex items-center gap-[6px] w-full h-full'>
                        <img src={atlassian} alt="logo"></img>
                        <img src={downArrow} alt="down arrow"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar