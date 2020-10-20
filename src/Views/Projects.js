import React from 'react'
import Project from "../Components/Project"
import gruntStyleImage from "../Assets/Gruntstyle.png"
import myResumeImage from "../Assets/MyResume.png"

function Projects(){
    return(
        <div className='w-full'>
  <div className='flex w-full'>
    <div className='text-darkBlue bg-mintCream rounded-lg shadow flex-col mx-2 px-4 w-full'>
      <div className='flex flex-col md:flex-row justify-around'>
        <Project 
        title='Grunt Style E-Commerce Site'
        imgAlt='gruntstyle image'
        imgSrc={gruntStyleImage}/>
        <Project 
        title='Resume React App'
        imgAlt='Image of this React App'
        imgSrc={myResumeImage}/>
      </div>
      </div>
      </div>
      </div>
    )
}

export default Projects
