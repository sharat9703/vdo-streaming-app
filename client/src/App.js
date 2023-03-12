import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Player from './Player';
import Main from './Main';


const App = ()=>{
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
             <Route index element={<Home/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/player/:id' component={<Player/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    
  )
} 

export default App;