import React, { useState } from 'react'
import ProfExp from '../Components/ProfExp'
import Education from '../Components/Education'

function Experience(props){
const [showEdu, setShowEdu] = useState(false)
return ( 
<div>
  <div className='flex'>
    <div className='text-darkBlue bg-mintCream rounded-lg shadow flex-col px-4'>
      <div className='flex flex-row justify-around'>
        <div onClick={ showEdu ? () => setShowEdu(false) : null} className={ !showEdu ? "underline text-3xl" : "text-3xl"}>Professional Experience</div>
        <div onClick={() => setShowEdu(true)}className={ showEdu ? "underline text-3xl" : "text-3xl"}>Education</div> 
    </div> 
    <ProfExp show={!showEdu} />
    <Education show={showEdu} />   
    </div>
    </div>                                                                                                                   
</div>
    )
}

export default Experience