import React from 'react'

function SelectionNavbar() {
  return (
    <div className='h-[67px] w-full border-[1px] border-[--border-grey] px-[100px] flex items-center gap-[72px]'>
        <div className='text-[--primary] font-semibold'>Job Preview</div>
        <div className='text-[--text-grey]'>Applicants</div>
        <div className='text-[--text-grey]'>Match</div>
        <div className='text-[--text-grey]'>Messages</div>
    </div>
  )
}

export default SelectionNavbar