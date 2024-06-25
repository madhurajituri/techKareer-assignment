import React from 'react'
import location from '../images/location.png'
import coins from '../images/coins.png'

function Heading() {
    return (
        <div className='w-full'>
            <div className='ml-[100px] mt-[36px] mb-[32px]'>

                <div className='flex gap-[12px] items-center'>
                    <div className='text-[35px] leading-[47.25px] font-semibold text-[#3D3D3D]' >Senior Product Designer</div>
                    <div className='rounded-full h-[4px] w-[4px] bg-[#D1D1D1]'></div>
                    <div className='text-[--text-grey] text-[14px] leading-[18.9px]'>posted 2 days ago</div>
                    <div className='w-[57px] h-[22px] rounded-full flex items-center justify-center gap-[4px] bg-[#ECFDF3] border-[#ABEFC6] border-[1px]'>
                        <div className='rounded-full h-[6px] w-[6px] bg-[#17B26A]'></div>
                        <div className='text-[12px] text-[#067647]'>Open</div>
                    </div>
                </div>

                <div className='text-[#5D5D5D] flex gap-4 items-center mt-6'>
                    <div className='flex gap-[8px]'>
                        <img src={location}></img>
                        <div>Delaware, USA</div>
                    </div>
                    <div className='rounded-full h-[4px] w-[4px] bg-[#D1D1D1]'></div>
                    <div className='flex gap-[8px]'>
                        <img src={coins}></img>
                        <div>$300k-$400k</div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[--border-grey]'></div>
        </div>
    )
}

export default Heading