import React, { useState } from 'react'
import ProfExp from './ProfExp'
import Education from './Education'


function DividedContainer(props){
    const [showView1, setShowView1] = useState(true)
    return(
        <div className='flex w-full'>
            <div className='text-darkBlue bg-mintCream rounded-lg shadow flex-col px-4 w-full'>
                <div onClick={() => setShowView1(!showView1)} className='flex md:hidden justify-end hover:underline focus:underline mt-4 mr-2'>
                    { showView1 ? props.titleTwo : props.titleOne }
                </div>
                <div className='flex flex-row text-3xl justify-around'>
                    <div className={showView1 ? " underline block" : "md:block hidden"} onClick={showView1 ? null : () => setShowView1(true) }><span className={ showView1 ? "underline" : null }>{props.titleOne}</span></div>
                    <div className={showView1 ? "hidden md:block" : "block underline"} onClick={showView1 ? () => setShowView1(false) : null }><span className={ showView1 ? null : "underline"}>{ props.titleTwo }</span></div>
                </div> 
                <ProfExp show={showView1} />
                <Education show={!showView1} />  
                { showView1 ? props.viewOneHTML : props.viewTwoHTML } 
            </div>
        </div>     
    )
}

export default DividedContainer