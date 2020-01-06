import React from 'react';
import logo from './logo.svg';
import './App.css';

import SignUp from './components/SignUp/SignUp';

import Troubleshoot from './components/Troubleshoot';


function App() {
  return (
    <div className="App">
<SignUp />

      <Troubleshoot/>

    </div>
  );
}

export default App;
