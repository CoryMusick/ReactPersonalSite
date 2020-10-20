import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

function Tools(props){
        return(
                <div className={props.show ? "" : "hidden"}>
                <div className='flex flex-col items-center md:flex-row px-8 md:px-32'>
                    <div className='flex flex-col md:mr-12 w-full md:w-1/2'>
                        <div className='flex mb-2 justify-between items-center md:pr-12'>
                            <div className='text-lg'>Microsoft Office</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center md:pr-12'>
                            <div className='text-lg'>Google Chrome</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center md:pr-12'>
                            <div className='text-lg'>Mac</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center md:pr-12'>
                            <div className='text-lg'>Windows</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>   
                        </div>
                        <div className='flex mb-2 justify-between items-center md:pr-12'>
                            <div className='text-lg'>Visual Studio Code</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={farStar} />   
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full md:w-1/2'>
                    <div className='flex mb-2 justify-between items-center md:pl-12'>
                            <div className='text-lg'>Intellij</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={farStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center md:pl-12'>
                            <div className='text-lg'>Atlassian / Jira</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={farStar} /> 
                                <FontAwesomeIcon icon={farStar} />   
                            </div>
                        </div>
                    <div className='flex mb-2 justify-between items-center md:pl-12'>
                            <div className='text-lg'>Adobe XD</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
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


export default Tools

