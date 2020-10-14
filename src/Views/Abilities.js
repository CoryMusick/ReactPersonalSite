import React, { useState } from 'react'
import Tools from '../Components/Tools'
import Skills from '../Components/Skills'

function Abilities(){
const [showTools, setShowTools] = useState(false)
return(
    <div className='w-full'>
        <div className='flex'>
            <div className='flex flex-col text-darkBlue bg-mintCream rounded-lg w-full shadow px-4'>
                <div className='flex flex-row justify-around'>
                    <div onClick={ showTools ? () => setShowTools(false) : null} className={ !showTools ? "underline text-3xl" : "text-3xl"}>Skills</div>
                    <div onClick={() => setShowTools(true)}className={ showTools ? "underline text-3xl" : "text-3xl"}>Tools</div> 
                </div> 
                <Skills show={!showTools} />
                <Tools show={showTools} />   
            </div>
        </div>                                                                                                                   
    </div>
    )
}


export default Abilities