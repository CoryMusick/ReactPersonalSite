import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(){
    return (
        <div className='w-full'>
            <div className='flex flex-col text-darkBlue bg-mintCream rounded-lg w-full shadow px-4'>
                <div className='flex flex-col text-center'>
                    <h2 className='text-3xl'>
                    Hello!
                    </h2>
                    <div className='text-xl'>
                    I am a bootcamp trained full-stack developer and Army veteran with professional experience as a front-end developer.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home