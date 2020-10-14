import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function StarRating(props){
    let html
    const buildStars = (number) =>{
        console.log(number)
        if(number < 5){
            for(let i = 1; i < number; i++){
              html += <div><FontAwesomeIcon icon='star' /> </div> 
            }
            return html
        }
    }
    return(
        <div className='flex'>
            <div className='text-lg mb-2'>{props.title}</div>
            <div>{buildStars(props.rating)}</div>
        </div>
    )
}

export default StarRating