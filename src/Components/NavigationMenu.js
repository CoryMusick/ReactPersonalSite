import React from 'react'
import { Link } from "react-router-dom";


function NavigationMenu(props) {
    return(
        <div className='w-full'>
            <ul className='flex justify-around px-32'>
                <li className='inline-block text-lg py-4'>
                    <Link to='/' 
                    className='text-mintCream hover:underline '
                    onClick={props.closeMenu}>
                    About Me
                    </Link>
                </li>
                <li className='inline-block text-lg py-4'>
                    <Link to='/experience' 
                    className='text-mintCream hover:underline'
                    onClick={props.closeMenu}>
                    Experiences
                    </Link>
                    
                </li>
                <li className='inline-block text-lg py-4'>
                    <Link to='/abilities' 
                    className='text-mintCream hover:underline'
                    onClick={props.closeMenu}>
                    Abilities
                    </Link>
                </li>
                <li className='inline-block text-lg py-4'>
                    <Link to='/projects' 
                    className='text-mintCream hover:underline'
                    onClick={props.closeMenu}>
                    Projects
                    </Link>
                </li>
            </ul>  
        </div>
 
    )
}

export default NavigationMenu