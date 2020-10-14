import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function ProfExp(props) {
    return(
        <div className={props.show ? "" : "hidden"}>
             <div>
                                                                                                                                                                      
            <div><span className='font-black text-xl'>  Front End Developer</span> July 2019 - October 2020</div>
            <div className='text-lg'>Grunt Style<a className='ml-2' target="blank_" href='//gruntstyle.com'><span><FontAwesomeIcon size='xs' icon={faLink} /></span></a></div>   
            <ul className="mb-4">
              <li>
              -  Turn Photoshop and Adobe XD mockups into production ready responsive web pages using HTML, CSS, JavaScript, and small reactive libraries such as Sinious JS.
              </li>
              <li>
              - Work in a small team to break down a monolithic CSS and JavaScript files into smaller reusable snippets for better code management and faster website load times.
              </li>
              <li>
              - Integrate thrid-party applications into Grunt Style's website to provide more functinality to customers and employees.
              </li>
            </ul>
          </div>
          <div>                                                                                                                                        
            <div><span className='font-black text-xl'>Psychological Operations Team Leader</span> January 2017 - Current</div>
            <div className='text-lg'>US Army Reserve</div>  
            <ul className="mb-4">
              <li>
              - Uses modern marketing strategies and campaigning techniques to influence observable actions in select foreign populations.
              </li>
              <li>
              - Communicates clearly and effectively with community leaders in order to build rapport, solve problems and ultimately ensure mission success. 
              </li>
              <li>
              - Conducts populations studies in order to ensure messaging and marketing is effective and culturally sensitive
              </li>
            </ul>
          </div>
          <div>                                                                                                                                                       
            <div><span className='font-black text-xl'>Satellite Communications Technician</span> September 2012 - January 2017</div>
            <div className='text-lg'>US Army</div>   
            <ul className="mb-4">
              <li>
              - Operated, maintained and repaired various versions of military multi-channel satellite communication ground terminals, system and networks.
              </li>
              <li>
              - Applied troubleshooting procedures to military satellite communication equipment in order to restore mission-essential communications to over 100 personnel in a tactical environment.
              </li>
              <li>
              - Promoted above peers to Crew Chief of a Tactical Communications Node, which was responsible for providing communications and connectivity to a network of over 150 personnel.
              </li>
              <li>
              - Recognized on the Commandant’s List at a military leadership school, which is reserved for the top 5% of graduates. 
              </li>
            </ul>
          </div>    
        </div>                                                                                                                           
    )
}

export default ProfExp