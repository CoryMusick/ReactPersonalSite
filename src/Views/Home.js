import React from 'react'

function Home(){
    return (
        <div className='w-full'>
            <div className='flex flex-col text-darkBlue bg-mintCream rounded-lg w-full shadow px-4'>
                <div className='flex flex-col text-center'>
                    <h2 className='text-3xl'>
                    Hello!
                    </h2>
                    <div className='text-xl'>
                    As a person, I strive to better myself and my peers by learning from every experience and maintaining a contagious positivity. 
                    I bring this same energy to my career as a software developer by communicating with and learning from my team as well as quickly 
                    picking up new languages, frameworks, tools, tips, and tricks.                     </div>
                </div>
            </div>
        </div>
    )
}

export default Home