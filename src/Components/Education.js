import React from 'react'

function Education(props){
        return(
            <div className={props.show ? "" : "hidden"}>
            <div className='text-xl'>Codeup</div>                                                                                                                                                             
            <div><span className='font-black text-lg'>Full Stack Web Developement</span></div>
            <ul className="mb-4">
            <li>
            - A fully-immersive, project-based, and intensive 18 week full stack Java career accelerator that provides students with 600+ hours of expert instruction in software development.
            </li>
            <li>
            - HTML and CSS instruction based on user experience and creating layouts with a mobile-first responsive approach.      
            </li>
            <li>
            - Multiple JavaScript modules covering arrays, objects, loops, BOM, DOM and event listening. 
            </li>
            <li>
            - Hands-on experience writing Ajax requests, promises and making requests to external REST API's.
            </li>
            <li>
            - Full stack training using Java for backend logic and MySQL for data persistence.
            </li>
            <li>
            - Java modules covering OOP, inheritance and polymorphism, exception handling and MVC.
            </li>
            <li>
            - Multiple JavaScript modules covering arrays, objects, loops, BOM, DOM and event listening. 
            </li>
            <li>
            - Hands-on experience creating SpringBoot applications with use of SpringSecurity, utilizing dependency injection, controllers, and form model binding from views.            
            </li>
            </ul>                                                                                                                                                            
            <div className='text-xl'>Texas State University</div>                                                                                                                                                             
            <ul className='pb-4'>
            <li>
            - 96 hours towards Bachelor of Science in Computer Science
            </li>
            </ul>
        </div>
         
        )
}


export default Education

