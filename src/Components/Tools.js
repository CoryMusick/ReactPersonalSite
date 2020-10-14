import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

function Tools(props){
        return(
                <div className={props.show ? "" : "hidden"}>
                <div className='flex px-32'>
                    <div className='flex flex-col mr-12 w-1/2'>
                        <div className='flex mb-2 justify-between items-center pr-12'>
                            <div className='text-lg'>Microsoft Office</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center pr-12'>
                            <div className='text-lg'>Google Chrome</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center pr-12'>
                            <div className='text-lg'>Mac</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center pr-12'>
                            <div className='text-lg'>Windows</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} />   
                            </div>   
                        </div>
                        <div className='flex mb-2 justify-between items-center pr-12'>
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
                    <div className='flex flex-col w-1/2'>
                    <div className='flex mb-2 justify-between items-center pl-12'>
                            <div className='text-lg'>Intellij</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={farStar} />   
                            </div>
                        </div>
                        <div className='flex mb-2 justify-between items-center pl-12'>
                            <div className='text-lg'>Atlassian / Jira</div>
                            <div className='flex'>
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={fasStar} /> 
                                <FontAwesomeIcon icon={farStar} /> 
                                <FontAwesomeIcon icon={farStar} />   
                            </div>
                        </div>
                    <div className='flex mb-2 justify-between items-center pl-12'>
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

