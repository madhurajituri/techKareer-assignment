import React from 'react'
import Navbar from './components/Navbar.jsx'
import SelectionNavbar from './components/SelectionNavbar.jsx'
import Heading from './components/Heading.jsx'
import Skills from './components/Skills.jsx'
import Info from './components/Info.jsx'
import JobPreview from './components/JobPreview.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <SelectionNavbar />
      <div className='flex w-full h-full border-[1px] border-[--border-grey]'>
        <div className='w-[1319px] h-full border-[1px] border-[--border-grey]'>
          <Heading/>
          <Skills/>
          <Info/>
          <Footer />
        </div>
        <div className='border-[1px] border-[--border-grey] w-[409px] bg-[#FCFCFC]'>
          <JobPreview />
        </div>
      </div>
    </div>
  )
}

export default App