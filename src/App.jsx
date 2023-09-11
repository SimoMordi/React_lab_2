import React, { useState } from 'react';
import NavbarButton from './components/Navbar/NavbarButton';


function App() {
 
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarButton/>
      
    </>
  );
}

export default App;
