import './App.css';
import Chessboard from './components/Chessboard/Chessboard'
import Juomapeli from './components/Juomapeli/Juomapeli';

import React, { useState } from 'react';


function App() {
  const [showComponent, setShowComponent] = useState(true);
  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    
    
      <div id="app"> 
        <button onClick={toggleComponent}>
        {showComponent ? 'Pelaa rikkinäistä shakkia' : 'Pelaa juomapeliä'}
      </button> <br />
      {showComponent && <Juomapeli />} {/* Display Chessboard component */}
      
      {!showComponent && <Chessboard />} {/* Display Juomapeli component */}
    
      </div>
    
    
  );
}

export default App;
