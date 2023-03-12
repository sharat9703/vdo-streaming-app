import React from 'react';

import './App.css';

const App = ()=>{
  return (
    <div className='App'>
      <header className='header'>
        <video controls muted>
          <source src='http://localhost:8000/video' type='video/mp4'></source>
        </video>
      </header>
    </div>
  )
}

export default App;