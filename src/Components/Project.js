import React from 'react'

function Project(props){
    return(
        <div className='w-1/2 mt-6 mb-6'>
            <h1 className='text-center text-xl bold'>{props.title}</h1> 
            <img className='w-2/3 mx-auto' alt={props.imgAlt} src={props.imgSrc}></img>
        </div>
    )
}

export default Project