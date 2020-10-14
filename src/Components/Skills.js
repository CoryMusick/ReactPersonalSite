import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


function Skills(props){
        return(
        <div className={props.show ? "" : "hidden"}>
            <div className='flex px-32'>
                <div className='flex flex-col mr-12 w-1/2'>
                    <div className='flex mb-2 justify-between items-center pr-12'>
                        <div className='text-lg'>HTML</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                    <div className='flex mb-2 justify-between items-center pr-12'>
                        <div className='text-lg'>CSS</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                    <div className='flex mb-2 justify-between items-center pr-12'>
                        <div className='text-lg'>JavaScript</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                    <div className='flex mb-2 justify-between items-center pr-12'>
                        <div className='text-lg'>Shopify</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>   
                    </div>
                    <div className='flex mb-2 justify-between items-center pr-12'>
                        <div className='text-lg'>Java</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                <div className='flex mb-2 justify-between items-center pl-12'>
                        <div className='text-lg'>JQuery</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                    <div className='flex mb-2 justify-between items-center pl-12'>
                        <div className='text-lg'>MySQl</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                <div className='flex mb-2 justify-between items-center pl-12'>
                        <div className='text-lg'>React</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>   
                    </div>
                    <div className='flex mb-2 justify-between items-center pl-12'>
                        <div className='text-lg'>Spring</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                    <div className='flex mb-2 justify-between items-center pl-12'>
                        <div className='text-lg'>C#</div>
                        <div className='flex'>
                            <FontAwesomeIcon icon={fasStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} /> 
                            <FontAwesomeIcon icon={farStar} />   
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
         
        )
}


export default Skills

