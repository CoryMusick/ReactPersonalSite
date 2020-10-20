import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Views/Home'
import Experience from './Views/Experience'
import Abilities from './Views/Abilities'
import SideNav from './Components/SideNav'
import headshot from './Assets/headshot.jpg'
import Projects from './Views/Projects'

function App() {
  return (
<div>
<Router>  
  <div className='w-full'>
    <div className='flex w-full'>
      <div className='flex w-full flex-col'> 
            <div className='flex w-full flex-col items-center text-mintCream mb-6'>
              <img alt='headshot' className='h-64 w-64 rounded-full'  src={headshot}></img>
                  <h1 className='text-3xl'>Cory Musick</h1>
                  <h3 className='text-lg'>Software Developer</h3> 
            </div>  
            <div className=''>
            <SideNav />
          </div>      
            <div className='flex md:px-32'>
            <Switch>
            <Route exact path='/'>
            <Home />
            </Route>
            <Route path='/experience'>
            <Experience />
            </Route>
            <Route path='/abilities'>
            <Abilities />
            </Route>
            <Route path='/projects'>
            <Projects />
            </Route>
            </Switch>
          </div>  
          </div>
        
    </div>
  </div>
 </Router>
  

</div>
  );
}

export default App;
