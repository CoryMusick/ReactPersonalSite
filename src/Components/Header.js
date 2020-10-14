import React from 'react'
import Navigation from './Navigation'

function Header(){
    return (
        <header className='border-b flex justify-between items-center p-3'>
             <div className='flex w-full h-vh justify-center text-3xl'>
            <div className='flex flex-col items-center'>
                <h1>Cory Musick</h1>
                <h1>Software Developer</h1>
            </div>
        </div>
            <Navigation />
        </header>
        )
}

export default Header