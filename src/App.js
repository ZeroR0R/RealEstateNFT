import React from 'react'
import './App.css'

import { Mint, View, Navbar, Homepage } from './components'

function App() {
  return (
    <div className="App">
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Homepage />
        <View />
        <Mint />
    </div>
  );
}

export default App;
