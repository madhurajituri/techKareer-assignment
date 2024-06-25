import React from 'react'
import deleteimg from '../images/delete.png'
import edit from '../images/edit.png'
import eye from '../images/eye.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.png'
import message from '../images/message_black.png'

function JobPreview() {
    const job = [
        {
            image: user2,
            name: "Applicaants",
            number: "400"
        },
        {
            image: user3,
            name: "Matches",
            number: "100"
        },
        {
            image: message,
            name: "Messages",
            number: "147"
        },
        {
            image: eye,
            name: "Views",
            number: "800"
        }
    ]
    return (
        <div className='mt-[36px] flex justify-center'>
            <div>
                <div className='flex gap-4 w-full'>
                    <div className='flex rounded-[8px] w-[172px] gap-[10px] justify-center items-center h-[46px] border-[0.8px] border-[--primary] bg-[#FEF4F2]'>
                        <img src={deleteimg} alt="Delete job"></img>
                        <div className='text-[16px] leading-[21.6px] text-[--primary]'>Delete job</div>
                    </div>
                    <div className='flex rounded-[8px] w-[172px] gap-[10px] justify-center items-center h-[46px] border-[2px] border-[#FED3CA] bg-[--primary]'>
                        <img src={edit} alt="Edit job"></img>
                        <div className='text-[16px] leading-[21.6px] text-white'>Edit job</div>
                    </div>
                </div>

                <div className='mt-[24px] p-[12px] flex flex-col gap-[12px]'>
                    {job.map((item, index) => (
                        <div className='flex flex-col gap-[12px]'>
                            <div key={index} className='flex h-[42px] items-center justify-between'>
                                <div className='flex gap-[10px]'>
                                    <img src={item.image}></img>
                                    <div className='text-[16px] leading-[21.6px] text-[#4F4F4F]'>{item.name}</div>
                                </div>
                                <div className="font-semibold text-[#3D3D3D]">{item.number}</div>
                            </div>
                            {index !== 3 && <div className='border-[#E7E7E7] border-[1px]'></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobPreview